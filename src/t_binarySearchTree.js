/*
 * @Description: 二叉搜索树
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-25 09:32:14
 * 
 * 二叉搜索树是在二叉树的基础上，又加入了一个插入元素的条件，只允许你再左侧节点存储比父节点小的值，在右侧节点存储大于或等于父节点的值。
 * 二叉树的子节点最多有两个节点，不是一定有两个，有一个也可以
 * 
 * 实现的功能：
* 　1、insert(key)：像树中插入一个新的键。

　　2、search(key)：在树中查找一个键。

　　3、inOrderTraverse：中序遍历。

　　4、preOrderTraverse：先序遍历。

　　5、postOrderTraverse：后序遍历。

　　6、min：返回树中最小的值/键。

　　7、max：返回树中最大的值/键。

　　8、remove(key)：从树中移除某个键
 */


function BinarySearchTree() {

    var Node = function (key) {
        this.key = key //保存节点的值
        this.left = null //指向当前节点的左节点和右节点
        this.right = null
    }

    var root = null //初始化二叉树，root代表根节点


    //二叉搜索树节点的插入
    var insertNode = function (node, newNode) {
        //插入节点小于当前节点，就往左边差，如果左边有值的话就递归调用。
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode //递归终止条件
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    //中序遍历  左中右
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    //先序遍历  中左右
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    //后序遍历  左右中
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    //获取最小值，肯定是最左侧的值最小了
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    //获取最大值，肯定是最右侧的值最大了
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    //搜索节点
    var searchNode = function (node, key) {
        if (node === null) { //递归终止条件  如果没找到节点的话
            return false
        }
        if (key < node.key) {
            searchNode(node.left, key)
        } else if (key > node.key) {
            searchNode(node.right, key)
        } else {
            return true
        }
    }

    //删除节点  先找到，然后删除
    var removeNode = function (node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key) //这里的node就是我们要找的节点
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {

            //如果找到的节点最叶子节点 直接将节点的值置空就可以
            if (node.left === null && node.right === null) {
                node = null
                return null
            }
            //如果节点具有右节点或者左节点的话 
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            //如果节点的左右节点都在.我们需要找到右侧子树中最小的节点。然后替换点当前的节点
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }

    }

    //返回最小的节点
    var findMinNode = function (node) {
        if (node && node.left !== null) {
            node = node.left
        }
        return node
    }




    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }

    this.min = function () {
        return minNode(root)
    }
    this.max = function () {
        return maxNode(root);
    }

    this.search = function (key) {
        return searchNode(root, key);
    }

    this.remove = function (key) {
        root = removeNode(root, key);
    }

}

function printNode(value) {
    console.log(value);
}
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.inOrderTraverse(printNode);//3，5，6，7，8，9，10，11，12，13，14，15，18，20，25
tree.remove(15);
console.log("--------------")
tree.inOrderTraverse(printNode);//3，5，6，7，8，9，10，11，12，13，14，18，20，25
tree.insert(100);
console.log("--------------");
tree.inOrderTraverse(printNode);//3，5，6，7，8，9，10，11，12，13，14，18，20，25，100
console.log(tree.min(),"min");//3，“min”
console.log(tree.max(),"max");//100,"max"
console.log(tree.search(66))//false
console.log(tree.search(8))//true

console.log("--------------");
tree.preOrderTraverse(printNode);//11,7,5,3,6,9,8,10,18,13,12,14,20,25,100
console.log("--------------");
tree.postOrderTraverse(printNode);//3,6,5
