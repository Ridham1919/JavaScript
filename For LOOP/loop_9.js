let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], obj[keys[i]]);
}