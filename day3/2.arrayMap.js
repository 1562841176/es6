console.log(['1', '3', '1010'].map(parseInt));
/*
对于每个迭代map, parseInt()传递两个参数: 字符串和基数。
所以实际执行的的代码是：
*/
['1', '3', '10'].map((item, index) => {
    return parseInt(item, index)
})

/*
 parseInt(string,radix):
  接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。
  radix 可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。如果省略该参数或其值为 0，
  则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数
  小于 2 或者大于 36，则 parseInt() 将返回 NaN。

*/