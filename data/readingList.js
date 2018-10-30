var books = [];
var selectedBook = {};

module.exports = {
  getBooks() {
    return books;
  },
  setBook(id) {
    var index = books.findIndex(function(book){
      book.id = id;
      selectedBook = books[index];   
    }) 
    },
  getBook() {
    return selectedBook;
  },
  addBook(book) {
    books.push(book);
  },
  updateBook(id, book) {
    var index = books.findIndex(function(book){
    book.id = id;
    books[index] = book;
    })
  },
  deleteBook(id) {
    var index = books.findIndex(function(book) {
    book.id = id;
    books.splice(index, 1);
    })
  }
}
