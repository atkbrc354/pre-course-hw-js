let passport = {
    name: "Petr",
    surname: "Petrov",
};
let admin = {};
for (let key in passport) {
    admin[key] = passport[key];
}
admin.name = 'Ivan'; 
console.log(passport);
console.log(admin);
