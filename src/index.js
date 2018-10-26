function jsHi(text) {
    return text;
} 
var textBoom = jsHi("Привет, я JS");
var digital = jsHi(777);
console.log(textBoom);
console.log(digital);

///////////////////////////////////////////////////////////////

function sum(a, b) {
    return a+b;
};
var boom = sum(333, 333);
console.log(boom);

var a = 100;
var twoBoom = sum(a, 200);
console.log(twoBoom);

///////////////////////////////////////////////////////////////

function sumBoom() {
     return function() {
        return "Хай-Малабай";
    }
    
};
var hiBoom = sumBoom();
console.log(hiBoom);

///////////////////////////////////////////////////////////////

function bigF(f) {
    return function F() {
        var onePlus = f + 1;
        return onePlus;
    }
};
var far = bigF(10);
console.log(far);
console.log(far);
console.log(far);