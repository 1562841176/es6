Array.prototype.deepFlatten = function() {
    let result = [];
    let stack = this;
    while (stack.length != 0) {
        let val = stack.pop();
        if (Array.isArray(val)) {
            stack = stack.concat(val)
        } else {
            result.unshift(val)
        }
    }
    return result;
};

var arr = [2, 3, [2, 3],
    [3, 'ff', ['s', 2]], { name: 'tom' }
];

console.log(arr.deepFlatten())