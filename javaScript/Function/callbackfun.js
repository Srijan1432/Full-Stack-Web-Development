function greet(){
    console.log("Hello Sri");
}

function dance(){
    console.log("i am dancing");
}

function meet(callback){
    console.log("I am going to meet someone");
    callback();
    console.log("I have finished meeting");
}

meet(greet);
meet(dance);
