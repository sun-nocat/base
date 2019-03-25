/*
 * @Description: js日常使用的技巧
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-25 13:04:19
 */

/**
 * 获取指定范围内的随机数
 * 包含最大值和最小值
 */
function getRadomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 随机获取数组中的元素
 */

function getRadomFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}


/**
 * 生成从0到指定值的数字数组
 */
var arr = [],
    length = 100,
    i = 1;
for (; arr.push(i++) < length;) {}


/**
 * 打乱数字数组的顺序
 * 洗牌算法
 */


var arr = [1, 2, 3, 4, 5, 6, 7]
//洗牌算法
function shuffle(arr) {
    var i = arr.length,
        t, j;
    while (i) {
        j = Math.floor(Math.random() * i--);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr
}
// console.log(shuffle(arr))

//下边的数组随机排序不准确
arr.sort(function () {
    return Math.floor(Math.random() - 0.5)
})


/**
 * 
 * 对象转换为数组
 */
var obj = {
    0: 'qian',
    1: 'long',
    2: 'chu',
    3: 'tian',
    length: 4
}


var objArr = [].slice.call(obj)

var arr = []
Object.keys(obj).map(function (key) {
    arr.push(obj[key])
})

/**
 * 验证是否是数组
 */

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}
//  console.log(isArray(['1',2]))

/**
 * 获取数组中最大值和最小值
 * */

//1.排序实现

var arr = [2,4,7,7,8,2,2,3,43,4,565] 
arr.sort(function(a,b){
    return a-b
})
var min = arr[0]
var max = arr[arr.length-1]

//2.假设法

var max = arr[0]
var min = arr[0]
arr.map(function(item){
    max<item?max=item:null
    min>item?min=item:null
})

//3.使用Math的max/min方法

var max = Math.max.apply(null,arr)
var min = Math.min.apply(null,arr)

//4.使用ES6的拓展运算符

console.log(arr.Math(...arr))

/**
 * 保留指定小数位
 */

 var num = 4.211312312
 num = num.toFixed(4) //第四位小数点以四舍五入计算
 