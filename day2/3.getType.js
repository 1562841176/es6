function getType(obj) {
    if (obj === null) return String(obj);
    return typeof obj === 'object' ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase() : typeof obj

}


console.log(getType(null));
console.log(getType(undefined));
console.log(getType(new Date()));