import './nav.js'
import '../css/lista-tarefas.css'


//atribuindo elementos nas Variaveis

const inputTarefa = document.querySelector('#input-nova-tarefa')
const button = document.querySelector('#btn-adicionar')
const listaTarefas = document.querySelector('#lista-tarefas')



button.addEventListener('click', () => {
  const descricaoTarefa = inputTarefa.value
  //criar elemento
  const li = document.createElement('li')
  //adiciona o elemento li
  li.className = 'tarefa'
  // adicionar um atributo ao elemento

  //li.append(valor)
  // no caso do atributo class pode-se utilizar o código:

  li.innerHTML = `
	<div>${descricaoTarefa}</div>
  <button class="btn-excluir">Excluir</button>`

  li.addEventListener('click', function (event) {
    if (event.target.className == 'btn-excluir') {
      listaTarefas.removeChild(li)
    }
  })

  listaTarefas.appendChild(li)

})