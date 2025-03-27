document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://18.207.98.104/api-php-world/api/get_countries.php";
    const tableBody = document.getElementById("countriesTableBody");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${country.code}</td>
                    <td>${country.name}</td>
                    <td>${country.continent}</td>
                    <td>${country.region}</td>
                    <td>${country.population.toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error al obtener los datos:", error));
});
