/*
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
*/

function isAnagram(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    if (sLen != tLen) {
        return false;
    }
    const obj = {};
    for (let i = 0; i < sLen.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        obj[t[i]] = (obj[t[i]] || 0) - 1;
    }
    return Object.values(obj).every(item => item == 0);
}

const s = "anagram";
const t = "nagaram";
console.log(`字符串：${s} 和字符串：${t}${isAnagram(s,t) ? '是' : '不是'}互为字母异位词`);