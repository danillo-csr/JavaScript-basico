//cria uma referencia para um elemento do tipo <ul> que seja filho de um elemento com id = app
var listElement = document.querySelector('#app ul');
//cria uma referencia para um elemento do tipo <input> que seja filho de um elemento com id = app
var inputElement = document.querySelector('#app input');
//cria uma referencia para um elemento do tipo <button> que seja filho de um elemento com id = app
var buttonElement = document.querySelector('#app button');

//faz a conversão do arquivo JSON armazenado localmente para um array. Ou se o arquivo estiver vazio, ele retorna um array vazio []
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// define a função renderTodos, que irá mostrar os itens do array todos como itens<li> de uma lista<ul>
function renderTodos(){
    //reseta a renderização do listElement, ou seja, não apaga o conteúdo, apaga apenas o que é mostrado em tela
    listElement.innerHTML = '';
    
    //percorre o array todos e adiciona cada posição em todo
    for(todo of todos){
        
        //cria um elemento do tipo <li>
        var todoElement = document.createElement('li');
        //cria uma variavel que recebe o conteúdo de cada posição do array
        var todoText = document.createTextNode(todo);
        //cria um elemento do tipo <a>
        var linkElement = document.createElement('a');
        //configura o atributo href do elemento <a>, para receber o valor '#'
        linkElement.setAttribute('href', '#');

        //o metodo indexOf() captura a posição de um determinado item (todo) no array e adiciona na variável pos
        var pos = todos.indexOf(todo);
        //configura o atributo onclick, para executar a função deleteTodo() que recebe como parametro a váriavel pos
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        //cria a variavel linkText para receber um texto 'excluir'    
        var linkText = document.createTextNode('Excluir');
        //adiciona o elemento linkText como um elemento filho de linkElement
        linkElement.appendChild(linkText);

        //adiciona o elemento todoText como um elemento filho de todoElement
        todoElement.appendChild(todoText);
        //adiciona o elemento linkElement como um elemento filho de linkElement
        todoElement.appendChild(linkElement);
        //adiciona o elemento todoElement como um elemento filho de listElement
        listElement.appendChild(todoElement);
    }
}
//executa a função renderTodos()
renderTodos();

// define/executa a função addTodo ao clicar no botão que é referenciado pela variável buttonElement
buttonElement.onclick = function addTodo(){
    // a variável todoText recebe o coneúdo inserido no input referenciado por inputElement
    var todoText = inputElement.value;
    // através do método push(), insere no array 'todos', o conteúdo da variável todoText, capturado anteriormente
    todos.push(todoText);
    // zera o conteúdo do input, colocando um espaço em branco ('')
    inputElement.value = '';
    // executa o metodo renderTodos();
    renderTodos();
    // executa o método sabeToStorage(), que salva o conteúdo do array localmente
    saveToStorage();
}
// define a função deleteTodo, recebendo como paramentro, a variavel pos, que irá identificar o elemento a ser deletado
function deleteTodo(pos){
    // executa o método splice no array 'todos', recebendo como parametro a posição (pos) e quantos itens deletar a partir daquela posição (1)
    // sendo assim, ele deleta apenas a posição indicada
    todos.splice(pos,1);
    // executa a função renderTodos()
    renderTodos();
    // executa a função saveToStorage(), ou seja, salva localmente as alterações
    saveToStorage();
}
// define a função saveToStorage, que serve para salvar localmente as alterações no arra todos
function saveToStorage(){


    // cria um armazenamento local dos itens do array 'todos', na forma de um arquivo JSON
    localStorage.setItem('list_todos', JSON.stringify(todos));
}