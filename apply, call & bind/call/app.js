let logMessage = function (a, b) {
    console.log(this, a, b)
};
logMessage.call({vorname: "Max"}, 3, 4);
