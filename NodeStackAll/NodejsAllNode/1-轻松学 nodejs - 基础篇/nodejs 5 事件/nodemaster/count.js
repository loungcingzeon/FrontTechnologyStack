let count = function(err){  return "Ther are " + err.length + " elements in the array";};// 改进let adder = function(a, b){  return `thie sum of the 2 numbers is ${a+b+pi}`;};let pi = 3.14;//  第一种写法/*module.exports.counter = count;module.exports.adder = adder;module.exports.pi = pi;*///　第二种暴露方法module.exports = {  counter: count,  adder: adder,  pi: pi};