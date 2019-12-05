/*
 冒泡排序是一种简单的排序算法,它重复走访要排序的数列,一次比较两个元素，如果他们的的顺序错误就把他们调换过来，知道没有元素再需要交换，排序完成。
 算法描述如下:   

           比较相邻的元素。如果第一个比第二个大,就交换他们;
           对于每个相邻的元素重复相同的工作,知道最后一个元素,这样最后的元素会是最大的数
           针对所有元素重复以上的步骤,除了最后一个元素
           重复上面1~3步骤,知道排序结束

 */
function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}




var arr = [3, 5, 15, 2, 26, 4, 19, 27];
console.log(bubbleSort(arr));