const React = require("react");
const Fragment = React.Fragment;

const Form = function(props){
<Fragment>
  <form>
    <div className="form-group">
      <label htmlFor="bookTitle">Title</label>
      <input type="text" className="form-control" id="bookTitle" aria-describedby="emailHelp" value={props.title} />
    </div>
    <div className="form-group">
      <label htmlFor="bookAuthor">Author</label>
      <input type="text" className="form-control" id="bookAuthor" value={props.author} />
    </div>
    <div className="form-group">
      <label htmlFor="bookPages">Number of Pages</label>
      <input type="number" className="form-control" id="bookPages"  value={props.pages} />
    </div>
    <div className="form-group">
      <label htmlFor="currentPage">Current Page</label>
      <input type="number" className="form-control" id="currentPage" value={props.currentPage} />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="readBefore" checked={!!props.isRead} />
      <label className="form-check-label" htmlFor="readBefore">I Read This Book Before</label>
    </div>
    {props.title ? <button type="submit" id="editBook" className="btn btn-warning">Edit Book</button> : <button type="submit" id="addBook" className="btn btn-primary">Add Book</button>}
  </form>
</Fragment>
}

module.exports = Form;
