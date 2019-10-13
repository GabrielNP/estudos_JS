/* Como alterar o valor texto de um HTML? */  
    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Web Nutrição";
 
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length;i++){
    var paciente = pacientes[i];

    /*Obter dados dos pacientes*/
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

        /*Validar peso*/
        if (!pesoEhValido){            
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }

        /*Validar altura*/
        if (!alturaEhValida){            
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido");
        }

        /*Calcular IMC*/
        if (alturaEhValida && pesoEhValido){
            var imc = calculaImc(peso,altura);
            tdImc.textContent = imc;
        }

}

/* 
ADD EVENT LISTENER COM FUNÇÃO NOMEADA
    titulo.addEventListener("click", mostrarMensagem);
    function mostraMensagem(){
        console.log("Olá, eu fui clicado");
    }
----------------------------------------------------

ADD EVENT LISTENER COM FUNÇÃO ANÔNIMA
    titulo.addEventListener("click", function (){
        console.log("Sou uma função anonima");
    });
*/

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (Math.pow(altura,2));
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 200){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}