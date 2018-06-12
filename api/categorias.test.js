const test = require('tape');
const supertest = require('supertest');
const cidades = require('./categorias');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests(){

    var app = null;
    server.start(categorias, repository, (err, app) => { 
        var id = null;
        test('GET /categorias', (t) => {
            supertest(app)
                .get('/categorias')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    if(res.body && res.body.length > 0) id = res.body[0]._id;
                    t.error(err, 'No errors')
                    t.assert(res.body && res.body.length > 0, "All Categories returned")
                    t.end()  
                })
        })
        

        server.stop();
     })
}

module.exports = { runTests }