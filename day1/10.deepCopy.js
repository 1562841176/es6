function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(Array[index], index)
    }
    return array
};

function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}


function deepCopy(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};
        if (map.get(target)) {
            return map.get(target)
        }
        const keys = isArray ? undefined : Object.keys(target);
        // for (const key in target) {
        //     cloneTarget[key] = deepCopy(target[key], map)
        // }
        console.log(keys)
        forEach(keys || target, (value, key) => {
            console.log(value, key)
            if (keys) {
                key = value;
            }

            cloneTarget[key] = deepCopy(target[key], map)
        })
        return cloneTarget;
    } else {
        return target
    }

}


const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};



const result = clone(target);
console.log(result);