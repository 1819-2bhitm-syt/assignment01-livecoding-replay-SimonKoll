let seconds = 3;

let logTick = true;

let Morgen = function(){
    console.log("Guten Morgen");
};

let timer = setInterval(() => {
    if(logTick){
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick = !logTick;
}, 1000);

setTimeout(function(){clearInterval(timer);}, seconds * 1000 + 100);
setTimeout(function(){Morgen();}, seconds * 1000 + 100);


