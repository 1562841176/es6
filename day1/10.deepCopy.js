function deepCopy(target, map = new Map()) {
    if (typeof target == 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = deepCopy(target[key], map)
        }
        return cloneTarget;
    } else {
        return target
    }
}


const source = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

let target = deepCopy(source);
let target1 = source;
console.log(target);
console.log(target1);