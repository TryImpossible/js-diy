/*
示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
*/

function firstUniqChar(str) {
    if (!str) throw Error('str can not be null');
    if (typeof str !== 'string') throw TypeError('str must be string');
    const map = {};
    for (const s of str) {
        map[s] = (map[s] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
            return i;
        }
    }
}

const str1 = "leetcode";
console.log('leetcode 第一个唯一字符是' + str1[firstUniqChar(str1)]);
const str2 = "loveleetcode";
console.log('loveleetcode 第一个唯一字符是' + str2[firstUniqChar(str2)]);