
/*
示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
*/
function majorityElement(nums) {
    const obj = {};
    const n = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
        if (obj[nums[i]] > n) {
            return nums[i];
        }
    }
}

const arr1 = [3,2,3];
console.info(`数组：[3,2,3]的多位元素是${majorityElement(arr1)}`);

const arr2 = [2,2,1,1,1,2,2];
console.info(`数组：[2,2,1,1,1,2,2]的多位元素是${majorityElement(arr2)}`);