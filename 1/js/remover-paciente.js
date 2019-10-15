//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    var confirma = confirm("Tem certeza de que deseja excluir o paciente?");
    if (confirma){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
    
        },300);
    }else{
        return false;
    }
    
});


