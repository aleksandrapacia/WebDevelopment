const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;
console.log(responseFromServer);

const responseObject = JSON.parse(responseFromServer);

console.log(responseObject.name);
console.log(responseObject.location.state);