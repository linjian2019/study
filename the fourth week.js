var obj_lis = document.querySelector('#fruits').children;
for(let i = 0; i < obj_lis.length; i++){
    obj_lis[i].addEventListener('click', function() {
        alert(this.innerHTML);
    })
}





let A = document.querySelector('#a');
let B = document.querySelector('#b');
let C = document.querySelector('#c');
A.addEventListener('click', function() {
    alert('a');
})
B.addEventListener('click',function (event) {
    event = event || window.event;
    event.stopPropagation();
    alert('b');
})
C.addEventListener('click',function (event) {
    event = event || window.event;
    event.stopPropagation();
    alert('c');
})




let colorList = ['red','orange','yellow','green','cyan','blue','violet'];
let yanse = () => {
    let color1 = colorList[Math.round(Math.random()*(colorList.length-1))];
    return color1;
}
let btn =  document.querySelector('#btn');
btn.addEventListener('click', function() {
    btn.style.background = yanse();
})






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
    this.animal = ['dog','kitty','mouse'];
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
    return this.split('').reverse().join('');
}
console.log('abcd'.reverse());





let show = () => {
    document.querySelector('#Textarea').innerHTML=document.querySelector('#Input').value;
}



