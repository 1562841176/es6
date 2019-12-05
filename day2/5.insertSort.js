/*
工作原理:是通过构建有序序列,对未排序数组,在已排序序列中从后向前扫描,找到相应位置并插入。
         算法描述:
             1. 从第一元素开始,该元素可以默认已经被排序
             2. 取出下一个元素,在已经排序序列中从后向前扫描
             3. 如果已排序的元素大于新元素,将该元素移到下一个位置
             4.重复步骤3,直到找到已排序的元素小于或者等于新元素的位置
             5.将新元素插入到该位置
             6.重复2~5
 */
function insertSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1; //排好序的数组最后一个下标
        current = arr[i]; //待排序的数值
        //让待排序的值与排序好的数组值进行比较
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        //待排序的数值大于等于排序好的值
        arr[preIndex + 1] = current;

    }
    return arr;
}




var arr = [3, 5, 15, 2, 26, 4, 19, 27];
console.log(insertSort(arr));