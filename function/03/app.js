function hallo(who){
    console.log("Hallo "+ who());
}

function getName(){
    return "Welt!"
};

hallo(getName);