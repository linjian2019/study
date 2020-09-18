/*周一
   function practice1(a,b) {
         let rs = [];
       for(let i = 0; i < a.length; i++){
           for (let j = 0; j < b.length; j++){
               if(a[i] == b[j]){
                   rs.push(a[i]);
               }
           }
       }
       return rs;
   }
   let a = [1,2,3];
   let b = [2,3,4];
   let result = practice1(a,b);
   console.log(result);
*/
/*周二
   function practice2(str) {
       let rs = '';
       for(let i=a.length-1;i >= 0; i-- ){
           rs += a[i];
       }
            return rs;
   }
        let a = 'abcdef';
        let result = practice2(a);
        console.log(result);
*/
/*周三
function practice3(str) {
            let rs = '';
            let rs1 = '';
            for(let i = str.length-1; i >= 0; i--){
                rs1 += str[i];
            }
            if (str === rs1 ){
                rs = console.log(true);
            } else if (str !== rs1){
                        rs = console.log(false);
            }
            return rs;
        }
        let a = 'aba';
        let b = 'abca';
        let result1 = practice3(a);
        let result2 = practice3(b);
        console.log(result1);
        console.log(result2);
 */
/*周四
     function practice4(a,b) {
          let rs = [];
          let res = [];
          for(let i = 0; i < a.length; i++){
              for (let j = 0; j < b.length; j++){
                  if(a[i] == b[j]){
                      res.push(a[i]);
                  }
              }
          }
          console.log(res);
          for (let n = 0;n < a.length; n++){
              let estimate = res.indexOf(a[n])
              if(estimate == -1){
                  rs.push(a[n]);
              }
          }
          for(let x = 0; x < res.length; x++){
              rs.push(res[x]);
          }
          for (let m = 0;m < b.length; m++){
              let estimate1 = res.indexOf(b[m])
              if(estimate1 == -1){
                  rs.push(b[m]);
              }
          }
          return rs;
      }
      let a = [1,2,3];
      let b = [2,3,4];
      let result = practice4(a,b);
      console.log(result);
*/
/*周五
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
  let a = {
      a:{
          b:1,
          c:2,
          d:{
              e:3
          }
      }
  }
  let result = practice5(a);
  a.a.b = 2;
  console.log(result);

 */