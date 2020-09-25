/**
 * 用递归的方式生成斐波那契数列的前n项
 * @type {number}
 */
let Nitem = 19;
let arr1 =[];
for (let i = Nitem;i > 0;i--){
    function Fibonacci(n) {
        if (n === 1 || n ===2){
            return 1;
        }
        let num = Fibonacci(n - 1)+Fibonacci(n - 2);
        return num;
    }
    arr1.unshift(Fibonacci(i));
}
let result;
result = arr1;
console.log(result);

/**
 * 定时执行代码
 */
let arr2
function count(){
    for (let i=1; i<11; i++) {
        setTimeout(() => console.log(i), 1000*i)

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
 *判断字符串括号是否匹配
 * @param str输入的字符串
 * @returns {boolean}
 */
function isBracketBalance(str) {
    let leftBracketNum = 0;
    let rightBracketNum = 0;
    for(let i = 0; i < str.length; i++)
    {
        let temp = str.charAt(i); // 付给临时变量增加程序的性能
        if(temp === '(')
        {
            leftBracketNum++;
        }
        if(temp === ')') // 如果是右括号，则leftBracketNum--
        {
            rightBracketNum++;
        }
    }
    if(leftBracketNum === rightBracketNum)
    {
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