<h1 align="center">TRAVELERS</h1>

<p align="center">
  <img src="./public/mobile.gif" alt="Mockup" height="400" />
</p>

### Sobre
Travelers é um projeto para repositório, ele funciona como uma rede social para os viajantes, mostrando os lugares visitados como um post, nele você pode publicar o local que visitou, juntamente com uma descrição e foto. As usuários também podem comentar em seus posts.

## Técnologias utilizadas 🚀

 - [Typescript](https://www.typescriptlang.org/)
 - [Expo](https://docs.expo.dev/)
 - [Styled-Components](https://styled-components.com/)
 - [Date-fns](https://date-fns.org/)
 - [JSON-Server](https://github.com/typicode/json-server)
 - [React Native Lottie](https://github.com/lottie-react-native/lottie-react-native)

### Sobre as técnologias
Como este é um projeto para repositório e somente mobile eu utilizei o **json-server** para simular o back end, mas caso queira fazer o seu próprio fique a vontade. Também foram utilizados arquivos Lottie para as animações.

## Como instalar 🤔
Inicialmente você precisa clonar este projeto, para isso basta executar o comando abaixo em seu terminal:

```sh
$ git clone https://github.com/jaovito/travelers.git
```

Após clonar o repositório você precisa acessar a pasta dele, se não alterou o nome dela ela deve se chamar **travelers**, com ela aberta em seu terminal execute o comando:

```sh
$ npm install # ou yarn install
```

Com isso será instalado todas as dependências e pacotes do projeto, possibilitando-o que rode este projeto. Com tudo instalado basta rodar o comando abaixo:

```sh
$ npm start # ou yarn start
```

Ah, não se esqueça de rodar o JSON-Server, pois é ele que simula o back end da nossa aplicação, para isso você pode rodar o seguinte comando:

```sh
$ yarn json-server --watch --delay 700 --host **SEU_IP** db.json
```

Não se esqueça de substituir o **SEU_IP** pelo IP da sua máquina, caso contrário o APP não vai encontrar o servidor, caso não saiba onde pode ver seu IP você pode [ver aqui](https://www.techtudo.com.br/noticias/2014/03/como-descobrir-o-ip-interno-e-externo-do-seu-computador-entenda.ghtml)

Pronto 🚀🚀🚀, com isso deverá ser aberto uma aba em seu navegador, agora basta você baixar o app do [Expo](https://docs.expo.dev/get-started/installation/) e escanear o QR code no canto inferior esquerdo da página.
