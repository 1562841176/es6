/*
 该方法的基本思想:
            1. 从数列中取出一个数作为基数。
            2. 重新排序数列,所有元素比基准值小的放到基准值前,所有元素比基准值大的放到其后。
            3. 在对基准值左右区间,重复第二步,直到个区间只有一个数
 */
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        console.log(partitionIndex)
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) { //分区操作
    var pivot = left, //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    console.log(arr)
    return index - 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



var arr = [15, 3, 5, 2, 26, 4, 19, 27];
console.log(quickSort(arr, 0, arr.length));