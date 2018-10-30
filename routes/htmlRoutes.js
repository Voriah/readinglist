const Books = require("../data/readingList");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  })

  app.get("/list", function(req, res) {
    res.render("list", {list: Books.getBooks()} );
  })

  app.get("/book", function(req, res) {
    res.render("bookEdit", Books.getBook());
  })
}
