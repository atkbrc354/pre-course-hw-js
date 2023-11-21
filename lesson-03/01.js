const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((f) => {
        if(f === "черный" || f === "красный" || f === "желтый"){
            return f;
        }
    }).join('-');
}

console.log(createColorString());