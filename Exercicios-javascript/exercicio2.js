let numero, verificador

numero = -50

verificador = numero/2

if(Number.isInteger(verificador)){
    if(verificador > 0){
        console.log("esse numero é positivo")
    }if(verificador < 0){
        console.log("esse numero é negativo")
    }
    console.log("esse numero é par")
}else{
    if(verificador > 0){
        console.log("esse numero é positivo")
    }if(verificador < 0){
        console.log("esse numero é negativo")
    }
    console.log("Numero é impar")
}