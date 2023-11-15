let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let city = structuredClone(passportWithAddress);
city.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(city);