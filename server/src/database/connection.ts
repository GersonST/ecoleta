import knex from "knex";
import path from "path";

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;

//Migrations = Histórico do database

//create table points
//create table users

//Mapeamento de Database

// points (Pontos de coleta)
//    image
//    name
//    email
//    whatsapp
//    latitude
//    longitude
//    city
//    uf
// items (items para coleta)
//    image
//    title
// point_items (Relacionamento dos itens que um ponto coleta)
//    point_id
//    item_id
// Muitos para Muitos (N-N)(Pivot)
