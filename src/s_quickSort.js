/*
 * @Description: 快速排序
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 10:32:16
 */


/**
 * 
 * @param {arrry} arr 数组
 * 思路：
 * 1. 首先参考某个值，将小于它的值放在左数组中，大于它的值放在右数组中。
 * 2. 然后递归进行上一个的左右数组操作。
 * 3. 返回合并的数组就是已经排序之后的数组
 * 时间复杂度:
 * 1. 平均时间 O(nlongn) 最差情况 O(n2) 
 * 2. 不稳定  
 * 3. n较大时比较好
 * 备注:
 * 1. 数组concat()方法用于连接两个或者多个数组， [a].concat(b,c) => [a,b,c]
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let leftArr = []
    let rightArr = []
    let q = arr[0]
    for(let i = 1,l=arr.length; i<l; i++) {
        //注意，循环不是从第一个数字开始，从地二个数字开始
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    console.log('1')
    // arr.map(function(item){
    //     if(item>q){
    //         rightArr.push(item)
    //     }else{
    //         leftArr.push(item)
    //     }
    // })
    //这里不能使用map  否则会报错 Maximum call stack size exceeded  超过最大调用栈大小

    // return [].concat(quickSort(leftArr),[q],quickSort(rightArr))
    return quickSort(leftArr).concat(q).concat(quickSort(rightArr))
}



var arr = [11, 4, 12, 33, 3, 3, 1, 6, 77, 4]
console.log(quickSort(arr))