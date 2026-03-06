{
  "name": "Sermao",
  "type": "object",
  "properties": {
    "titulo": {
      "type": "string"
    },
    "pregador": {
      "type": "string"
    },
    "data": {
      "type": "string",
      "format": "date"
    },
    "descricao": {
      "type": "string"
    },
    "video_url": {
      "type": "string"
    },
    "audio_url": {
      "type": "string"
    },
    "esbo\u00e7o": {
      "type": "string"
    },
    "serie": {
      "type": "string"
    }
  },
  "required": [
    "titulo",
    "data"
  ]
}