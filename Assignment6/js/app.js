getBtn.addEventListener("click", getUser);
let url = "https://randomuser.me/api";

getUser();

function getUser(){
    fetch(url)
    .then(decodeData)
    .then(success, fail);
}

function decodeData(response){
    if(response.ok){
        apiData.innerHTML = "response is " + response.status;
        return (response.json())
    }
    else{
        throw response.status
    }
}

function success(userData){
    apiData.innerHTML = `<img class="user" src=${userData.results[0].picture.large} alt="rando user">
    <h2 class="user">Meet ${userData.results[0].name.first} ${userData.results[0].name.last}</h2>`;

    const apiFirst = userData.results[0].name.first;
    apiform = document.querySelector("form")
    apiform.innerHTML = `<input type="hidden" name="first" value="${apiFirst}"/>`

    const apiLast = userData.results[0].name.last;
    apiform.innerHTML += `<input type="hidden" name="last" value="${apiLast}"/>`

    const apiCountry = userData.results[0].location.country;
    apiform.innerHTML += `<input type="hidden" name="country" value="${apiCountry}"/>`

    const apiAge = userData.results[0].dob.age;
    apiform.innerHTML += `<input type="hidden" name="age" value="${apiAge}"/>`

    const apiLatitude = userData.results[0].location.coordinates.latitude;
    apiform.innerHTML += `<input type="hidden" name="latitude" value="${apiLatitude}"/>`

    const apiLongitude = userData.results[0].location.coordinates.longitude;
    apiform.innerHTML += `<input type="hidden" name="longitude" value="${apiLongitude}"/>
    <input type="submit" id="addBtn" class="btn" value="Add this one"></button>`
}

function fail(error){
    apiData.innerHTML = "Something went wrong with parsing JSON."
    mdnCodes = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    apiData.innerHTML += `<br>The problem: <a href=${mdnCodes}>${error} Error</a>`
}