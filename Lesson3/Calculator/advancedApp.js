var zahl1 =20;
var zahl2=3;
let printCalculation = function(operator, calculate){
    console.log(zahl1 + " " + operator + " "+ zahl2 +" = " + calculate(zahl1, zahl2));
}
function sum(num1, num2){
    return num1 + num2;
}
function difference(num1, num2){
    return num1 - num2;
}

function product(num1, num2){
    return num1 * num2;
}
function quotient(num1, num2){
    return num1 / num2;
}

printCalculation("+", sum);
printCalculation("-", difference);
printCalculation("*", product);
printCalculation("/", quotient);
printCalculation("^", function(num1, num2){
    return num1 ** num2;
});

printCalculation("%", function(num1, num2){
    return num1 % num2;
});

printCalculation(("^"), (num1, num2) => num1 ** num2);
printCalculation(("%"), (num1, num2) => num1 % num2);