/*
 * @Description: 统计字符串中出现最多的字母
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 09:43:52
 */


/**
 * 
 * 
 * @param {string} str 需要统计的字符串
 * 1. 使用obj,对字符串中的字符进行统计次数。
 * 2. 使用for in 遍历对象，获取最大值
 * 3. 字符串split转数组之后，就可以使用map来遍历数组
 * 4. 对于对象使用for in 遍历，可获取遍历的key值
 */
function findMaxChar(str) {
    if (str.length == 1) {
        return str;
    }
    let obj = {}

    str.split('').map(function (item) {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item]++
        }
    })

    let max = ''
    let maxValue = 1
    for (key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key]
            max = key
        }
    }
    return max
}


console.log(findMaxChar('ddwqdqwdsadsadsadddnmj'))