function fetchCountry() {
    const countryName = document.getElementById('countryInput').value;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            document.getElementById('countryInfo').innerHTML = `
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital[0]}</p>
                <p>Population: ${country.population}</p>
                <img src="${country.flags.png}" alt="Flag" width="100">
            `;
        })
        .catch(error => {
            document.getElementById('countryInfo').innerHTML = '<p>Country not found!</p>';
        });
}