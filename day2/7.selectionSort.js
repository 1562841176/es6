/*
 稳定排序算法
 该方法的基本思想:
 遍历数组，设置最小值索引为0，如果取出值比当前最小值小，就替换最小值索引，
 遍历完成后，将第一个元素与最小值索引上的值交换。
      
 */

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}



var arr = [15, 3, 5, 2, 26, 4, 19, 27];
console.log(selectionSort(arr));