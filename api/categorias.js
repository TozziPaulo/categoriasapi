module.exports = (app, repository) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.get('/categorias', (req, res, next) => {
      repository.getAllCategories((err, movies) => {
        if(err) return next(err);
        res.json(movies);
      });
    })
  }