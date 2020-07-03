

var novaPromise = function() {
    return new Promise(function(resolve, reject){

        var idade = 15;
            if(idade >= 18){
                resolve("Voce já é maior de idade");
            } else{
                reject("Voce ainda é menor de idade!");
            }
        });
}


novaPromise()
.then(function(response){
    function resp(){
        alert(response);
    }
    setTimeout(resp, 2000);
})
.catch(function(error){
    function err(){
        alert(error);
    }
    setTimeout(err, 2000);
});