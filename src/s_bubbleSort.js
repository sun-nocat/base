/*
 * @Description: 冒泡排序
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 10:13:53
 */

/**
 * 
 * @param {arr} arr 待排序数组
 * 思路：
 * 1. 依次比大小，小的和大的位置交换
 * 时间复复杂度: 
 * 1. O(n2)
 * 2. 稳定
 * 3. n越小越好
 * 备注:
 * 
 * 
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //i不变，j++  arr[i] 和它之后的数组进行比较
            if(arr[i]>arr[j]){
                //
                let max = arr[i]
                arr[i] = arr[j]
                arr[j] = max
            }
        }
    }
    return arr
}

var arr = [1,5,3,4,12,2,4,6,5,21,2,4,46,8,3,32]
console.log(bubbleSort(arr))