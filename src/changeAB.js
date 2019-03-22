/*
 * @Description: 不是用中间变量实现两个变量的互换
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 17:09:10
 */



/**
 * 
 * 类似于  a = a +(b - a)
 */
 function changeAB(a,b){
    b =  b - a // -2
    a =  a + b  //2
    b =  a - b
    return [a,b]
 }


 console.log(changeAB(4,2))