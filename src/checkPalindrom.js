/*
 * @Description: 判断一个字符串是否回文
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 09:30:03
 */

 /**
  * 
  * @param {string} str 需要判断的字符串
  * 考察数组和字符串的基本操作
  * split('')将字符串转化为数组
  * reverse()字符串翻转
  * join('')数组转换为字符串 
  */

 function checkPalindrom(str){
    return str === str.split('').reverse().join('');
 }

 console.log(checkPalindrom('dwdqd')) 
