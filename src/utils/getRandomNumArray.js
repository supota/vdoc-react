/**
 * 
 * @param {Array} array The array you want to get some numbers.
 * @param {Number} num Number you want to get from array.
 * 
 * @return {Array}
 */
export default (array, num) => {
    let a = array;
    let t = [];
    let r = [];
    let l = a.length;
    let n = num < l ? num : l;
    while (n-- > 0) {
        let i = Math.random() * l | 0;
        r[n] = t[i] || a[i];
        --l;
        t[i] = t[l] || a[l];
    }
    return r;
}