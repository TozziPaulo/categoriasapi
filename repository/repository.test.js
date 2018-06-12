const test = require('tape');
const repository = require('./repository');

function runTests(){

    var id = null;

    test('Repository GetAllCategories', (t) => {
        repository.getAllCategories((err, categorias) => {
            if(categorias && categorias.length > 0) id = categorias[0]._id;
            
            t.assert(!err && categorias && categorias.length > 0, "All Categories Returned");
            t.end();
        });
    })
    
    test('Repository Disconnect', (t) => {
        t.assert(repository.disconnect(), "Disconnect Ok");
        t.end();
    })
}

module.exports = { runTests }