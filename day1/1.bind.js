Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('error')
    }
    var _this = this;
    var args = [...arguments].slice(1);
    console.log(args);
    return function F() {
        // 因为返回一个函数，可以new F() 所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        }
        console.log(...arguments);
        return _this.apply(context, args.concat(...arguments))
    }
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
child.getAge.myBind(parent)()