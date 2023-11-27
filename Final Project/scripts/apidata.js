// Using async/await for a cleaner structure
async function getRandomUser() {
    const url = "https://randomuser.me/api";

    try {
        const response = await fetch(url);
        const data = await response.json();
        const user = data.results[0];
        displayUser(user);
    } catch (error) {
        console.error('Error fetching random user:', error);
        // Optionally, display an error message on the webpage
        // document.getElementById("apiData").innerHTML = "Error fetching random user. Please try again.";
    }
}

function displayUser(user) {
    const userContainer = document.getElementById("apiData");
    userContainer.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.large}" alt="User Image">
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
}

// Call getRandomUser function when the page loads
getRandomUser();