async function windowActions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';


  const request = await fetch(endpoint);
  const arr = await request.json();

  function findMatches(wordToMatch, arr) {
    return arr.filter((restaurant) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return restaurant.zip.match(regex) || restaurant.city.match(regex);
    })
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, arr);
    const html = matchArray.map((restaurant) => ` <li> <span class="name"?>City:${restaurant.city}, Zip Code:${restaurant.zip}</span></li>`);
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt) });
}

window.onload = windowActions;