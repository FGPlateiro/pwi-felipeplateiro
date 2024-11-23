let produto
let preco, valorFinal, escolhaPag, parcela

escolhaPag = 4
parcela = 5
produto = "roupa"
preco = 200

if(escolhaPag == 1){
    valorFinal = preco - (preco * (15 / 100))
    console.log("O produto ", produto,
         " com valor original R$", preco,
          "recebeu o desconto de 15% pela forma a vista ou no pix e o valor final é R$ ",
           valorFinal)
}if( escolhaPag == 2){
    valorFinal = preco - (preco * (10 / 100))
    console.log("O produto ", produto, " com valor original R$", preco,
         "recebeu o desconto de 10% pela forma a vista no cartão de crédito e o valor final é R$ ",
          valorFinal)
}if( escolhaPag == 3){
 valorFinal = preco / parcela
 console.log("O produto", produto, "com valor original de R$", preco,
    " foi parcelado em duas vezes sem juros com valor de R$ ", valorFinal,
     "por parcela "
 )
}if( escolhaPag == 4){
    valorFinal = preco + (preco * (10 / 100))
    
console.log("O produto ", produto, " com valor original de R$ ", preco,
    "foi parcelado em ", parcela, " vezes, e ficou com valor total de ", valorFinal,
    " com acrescimo de 10% de juros"
)

}


