// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const container = document.getElementById('container');
const dropdown = document.getElementById('countries')

dropdown.addEventListener('change', () => {
    let url = `http://www.vibeclubs.com/countries/${dropdown.value}.json`;
    fetchCities(url)
})


const fetchCities = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        container.innerHTML = ""
        data.cities.forEach(city => {
            let card = `<div class="card">
                            <a target="_blank" href="http://www.vibeclubs.com/cities/${city.id}"> ${city.name} </a>
                        </div>`
            container.insertAdjacentHTML('beforeend', card)
        });
    })
}
