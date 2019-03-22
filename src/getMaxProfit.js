/*
 * @Description: 获取数组最大值和最小值的差
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 17:32:08
 */


/**
 * 
 * @param {array} arr 数组
 * 
 * 1. 考察数组获取最大值最小值
 */
 function getMaxProfit(arr){
    let max = arr[0]
    let min = arr[0]
    arr.map(function(item){
        if(max<item){
            max = item
        } else if(min>item){
            min = item
        }
    })

    return max - min
 }


 var arr = [-2,42,12,34,5,6,12,3,56,7,98]
 console.log(getMaxProfit(arr))