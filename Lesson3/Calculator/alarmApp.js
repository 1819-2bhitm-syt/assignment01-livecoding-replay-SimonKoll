let logTick = true;
let tickTack = function() {
    if (logTick) {
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick = !logTick;
};

let Morgen = function(){
    console.log("Guten Morgen");
};

let timer = setInterval(tickTack, 1000);

setTimeout(function(){clearInterval(timer);}, 6100);
setTimeout(function(){Morgen();}, 6100);


