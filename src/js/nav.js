import '@picocss/pico'
import '../css/global.css'

export const nav =  /* html*/`
<ul>
  <li><a class="contrast" href=" ./index.html">Desenvolvimento Web 1</a></li>
</ul>
<!-- Menu Principal-->
<ul>
  <li>
    <details role="list" dir="rtl">
      <summary role="link" class="contrast">Exercícios</summary> <!-- Texto menu Principal-->
      <ul role="listbox">
        <!-- Sub Menu-->
        <li><a class="primary" href="./login.html">Formulário de Acesso</a></li> <!-- Item do submenu-->
        <li><a class="primary" href="./lista-tarefas.html">Lista de Tarefas</a></li>
        <li><a class="primary" href="./cartao-credito.html">Cartao de Credito</a></li>
      </ul>
      <!-- fim do Sub Menu-->
    </details>
  </li>
</ul>

`

const menu = document.querySelector("#menu"); //Selecionando um ID do html
menu.innerHTML = nav; //Inserindo a id menu dentro da tag NAV
/* Agora todas as tads <nav> estará com a estilização do id menu */