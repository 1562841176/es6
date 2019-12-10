/*
 稳定排序算法
 该方法的基本思想:
 递归将数组两两个分开直至最多包含两个元素，然后将数组排序合并，
 最终合并为排序好的数组
      
 */

function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    console.log("left:" + left);
    console.log("right:" + right)
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    console.log("result1：" + result)
    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.log("result2：" + result)
    return result;
}



var arr = [15, 3, 5, 2, 26, 4, 19, 27];
console.log(mergeSort(arr));