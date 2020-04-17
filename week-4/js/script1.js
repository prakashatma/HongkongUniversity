(function(window){
    var atmaGreeter = {};
    atmaGreeter.name= "Atma";
    atmaGreeter.sayHello = function (){
    console.log("Hello " + atmaGreeter.name);
}    
    window.atmaGreeter = atmaGreeter;
})(window)