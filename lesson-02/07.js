let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let surnameBool = {};
for (let key in passportMarried) {
    surnameBool[key] = passportMarried[key];
}
surnameBool.married = true;
console.log(passportMarried);
console.log(surnameBool);