{
  "name": "Event",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "T\u00edtulo do evento"
    },
    "description": {
      "type": "string",
      "description": "Descri\u00e7\u00e3o do evento"
    },
    "date": {
      "type": "string",
      "format": "date",
      "description": "Data do evento"
    },
    "time": {
      "type": "string",
      "description": "Hor\u00e1rio do evento"
    },
    "location": {
      "type": "string",
      "description": "Local do evento"
    },
    "image_url": {
      "type": "string",
      "description": "Imagem do evento"
    }
  },
  "required": [
    "title",
    "date"
  ]
}