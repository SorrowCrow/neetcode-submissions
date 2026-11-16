class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let obj = {};

        for(let i = 0; i<nums.length; i++){
            let n = nums[i];

            if(obj.hasOwnProperty(n)){
                return n;
            }else{
                obj[n]= i;
            }
        }
    }
}
