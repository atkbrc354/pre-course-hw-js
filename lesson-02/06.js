let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let city = structuredClone(passportWithAddress);
console.log(passportWithAddress.address.city);
console.log(city.address.city = 'Bobryisk');