document.title = "IMC"
var paragrafo = document.createElement('p')
paragrafo.innerHTML = ""
function click1(){
    var nome = document.getElementById("nome")
    nome.style.display = "block"
}

function click2(){
    var peso = document.getElementById("peso")
    peso.style.display = "block"
}

function click3(){
    var altura = document.getElementById("altura")
    altura.style.display = "block"
}

function calcular(){
    var nome = document.getElementById("nome").value
    var peso = Number.parseFloat(window.document.querySelector("#peso").value)
    var altura = Number.parseFloat(window.document.querySelector("#altura").value)
    var imc = (peso / altura)
    if(!nome && !peso && !altura){
        alert("Preencha os campos!")
    }else if(!nome){
        alert("Preencha o seu nome!")
    }else if(!peso){
        alert("Preencha o seu peso!")
    }else if(!altura){
        alert("Preencha a sua altura!")
    }else{
        if(imc < 18.5){
           paragrafo.innerHTML = `Sr.(a): ${nome} <br>O seu imc é de: ${imc} <br>Situação: <strong>Abaixo do peso</strong>`
           var divs = document.querySelector("#res")
        divs.appendChild(paragrafo)
       }else if(imc >= 18.5 && imc < 24.9){
        
           paragrafo.innerHTML = `Sr.(a): ${nome} <br>O seu imc é de: ${imc} <br>Situação: <strong>Peso normal </strong>`
           var divs = document.querySelector("#res")
           divs.appendChild(paragrafo)
       }else if(imc >= 25 && imc < 29.9){
        
           paragrafo.innerHTML = `Sr.(a): ${nome} <br>O seu imc é de: ${imc} <br>Situação: <strong>Sobrepeso</strong>`
           var divs = document.querySelector("#res")
          divs.appendChild(paragrafo)
       }else{
        
          paragrafo.innerHTML = `Sr.(a): ${nome} <br>O seu imc é de: ${imc} <br>Situação: <strong>Obeso</strong>`
          var divs = document.querySelector("#res")
           divs.appendChild(paragrafo)
       }
   }
}

