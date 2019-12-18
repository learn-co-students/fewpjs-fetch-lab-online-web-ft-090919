function fetchBooks() {
  const api = 'https://anapioficeandfire.com/api/books'

  return fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      renderBooks(json);
    });
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function hey(){
  
}