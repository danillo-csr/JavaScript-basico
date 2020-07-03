
var btnElement = document.querySelector('#btn');

function busca(){

var inElement = document.querySelector('#in');
var user = inElement.value;

axios.get('https://api.github.com/users/'+user+'/repos')
.then(function(response){
    //console.log(response);
    if(response.data != null){
        response.data.forEach(repo => {
            var liElement = document.createElement('li');
            var text = document.createTextNode(repo.name);
            liElement.appendChild(text);
            var ulElement = document.querySelector('#repositorios');
            ulElement.appendChild(liElement);
        })
    } else if(response.data == null){
        alert("O perfil foi encontrado mas não possui repositórios públicos!");
    }
    
})
.catch(function(error){
    alert("Perfil de usuário não encontrado, tente novamente!");
    console.warn(error);
});
}