function first(){
    console.log("first method called");
        //simulate code delay
    setTimeout(function(){
        console.log(1);
    }, 1000);
    
}

function second(){
    console.log(2);
}

first();
second();
