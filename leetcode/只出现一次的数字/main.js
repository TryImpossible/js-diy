/*
示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
*/

/*
解法一：计数

*/
function singleNumber(arr) {
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

console.info(`[2,2,1]数组只出现一次的数字是：${singleNumber([2,2,1])}`);
console.info(`[4,1,2,1,2]数组只出现一次的数字是：${singleNumber([4,1,2,1,2])}`);

/*
解法二：用异或运算符

1. 任何数和自己做异或运算,结果为0,即a^a=0;
2. 任何数和0做异或运算,结果还是自己,即a^0=a;
3. 异或运算中,满足交换律和结合律,即a^b^a=b^a^a=b^(a^a)=b^0=b;

所以出现两次的字母异或运算为得0,出现一次的字母异或运算得到自己.
*/

function singleNumber2(nums) {
    let init = nums[0];
    for (let i = 1; i < nums.length; i++) {
        init ^= nums[i];
    }
    return init;
}
console.info(`[2,2,1]数组只出现一次的数字是：${singleNumber2([2,2,1])}`);