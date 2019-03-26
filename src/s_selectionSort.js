/*
 * @Description: 选择排序
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-26 09:14:10
 */

/**
 * 选择排序
 * @param {array} arr 待排序数组
 * 1. 最稳定的排序方式，时间复杂度一直都是O(n2)
 * 2. 好处：不占额外的内存空间
 * 3. 
 */
function selectionSort(arr) {
    var len = arr.length
    var minIndex, temp

    for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (var j = i+1; j < len; j++) { //注意内层循环是从 i+1 开始的
            if (arr[j] < arr[minIndex]) {
                minIndex = j //找到最小值的下标
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]  //arr[minIndex]是最小值。将最小值和当前值进行互换
        arr[minIndex] = temp
    }
    return arr
}


var arr = [3, 45, 5, 12, 44, 6, 4, 2, 1, 5, 6, 7, 2, 44, 74, 3]
console.log(selectionSort(arr))