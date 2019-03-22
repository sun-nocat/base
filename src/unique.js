/*
 * @Description: 数组去重
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 09:38:15
 */

 /**
  * 
  * @param {array} arr 去重数组
  * 考察多对象的使用，对象的key值唯一
  */

 function unique(arr){
    let obj = {}
    let newarr = []
    arr.map(function(item){
        if(!obj[item]){
            obj[item] = true
            newarr.push(item)
        }
    })
    return newarr
 }

 var arr = [1,1,1,2,23,3,4,5,5,6,77,7,88,88]
 console.log(unique(arr))