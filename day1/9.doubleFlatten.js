var arr = [
    ['h', 'e', 'l', 'l', 'o'],
    ['m', 'y'],
    ['w', 'o', 'r', 'l', 'd'],
    ['!']
];

var result = Array.prototype.concat.apply([], arr)
console.log(result)