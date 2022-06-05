class BookList {
  constructor(root, list = []) {
    this.root = root;
    this.todo = list;
  }

  add(title, author, ISBN) {
    let book = new Book(title, author, ISBN);
    this.todo.push(book);
    this.createU();
  }

  createU() {
    this.root.innerHTML = "";
    this.todo.forEach((todo) => {
      let ui = todo.createUI();
      ui.querySelector("span").addEventListener(
        "click",
        this.handleDelete.bind(this, todo.id)
      );
      this.root.append(ui);
    });
  }

  handleDelete(id) {
    let index = this.todo.findIndex((todo) => todo.id === id);
    this.todo.splice(index, 1);
    this.createU();
    return this.todo.length;
  }
}

class Book {
  constructor(title, author, ISBN) {
    (this.title = title),
      (this.author = author),
      (this.ISBN = ISBN),
      (this.id = `id-${Date.now()}`);
  }
  createUI() {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList = "book";
    let bookName = document.createElement("p");
    bookName.innerText = this.title;
    let authorName = document.createElement("p");
    authorName.innerText = this.author;
    let ISBN = document.createElement("p");
    ISBN.innerText = this.ISBN;
    div.append(bookName, authorName, ISBN);
    let span = document.createElement("span");
    span.innerText = "❌";
    li.append(div, span);
    return li;
  }
}

let library = new BookList(document.querySelector("ul"));

let form = document.querySelector(`form`);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  library.add(
    event.target.elements.title.value,
    event.target.elements.author.value,
    event.target.elements.ISBN.value
  );
  event.target.elements.title.value = "";
  event.target.elements.author.value = "";
  event.target.elements.ISBN.value = "";
}
