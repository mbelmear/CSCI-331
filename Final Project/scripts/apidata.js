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
        <img src="${user.picture.large}" alt="A headshot of the random user!">
        <br>
        <details>
            <p><b>Location:</b> ${user.location.city}, ${user.location.state}</p>
            <p><b>Gender:</b> ${user.gender}</p>
            <p><b>Email:</b> ${user.email}</p>
        </details>
        <br><hr><br>
        <h3>Information About ${user.name.first}</h3>
        <table>
            <tr class="row">
              <th>Title</th>
              <th>Contact</th>
              <th>Birthday</th>
            </tr>
            <tr>
              <td>${user.name.title} ${user.name.first}</td>
              <td>Phone: ${user.phone}</td>
              <td>DOB: ${user.dob.date}</td> 
            </tr>
            <tr>
              <td>${user.name.title} ${user.name.last}</td>
              <td>Cell: ${user.cell}</td>
              <td>Age: ${user.dob.age}</td> 
            </tr>
          </table>
          <br><br>
          <table>
            <tr class="row">
              <th>Street</th>
              <th>Location</th>
              <th>Coordinates</th>
            </tr>
            <tr>
              <td>Name: ${user.location.street.name}</td>
              <td>Country: ${user.location.country}</td>
              <td>Latitude: ${user.location.coordinates.latitude} </td>
            </tr>
            <tr>
              <td>Number: ${user.location.street.number}</td>
              <td>Post Code: ${user.location.postcode}</td>
              <td>Longitude: ${user.location.coordinates.longitude}</td>
            </tr>
          </table>
        <h4>Sources</h4>
        <ul>
            <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG</a></li>
            <li><a href="https://blog.hubspot.com/website/web-accessibility">Web Accessibility</a></li>
            <li><a href="https://medium.com/@ericapantojacs/semantic-html-cheat-sheet-9194768368bb">Semantic HTML</a></li>
        </ul>
    `;
}

// Call getRandomUser function when the page loads
getRandomUser();