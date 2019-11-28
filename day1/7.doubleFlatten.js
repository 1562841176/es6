var arr = [
    ['h', 'e', 'l', 'l', 'o'],
    ['m', 'y'],
    ['w', 'o', 'r', 'l', 'd'],
    ['!']
];

var result = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j])
    }
}
console.log(result)