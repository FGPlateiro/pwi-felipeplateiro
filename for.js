const cars =["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

 for (let i = 0; i < cars.length; i++) {
    text += cars[i];
    console.log("agora foi adicionado o carro", cars[2])
}
console.log(text);
console.log("********************************")
console.log("********************************")

cars.forEach((car, i) =>{
    console.log('o carro ', car, "está na posição ", (i), " do array")
})

