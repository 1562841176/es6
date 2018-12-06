# 超详细 ES6 代码段

[查看详情](https://www.jianshu.com/p/17b1a00fa3c3)                                     [前端技术栈](https://github.com/1562841176/es6CodeFragment/blob/master/img/frontEndTechStack.png "logo")

* ### 数组
#### Array.from

Array.from方法用于将两类对象转为真正的数组：`类似数组的对象`（array-like object）和`可遍历（iterable）的对象`（包括 ES6 新增的数据结构 Set 和 Map）。

对于还没有部署该方法的浏览器，可以用`Array.prototype.slice`方法替代
