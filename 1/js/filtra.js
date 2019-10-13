var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
	var pacientes = document.querySelectorAll(".paciente");
	if(this.value.length > 0){
		for (var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value, "i");
			/* Há outra forma de fazer essa busca letra a letra sem as expressões regulares. É com a função substr. 
			O primeiro parâmetro dessa função é a posição de início do array que a função vai iniciar a busca. O segundo é a posiç!ao final.
			var comparavel = nome.substr(0, this.value.length);
			if (!(this.value == comparavel)) {
			 */
			if (!expressao.test(nome)){
				paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

