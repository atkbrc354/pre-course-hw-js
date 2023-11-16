let passport = {
    name: "Petr",
    surname: "Petrov",
};
let admin = {};
for (let key in passport) {
    admin[key] = passport[key];
}
console.log(passport.name);
console.log(admin.name = 'Ivan');
