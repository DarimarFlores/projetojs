function adicionarTarefa() {

    //Obtenemos el valor del campo de la tarea
    let novasTarefas = document.getElementById("novaTarefa").value;

    //Validamos que el valor no sea vacío
    if (novasTarefas  === "") {
        alert("Por favor, inserir uma tarefa");
        return;
    }

    //Crear elemento en la lista
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = novasTarefas + " ";

    //Crear botón de Eliminar
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() { novaTarefa.remove();}

    let botaoconcluida = document.createElement('button');
    botaoconcluida.textContent = "Marcar como concluída";

    // Ação do botão
    botaoconcluida.onclick = function () {
    novaTarefa.style.textDecoration = 'line-through'; // Riscar o texto   
    };

    // Adicionar botão no item
    novaTarefa.appendChild(botaoconcluida);
    listaTarefas.appendChild(novaTarefa);

    //Agregar botón de eliminar al elemento de la lista
    novaTarefa.appendChild(botaoExcluir);

    //Agregar el elemento/la tarea a la lista
    document.getElementById("listaTarefas").appendChild(novaTarefa);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("novaTarefa").value = "";

}