const React = require("react");
const Fragment = React.Fragment;
const Book = require("./book");

const List = function(props) {
<Fragment>
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Reading List</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    </head>
    <body>
      <button type="button" class="btn btn-dark"><a href="/">Add Book</a></button>
      <ul>
        {props.list.map(function(book){
         <Book title={book.title} author={book.author} pages={book.pages} currentPage={book.currentPage} isRead={book.isRead}/>
         )}
        }
      </ul>
      <script src="/js/list.js" type="application/javascript" />
    </body>
  </html>
</Fragment>
}

module.exports = List;
