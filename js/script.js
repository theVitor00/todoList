const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task")

let minhaListaDeItens = [];



button.addEventListener('click', (e) => {
    e.preventDefault();
    minhaListaDeItens.push(input.value);
    input.value = ''
    mostrarTarefas();

    console.log(minhaListaDeItens);

});

function mostrarTarefas () {
    let novaLi = ''
    minhaListaDeItens.forEach(tarefa => {
        novaLi = novaLi +  `
        <li class="task">
        <img src="./img/checked.png" alt="check-na-tarefa">
        <p>${tarefa}</p>
        <img src="./img/trash.png" alt="deletar-tarefa">
    </li>`
    });

    listaCompleta.innerHTML = novaLi;
}