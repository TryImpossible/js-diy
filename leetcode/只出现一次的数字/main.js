/*
示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
*/

function onlyOne(arr) {
    const obj = {};
    arr.forEach(element => {
        obj[element] = (obj[element] || 0) + 1;
    });
    for (const k in obj) {
        if (obj[k] == 1) {
            return k;
        }
    }
}

console.info(`[2,2,1]数组只出现一次的数字是：${onlyOne([2,2,1])}`);
console.info(`[4,1,2,1,2]数组只出现一次的数字是：${onlyOne([4,1,2,1,2])}`);