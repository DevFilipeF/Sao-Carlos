import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarPlus, ChevronDown } from "lucide-react";

function buildGoogleUrl(evento) {
  const base = "https://www.google.com/calendar/render?action=TEMPLATE";
  const datePart = evento.data.toISOString().slice(0,10).replace(/-/g,"");

  let dates;
  if (evento.horario) {
    const match = evento.horario.match(/(\d{1,2}):(\d{2})/);
    if (match) {
      const h = String(match[1]).padStart(2, "0");
      const m = String(match[2] || "00").padStart(2, "0");
      const start = `${datePart}T${h}${m}00`;
      const endH = String(parseInt(match[1], 10) + 1).padStart(2, "0");
      const end = `${datePart}T${endH}${m}00`;
      dates = `${start}/${end}`;
    }
  }

  if (!dates) {
    dates = `${datePart}/${datePart}`;
  }

  const params = new URLSearchParams({
    text: evento.titulo,
    dates,
    details: evento.descricao || "IEAD Jardim São Carlos — Setor 08",
    location:
      evento.local ||
      "IEAD Jardim São Carlos — Setor 08, São Carlos, SP",
  });

  return `${base}&${params.toString()}`;
}

function buildOutlookUrl(evento) {
  const datePart = evento.data;
  let startdt = `${datePart}T09:00:00`;
  let enddt = `${datePart}T10:00:00`;

  if (evento.horario) {
    const match = evento.horario.match(/(\d{1,2}):(\d{2})/);
    if (match) {
      const h = String(match[1]).padStart(2, "0");
      const m = String(match[2] || "00").padStart(2, "0");
      startdt = `${datePart}T${h}:${m}:00`;
      const endH = String(parseInt(match[1], 10) + 1).padStart(2, "0");
      enddt = `${datePart}T${endH}:${m}:00`;
    }
  }

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: evento.titulo,
    startdt,
    enddt,
    body: evento.descricao || "IEAD Jardim São Carlos — Setor 08",
    location: evento.local || "IEAD Jardim São Carlos — Setor 08",
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

function buildICS(evento) {
  const datePart = evento.data.replace(/-/g, "");
  let dtstart = `${datePart}`;
  let dtend = `${datePart}`;
  let allDay = true;

  if (evento.horario) {
    const match = evento.horario.match(/(\d{1,2}):(\d{2})/);
    if (match) {
      const h = String(match[1]).padStart(2, "0");
      const m = String(match[2] || "00").padStart(2, "0");
      dtstart = `${datePart}T${h}${m}00`;
      const endH = String(parseInt(match[1], 10) + 1).padStart(2, "0");
      dtend = `${datePart}T${endH}${m}00`;
      allDay = false;
    }
  }

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    allDay ? `DTSTART;VALUE=DATE:${dtstart}` : `DTSTART:${dtstart}`,
    allDay ? `DTEND;VALUE=DATE:${dtend}` : `DTEND:${dtend}`,
    `SUMMARY:${evento.titulo}`,
    `DESCRIPTION:${evento.descricao || "IEAD Jardim São Carlos — Setor 08"}`,
    `LOCATION:${evento.local || "IEAD Jardim São Carlos — Setor 08"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  return URL.createObjectURL(blob);
}

const options = [
  {
    label: "Google Calendar",
    icon: "🗓️",
    action: (ev) => window.open(buildGoogleUrl(ev), "_blank"),
  },
  {
    label: "Outlook",
    icon: "📅",
    action: (ev) => window.open(buildOutlookUrl(ev), "_blank"),
  },
  {
    label: "Apple / iCal (.ics)",
    icon: "🍎",
    action: (ev) => {
      const url = buildICS(ev);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${ev.titulo}.ics`;
      a.click();
      URL.revokeObjectURL(url);
    },
  },
];

export default function AddToCalendar({ evento }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-semibold text-xs rounded-xl hover:bg-blue-100 transition-colors"
      >
        <CalendarPlus size={13} />
        Adicionar ao Calendário
        <ChevronDown
          size={11}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden min-w-[200px]"
          >
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => {
                  opt.action(evento);
                  setOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors text-left"
              >
                <span className="text-base">{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
