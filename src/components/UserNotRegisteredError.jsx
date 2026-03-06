import React from "react";

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">
          Usuário não cadastrado
        </h1>
        <p className="text-slate-600 text-sm">
          Seu login foi reconhecido, mas ainda não há um cadastro ativo para você
          neste sistema. Entre em contato com a liderança da igreja para concluir
          seu cadastro.
        </p>
      </div>
    </div>
  );
}

