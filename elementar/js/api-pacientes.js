var botaoIntegrar = document.querySelector("#integrar-pacientes");

botaoIntegrar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); // objeto do JS responsável por fazer requisiçÕes HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // método que especifica o tipo de requição e para onde

    xhr.addEventListener("load", function(){  // evento load diz quando a resposta da requisição já foi carregada
    var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erroAjax.classList.add("invisivel");
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log("Erro",xhr.status);
            console.log(xhr.response);
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("paciente-invalido");
        }
        
    });

    xhr.send(); // método que envia a requisição
});