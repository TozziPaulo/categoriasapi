const mongodb = require("../config/mongodb");

function getAllCategories(callback){
    mongodb.connect((err, db) => {
        db.collection("categorias").find().toArray(callback);
    })
}

function disconnect(){
    return mongodb.disconnect();
}


module.exports = { getAllCategories, disconnect }