axios.get('https://api.github.com/users/danillo-csr')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});