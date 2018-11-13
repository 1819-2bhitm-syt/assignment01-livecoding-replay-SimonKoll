let logMessage = function (a, b) {
    console.log(this, a, b)
};
logMessage.apply({vorname: "Max"},[3,4]);
