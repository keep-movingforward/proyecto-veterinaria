/*------ Si el usuario se desplaza la transparencia se desactiva ----- */

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });

const logo = document.querySelector('.logo-nav');
const menu = document.querySelector('.menu');

logo.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

  /*--------------- Api Google custom search ----------------*/


  const cx = '66881dcc9643d48a2';
  const apiKey = 'AIzaSyCytzYEgeJIJqjnm0qbef3fBql0CIXtMfI';
  
  document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const query = document.getElementById('search-text').value;
    search(query);
  });
  
  function search(query) {
    
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}+site:blog+mascota&lr=lang_es`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayResults(data.items);
      });
  }
  
  function displayResults(results) {
    const searchResultsElement = document.getElementById('search-results');
    searchResultsElement.innerHTML = '';
  
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('result-container');
      resultElement.innerHTML = `
        <h3 class="result-title"><a href="${result.link}">${result.title}</a></h3>
        <p class="result-snippet">${result.snippet}</p>
      `;
      searchResultsElement.appendChild(resultElement);
    });
  }