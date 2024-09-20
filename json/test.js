const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById('dog-target');

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise.then( function (response) {
        const processingPromise = response.text();
        return processingPromise;
    }).then(function (processedResponse) {
        const dogObject = JSON.parse(processedResponse);
        const img = document.createElement('img');
        img.src = dogObject.message;
        img.alt = 'cute doggo';
        doggos.appendChild(img);
    }).catch(function(error)) {
        alert('oh not it\'s bad')
    }
}

document.getElementById('dog-btn').addEventListener("click", addNewDoggo);