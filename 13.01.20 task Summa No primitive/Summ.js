// 13 января 2020 таск на сравнения

var a = 35;
var b = 2;
var sum = a + b;
console.log(sum);
alert(sum);
if(a >= 10){
    oneSum();
}else{
    nonSum();
}
function oneSum(res, litl,big,trash){
if(sum >= 30){
    var res = sum / 15;
    console.log(res);
    alert(res);
}else if( sum < 10 ){
    var litl = b - sum;
    console.log(litl);
    alert(litl);
}if(sum > 10){
    var big = a + sum;
    console.log(big);
    alert(big);
}if(sum = a + b){
    var trash = sum / 100;
    console.log(trash);
    alert(trash);
}
function nonSum(minus){
    if(a < 10){
    var minus = b - a;
    console.log(minus);
    alert(minus);
}
}
}
