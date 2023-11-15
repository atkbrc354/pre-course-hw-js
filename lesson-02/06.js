let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let city = passportWithAddress;
city.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(city);