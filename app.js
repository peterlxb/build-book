// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Contructor add show
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

// Show alerts
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement("div");

  // Add class
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));

  // Get parent
  const container = document.querySelector(".container");

  const form = document.querySelector("#book-form");

  container.insertBefore(div, form);

  // timeout 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 1500);
};

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = " ";
  document.getElementById("author").value = " ";
  document.getElementById("isbn").value = " ";
};

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  //console.log(title, author, isbn);

  //Instanite book
  const book = new Book(title, author, isbn);

  // Instanite UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("please fill in all fileds", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert("book added", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
