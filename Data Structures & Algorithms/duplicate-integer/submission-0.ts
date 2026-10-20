class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const obj = {};
        for(let i = 0; i<nums.length; i++){
            if(obj.hasOwnProperty(nums[i])){
                return true;
            } else {
                obj[nums[i]] = i;
            }
        }
        return false;
    }
}
