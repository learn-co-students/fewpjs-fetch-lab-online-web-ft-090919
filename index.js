function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    const p = document.createElement('p')
    p.innerHTML = `<p>Length: ${book.numberOfPages}</p>`
    h2.appendChild(p)
  })
  findBook(json, 5);
}

function findBook(list, number) {
  const main = document.querySelector('main');
  const h3 = document.createElement('h3');
  let book = list[number - 1];
  h3.innerHTML = `${book.name}`;
  main.appendChild(h3);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
