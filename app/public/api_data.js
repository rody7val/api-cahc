define({ "api": [
  {
    "type": "get",
    "url": "/notices",
    "title": "Obtener Noticias",
    "name": "getNotice",
    "group": "Notices",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la noticia.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo de la noticia.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido pricipal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Categoria asociada.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Estado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url_img",
            "description": "<p>Dirección de la imagen.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Fecha de creación.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Respuesta de ejemplo con dos noticias en la Base de Datos:",
          "content": "[{\n    \"title\": \"Incentivando el tenis\",\n    \"content\": \"Próximamente la nueva cancha de tenis del club tendrá profesor. En breves ...\",\n    \"category\": \"DEPORTES\",\n    \"status\": false,\n    \"url_img\": \"https://i.imgur.com/WiaAYKn.gif\",\n    \"_id\": \"58730624f210341390a79fd4\",\n    \"created\": \"2017-01-19T02:31:13.000Z\"\n},\n    \"title\": \"Campeonato de Bochas\",\n    \"content\": \"El trío de bochas del Club Atlético Huracán de Chillar está participando del ...\",\n    \"category\": \"DEPORTES\",\n    \"status\": true,\n    \"url_img\": \"https://i.imgur.com/WiaAYKn.gif\",\n    \"_id\": \"58730624f210341390a79fd5\",\n    \"created\": \"2017-01-09T02:31:13.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/notice_controller.js",
    "groupTitle": "Notices"
  },
  {
    "type": "post",
    "url": "/notices",
    "title": "Crear Noticia",
    "name": "postNotice",
    "group": "Notices",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identificador de la noticia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo de la noticia.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido pricipal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Categoria asociada.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Estado.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_img",
            "description": "<p>Dirección de la imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Fecha de creación.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Respuesta de ejemplo al crear una noticia en la Base de Datos:",
          "content": "{\n    \"title\": \"Incentivando el tenis\",\n    \"content\": \"Próximamente la nueva cancha de tenis del club tendrá profesor. En breves ...\",\n    \"category\": \"DEPORTES\",\n    \"status\": false,\n    \"url_img\": \"https://i.imgur.com/WiaAYKn.gif\",\n    \"_id\": \"58730624f210341390a79fd4\",\n    \"created\": \"2017-01-19T02:31:13.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/notice_controller.js",
    "groupTitle": "Notices"
  }
] });
