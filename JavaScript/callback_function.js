function first(x){
    setTimeout(function(){
        console.log(1);
        x();  //it is equivalent to second()     
    },1000)
}
function second(){
    console.log(2);
}
function third(){
    console.log(3);
}
//first(second); //here second is a callback function
//anonymous functions - functions having no name
first(function(){
    console.log(2)
});

