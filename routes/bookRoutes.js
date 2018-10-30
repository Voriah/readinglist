const Books = require("../data/readingList");

module.exports = function(app) {
  
  app.get("/books", function(req, res){
   res.json(Books.getBooks());
  })

  app.post("/books", function(req, res) {
    Books.addBook(req.body);
  })

  app.get("/books/:title", function(req, res) {
    Books.setBook(req.params.id); 
  })

  app.put("/books/:title", function(req, res) {
    Books.updateBook(req.params.title, req.body);
  })

  app.delete("/books/:title", function(req, res) { 
    Books.deleteBook(req.params.title);
  })
}
