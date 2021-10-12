document.addEventListener('DOMContentLoaded', () => {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const arr = [];

  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => arr.push(...data));

  function findMatches(wordToMatch, arr) {
    return arr.filter((restaurant) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return restaurant.zip.match(regex) || restaurant.city.match(regex);
    })
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, arr);
    const html = matchArray.map((restaurant) => ` <li> <span class="name"?>City:${restaurant.city}, Zip Code:${restaurant.zip}</span></li>`);
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', displayMatches);
});