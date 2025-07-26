# Documentação do Projeto Grupo Marca

## Arquitetura

O projeto é uma aplicação web simples com uma arquitetura cliente-servidor.

*   **Cliente (Front-end):** O front-end é construído com HTML, CSS (Sass) e JavaScript (jQuery). Ele é responsável por renderizar a interface do usuário e interagir com o usuário.
*   **Servidor (Back-end):** O back-end é um servidor Node.js simples usando o framework Express.js. Sua principal responsabilidade é servir os arquivos estáticos do front-end.

## Front-end

### Estrutura de Arquivos

*   `view/index.html`: O arquivo HTML principal que define a estrutura da página.
*   `view/assets/`: Contém todos os ativos do front-end.
    *   `css/`: Contém os arquivos CSS compilados.
    *   `js/`: Contém os arquivos JavaScript.
    *   `img/`: Contém as imagens.
    *   `libs/`: Contém as bibliotecas de terceiros.

### CSS (Sass)

O projeto utiliza Sass para estilização. Os arquivos Sass estão localizados no diretório `view/assets/sass/`. O arquivo principal é `main.scss`, que importa todos os outros parciais.

### JavaScript

O projeto utiliza jQuery para manipulação do DOM e interações. O arquivo JavaScript principal é `view/assets/js/main.js`.

### Bibliotecas

*   **Bootstrap 4:** Framework front-end para criar interfaces responsivas.
*   **jQuery:** Biblioteca JavaScript para manipulação do DOM.
*   **Font Awesome:** Biblioteca de ícones.
*   **Magnific Popup:** Plugin de lightbox para jQuery.
*   **Owl Carousel:** Plugin de carrossel para jQuery.

## Back-end

### server.js

O arquivo `server.js` é o ponto de entrada da aplicação. Ele cria um servidor Express.js que serve os arquivos estáticos do diretório `view/`.

```javascript
var express = require("express");

var app     = express();
var port    = process.env.PORT || 80;

app.use(express.static(__dirname + '/view/'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/view/index.html');
});

app.listen(port);

console.log("Running at Port", port);
```

## Implantação

O projeto está configurado para ser implantado no Heroku, como indicado no arquivo `package.json`.

```json
"repository": {
  "type": "git",
  "url": "https://git.heroku.com/grupo-marca.git"
}
