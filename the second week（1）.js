/**
 * 用递归的方式生成斐波那契数列的前n项
 * @type {number}
 */
let Nitem = 19;          //19是个例子，我觉得从已经知道的东西反推回去容易理解，所以就用了19往下循环
let arr1 = [];
function Fibonacci(n) {
    if (n === 1 || n === 2){
        return 1;
    }
    let num = Fibonacci(n - 1) + Fibonacci(n - 2);
    return num;
}
for (let i = Nitem; i > 0; i--){
    arr1.unshift(Fibonacci(i));
}
let result;
result = arr1;
console.log(result);


/**
 * 用递归的方式生成斐波那契数列的前n项(更改)
 * @type {number}
 */
let Nitem1 = 19;
let arr11 = [];
function Fibonacci1(n) {
    if (n === 1 || n === 2){
        return 1;
    }
    let num = Fibonacci1(n - 1) + Fibonacci1(n - 2);
    return num;
}
for (let i = 1; i < Nitem1 + 1; i++){
    arr11.push(Fibonacci1(i));
}
let result1;
result1 = arr11;
console.log(result1);


/**
 * 定时执行代码
 */
function count(){
    for (let i = 1; i < 11; i++) {
        setTimeout(() => console.log(i), 1000 * i);
    }
}
count();




/**
 * 时间格式化显示
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.Format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
let date2 = new Date().Format("yyyy年MM月dd日HH:mm:ss");
console.log(date2);


/**
 * 可以理解的日期格式化写法
 * @type {Date}
 */
let crtTime = new Date();
let res1 = dateFormart("yyyy年MM月dd日 hh:mm:ss", crtTime);
console.log(res1);
function dateFormart(fmt, date) {
    let yearStr = fmt.match(/y+/);
    if(yearStr){
        yearStr = yearStr[0];
        let yearNum = date.getFullYear() + "";
        yearNum = yearNum.substr(4 - yearStr.length)
        fmt = fmt.replace(yearStr, yearNum);
    }
    let obj = {
        "M+" : date.getMonth() + 1,
        "d+" : date.getDate(),
        "h+" : date.getHours(),
        "m+" : date.getMinutes(),
        "s+" : date.getSeconds()
    };
    for(let key in obj){
        let reg = new RegExp(`${key}`);
        let fmtStr = fmt.match(reg);
        if(fmtStr){
            fmtStr = fmtStr[0];
            if(fmtStr.length === 1){
                fmt = fmt.replace(fmtStr, obj[key]);
            }else{
                let numStr = "00" + obj[key];
                numStr = numStr.substr((obj[key] + "").length);
                fmt = fmt.replace(fmtStr, numStr);
            }
        }
    }
    return fmt;
}



/**
 *判断字符串括号是否匹配
 * @param str输入的字符串
 * @returns {boolean}
 */
function isBracketBalance(str) {
    let leftBracketNum = 0;
    let rightBracketNum = 0;
    for(let i = 0; i < str.length; i++) {
        let temp = str.charAt(i); // 付给临时变量增加程序的性能
        if(temp === '(') {
            leftBracketNum++;
        }
        if(temp === ')') {
            rightBracketNum++;
        }
    }
    if(leftBracketNum === rightBracketNum) {
        return true;
    }else{
        return false;
    }
}
let String ="(())";
console.log(isBracketBalance(String));

/**
 * 随机生成一个十位数，前两位数为0-3，后八位数0-9随机生成
 * @param min 随机生成数的最小值
 * @param max 随机生成数的最大值
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);//对数值向上取整
    max = Math.floor(max);//对数值向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
let String1 ="";
for (let i = 0; i < 2; i++) {
    let  num = getRandomIntInclusive(0, 3);
    num = parseInt(num, 10);
    String1 = String1 + num;
}
for (let i = 0; i < 8; i++) {
    let  num1 = getRandomIntInclusive(0, 9);
    num1 = parseInt(num1, 10);
    String1 = String1 + num1;
}
console.log(String1);



/**
 * 正则判断字符串数字
 * @param 输入的数字
 * @returns {boolean}
 */
function estimateNum(Num1){
    let inputNum =Num1;
    inputNum = /^\d+$/.test(inputNum);
    return inputNum;
}
let inputString = "456123";
console.log(estimateNum(inputString));