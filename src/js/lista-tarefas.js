import './nav.js'
import '../css/lista-tarefas.css'



const input = document.querySelector('#input-nova-tarefa')
const button = document.querySelector('#btn-adicionar')
const lista = document.querySelector('#lista-tarefas')
const excluir = document.querySelector('#excluir')


button.addEventListener('click', () => {
    const valor = input.value
    //criar elemento
    const elemento = document.createElement('li')
    // adicionar um atributo ao elemento
    elemento.append(valor)
    // no caso do atributo class pode-se utilizar o código:
    elemento.className = 'tarefa'
    elemento.innerHTML = `
	<div>${valor}</div>
  <button class="btn-excluir">Excluir</button>`
    lista.appendChild(elemento)

})


excluir.addEventListener('click', () => {
   
})

