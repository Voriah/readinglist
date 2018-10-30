const fetch = window.fetch;

document.addEventListener("click", function(event) {
  if (event.target && event.target.id === "editBTN") {
    fetch(`/books/${event.target.getAttribute("data-id")}`)
      .then(function(res) {
        window.location = "./book";
      })
      .catch(function(error) {
      console.log(error))
      }
  } else if (event.target && event.target.id === "deleteBTN") {
    fetch(`/books/${event.target.getAttribute("data-id")}`, { method: "DELETE" })
      .then(function(res) {
        window.location = "./list";
      })
  }
})
