/*
 * @Description: 雯波那锲数列
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 17:20:38
 */


 /**
  * 
  * @param {*} n 
  * 斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、
  * ……在数学上，斐波纳契数列主要考察递归的调用
  * 本位的数等于前两个数之和
  * 
  * 备注：
  * 1. 数列的前两项是固定的0 , 1,所以while循环中判断if(i<=1)。。
  * 2. 除了前两项，之后的数据直接使用递归即可
  */
 function getFibonacci(n){
    var fibarr = []
    var i = 0
    while(i<n){
        if(i<=1){
            //第一次和第二次的值为0,1
            fibarr.push(i)
        }else{
            fibarr.push(fibarr[i-1]+fibarr[i-2])
        }
        i++
    }
    return fibarr
 }


 console.log(getFibonacci(10))