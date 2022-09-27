const pg = require("pg");
const client = pg.Client("postgres://localhost:5432/nodeIntroDB");

client.connect();
module.exports = client;
