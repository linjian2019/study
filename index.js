
/**
 * 求两个数组的交集
 * @param a 数组1
 * @param b 数组2
 * @returns {[]}
 */
function practice1(a,b) {
    let rs = [];
    if (a instanceof Array && b instanceof Array){
        for(let i = 0; i < a.length; i++){
            for (let j = 0; j < b.length; j++){
                if(a[i] === b[j]){
                    rs.push(a[i]);
                }
            }
        }
    }else {
        rs.push('输入的a，b必须是数组类型');
    }

    return rs;
}
let a1 = [1,2,3];
let b1 = [2,3,4];
let result1 = practice1(a1,b1);
console.log(result1);

/**
 * 字符串的反转
 * @param str 传入的字符串
 * @returns {string}
 */
function practice2(str) {
   let rs = '';
   if (typeof str === "string"){
       for(let i = str.length - 1;i >= 0; i--) {
           rs += str[i];
       }
   }else {
       rs = "输入值应该为字符串类型"
   }

   return rs;
}
let a2 = "abcde";
let result2 = practice2(a2);
console.log(result2);

/**
 * 判断是否为回文字符串
 * @param str 输入的字符串
 * @returns {string}
 */
function practice3(str) {
    let rs = true;
    let rs1 = '';
    if (typeof str === "string") {
        for (let i = str.length - 1; i >= 0; i--) {
            rs1 += str[i];
        }
        if (str !== rs1) {
            rs = false;
        }
    }else {
        rs = "输入值应该为字符串类型"}
    return rs;
}
let a3 = 'aba';
let b3 = 'abca';
let result31 = practice3(a3);
let result32 = practice3(b3);
console.log(result31);
console.log(result32);


/**
 * 求俩个数组的并集
 * @param a 数组1
 * @param b 数组2
 * @returns {[]} 数组3（并集）
 */
function practice4(a,b) {
    let rs = [];
    if (a instanceof Array && b instanceof Array){
        for(let i = 0; i < a.length; i++){
            for (let j = 0; j < b.length; j++) {
                if(a[i] == b[j]){
                    rs.push(a[i]);
                }
            }
        }
        function add(c) {
            let res =[];
            for (let n = 0;n < c.length; n++) {
                let estimate = rs.indexOf(c[n])
                if(estimate == -1){
                    res = rs.push(c[n]);
                }
            }
            return res;
        }
        add(a4);
        add(b4);
    }else {
        rs.push('输入的a，b必须是数组类型');
    }
    rs.sort();
    return rs;
}
let a4 = [1,2,3];
let b4 = [2,3,4];
let result4 = practice4(a4,b4);
console.log(result4);


/**
 * 深度拷贝
 * @param obj 传入对象
 * @returns {[]}  返回值
 */
function practice5(obj) {
    let rs = [];
    if (obj && typeof obj === "object") {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                // 如果子属性为引用数据类型，递归复制
                if (obj[i] && typeof obj[i] === "object") {
                    rs[i] = practice5(obj[i]);
                } else {
                    // 如果是基本数据类型，只是简单的复制
                    rs[i] = obj[i];
             }
         }
     }
 }
 return rs;
}
let a5 = {
  a:{
      b:1,
      c:2,
      d:{
          e:3
      }
  }
}
let result5 = practice5(a5);
a5.a.b = 2;
console.log(result5);

