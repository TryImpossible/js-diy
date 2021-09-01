
/*
示例 1:

输入: [1,2,3,1]
输出: true

示例 2:

输入: [1,2,3,4]
输出: false
*/

/**
 * es6 some 方法遍历
 * @param {*} arr 
 * @returns 
 */
function checkDuplicate(arr) {
    if (!arr) throw Error('arr can not be null');
    if (!(arr instanceof Array)) throw TypeError('arr must be array');
    return arr.some((item, index) => index != arr.indexOf(item));
}

/**
 * es6 Map 存储、判断是否重复
 * @param {*} arr 
 * @returns 
 */
function checkDuplicate2(arr) {
    if (!arr) throw Error('arr can not be null');
    if (!(arr instanceof Array)) throw TypeError('arr must be array');

    const map = new Map();
    for (const item of arr) {
        if (map.has(item)) {
            return true;
        } else {
            map.set(item);
        }
    }
}

const arr1 = [1,2,3];
const r1 = checkDuplicate2(arr1);
console.log('[1,2,3]' + `${r1 ? '': '不'}` + '存在重复元素');

const obj = {};
const arr2 = [obj, {}, obj];
const r2 = checkDuplicate2(arr2);
console.log('[obj, {}, obj]' + `${r2 ? '': '不'}` + '存在重复元素');