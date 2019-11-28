// 根据this查找策略，将方法放在context上，然后调用此方法
Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn; // 删除挂载方法
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
child.getAge.myCall(parent);