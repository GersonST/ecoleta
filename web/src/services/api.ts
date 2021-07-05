import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

// Utilizamos Axios por que podemos usar uma base Url que seria uma Url comum de nossa aplicação e caso no futuro quando fomos modificar a mesma, modificamos apenas nesse local

export default api;
