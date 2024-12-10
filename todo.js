const inputTarefa = document.getElementById('inputTarefa');
const botaoadicionar = document.getElementById('adicionarTarefa');
const listatarefas = document.getElementById('listatarefas');

//codeium; refactor| Explain | Generate JSdoc|x
function adicionartarefa(){
    const tarefaTexto = inputTarefa.ariaValueMax.trim();
    if (Tarefatexto !==""){
        let ll = document.createElement(li);
        li.textcontent = Tarefatexto;

        listatarefas.appendChild(li)

        inputTarefa.value = "";


    }   
}

botaoadicionar.addEventListener('keypress', function(event))
 {
    if(Event.key === Enter) {
        adicionartarefa();
    }
}