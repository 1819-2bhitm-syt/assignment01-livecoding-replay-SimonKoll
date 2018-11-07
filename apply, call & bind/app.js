let logThis = function(){
    console.log(this);
};
let logThisBound=logThis.bind({
    vorname: "Max"
});
logThisBound();