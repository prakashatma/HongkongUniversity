(function(window){
    var PrakashGreeter = {};
    PrakashGreeter.name="Prakash";
    PrakashGreeter.sayHi = function (){
        console.log("Hi " + PrakashGreeter.name);
}    

    window.PrakashGreeter = PrakashGreeter;
})(window)