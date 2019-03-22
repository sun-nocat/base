/*
 * @Description: 随机生成指定长度的字符串
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 17:42:21
 */


/**
 * 
 * @param {number} n 随机字符串的长度
 * 
 * 1. 考察Math.random()函数  生产从0-1随机的数字
 * 2. Math.floor()取整
 * 3. str.charAt(number) 获取字符串对应位置的字符
 */
function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz01234565789'
    let newStr =''
    for (let i = 0; i < n; i++) {
        var tmp = Math.floor(Math.random()*str.length)
        var data = str.charAt(tmp)
        newStr += data
    }
    return newStr
}



console.log(randomString(8))