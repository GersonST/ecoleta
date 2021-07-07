# ecoleta
♻️ Ecoleta é um projeto Open Source desenvolvido na Next Level Week (1.0) da Rocketseat utilizando TypeScript, Node, React e React Native.


## Tecnologias
#### Server ( [NodeJS](https://nodejs.org/en/) + [Typescript](https://www.typescriptlang.org/) )
 * [Express](https://expressjs.com/)
 * [KnexJS](http://knexjs.org/)
 * [Node SQLite3](https://github.com/mapbox/node-sqlite3)
 * [CORS](https://github.com/expressjs/cors)
 * [Multer](https://github.com/expressjs/multer)
 * [Celebrate](https://github.com/arb/celebrate)

#### Web ( [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) )
 * [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
 * [React Icons](https://react-icons.github.io/react-icons/)
 * [React Dropzone](https://github.com/react-dropzone/react-dropzone)
 * [Leaflet](https://leafletjs.com/) e [React Leaflet](https://react-leaflet.js.org/)
 * [Axios](https://github.com/axios/axios)
 * API do IBGE: **<kbd>[Estados](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)</kbd>** e **<kbd>[Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)</kbd>**
 
#### Mobile( [React Native]() + [Typescript](https://www.typescriptlang.org/) )
 * [Expo](https://expo.io/), [Expo Google Fonts](https://github.com/expo/google-fonts), [Expo Location](https://docs.expo.io/versions/latest/sdk/location/), [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
 * [Axios](https://github.com/axios/axios)
 * [React Navigation](https://reactnavigation.org/docs/getting-started)
 * [React Native Maps](https://github.com/react-native-community/react-native-maps)

## Instalação
 1. Se já não tiver, instale o [Node](https://nodejs.org/en/download/)
 1. Clone este repositório
 1. Entre na pasta do respositório e dentro de cada uma das pastas server, web e mobile e execute pelo terminal/prompt:
    ```sh 
     $ npm install 
    ```
 1. #### Servidor
    ```sh
     # Execute dentro da pasta /server
     
     # Instacia o banco
     $ npm run knex:migrate
     
     # Popula o banco
     $ npm run knex:seed
     
     # Abre o servidor em modo de desenvolvimento
     $ npm run dev
    ```
   
 1. #### Web
    ```sh
     # Execute dentro da pasta /web
     
     # Abre o site em modo de desenvolvimento
     $ npm start
    ```
   
