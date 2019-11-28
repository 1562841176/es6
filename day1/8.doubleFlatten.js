var arr = [
    ['h', 'e', 'l', 'l', 'o'],
    ['m', 'y'],
    ['w', 'o', 'r', 'l', 'd'],
    ['!']
];

var result = [];
for (let i = 0; i < arr.length; i++) {
    result.concat(arr[i])
}
console.log(result)