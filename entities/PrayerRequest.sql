{
  "name": "PedidoOracao",
  "type": "object",
  "properties": {
    "nome": {
      "type": "string"
    },
    "pedido": {
      "type": "string"
    },
    "anonimo": {
      "type": "boolean",
      "default": false
    },
    "respondido": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "pedido"
  ]
}