require("dotenv-safe").load();
const movies = require('./api/categorias');
const server = require("./server/server");
const repository = require("./repository/repository");

server.start(movies, repository, (err, app) => { 
    console.log("just started");
});