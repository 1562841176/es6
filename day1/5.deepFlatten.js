Array.prototype.deepFlatten = function() {
    let result = [];
    console.log(this);
    this.forEach(function(val, idx) {
        if (Array.isArray(val)) {
            val.forEach(arguments.callee); // 为子数组则递归执行
        } else {
            result.push(val)
        }
    })
    return result;
};

var arr = [2, 3, [2, 3],
    [3, 'ff', ['s', 2]], { name: 'tom' }
];

console.log(arr.deepFlatten())