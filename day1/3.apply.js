// 根据this查找策略，将方法放在context上，然后调用此方法
Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window;
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

class Parent {
    constructor() {
        this.age = 8;
    }
}

class Child {
    constructor() {
        this.name = 'child'
    }
    getAge() {
        console.log(this.age)
    }
}
let child = new Child();
let parent = new Parent();
child.getAge.myApply(parent);
var sum = function(num1, num2) {
    console.log(this)
    return num1 + num2;
};
var sum1 = (num1, num2) => {
    console.log(this)
    return num1 + num2;
};
sum(1, 2);
sum1(3, 2);

function a() {
    return () => {
        return () => {
            console.log(this)
        }
    }
}
a()()()