let A = document.getElementById("a");
let B = document.getElementById("b");
let C = document.getElementById("c");
A.onclick = function () {
    alert('a');
}
B.onclick = function (event) {
    alert('b');
    event = event || window.event;
    event.stopPropagation();
}
C.onclick = function (event) {
    event = event || window.event;
    event.stopPropagation();
    alert('c');
}




let colorList = ["red","orange","yellow","green","cyan","blue","violet"];
function yanse(){
    let color1 = colorList[Math.round(Math.random()*(colorList.length-1))];
    return color1;
}
let btn =  document.getElementById("btn");
btn.onclick = function(){
    btn.style.background = yanse();
}




var obj_lis = document.getElementById("fruits").getElementsByTagName("li");
for(let i = 0;i < obj_lis.length;i++){
    obj_lis[i].onclick = function(){
        alert(this.innerHTML);
    }
}




function Father() {
}
Father.prototype.say = function () {
    console.log('Hello!');
}
function Son() {
}
let sonObj1 = new Son();
console.log(sonObj1.say);
Son.prototype = new Father();
let sonObj2 = new Son();
console.log(sonObj2.say);






function FatherType() {
    this.animal = ["dog","kitty","mouse"];
}
function SonType() {
    FatherType.call(this);
}
let instance1 = new SonType();
instance1.animal.push("cow");
console.log(instance1.animal);
let instance2 = new SonType();
console.log(instance2.animal);





String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}
console.log("abcd".reverse());