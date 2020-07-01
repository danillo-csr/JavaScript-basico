//instancia a classe XMLHttpRequest(), para conseguir usar a funcionalidade do
//ajax para poder recuperar alguma informação de um servidor
var xhr = new XMLHttpRequest();

//utiliza o método open() da classe XMLHttpRequest() 
//e passa como partametro o 'GET' como método de busca
// da informação e a url 'https://api.github.com/users/danillo-csr' como
//fonte da informação 
xhr.open('GET', 'https://api.github.com/users/danillo-csr');
//envia os parametros da requisição
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        //converte o retorno(xhr.responseText) em um objeto para ser mostrado pelo console.log
        console.log(JSON.parse(xhr.responseText));
    }
}
