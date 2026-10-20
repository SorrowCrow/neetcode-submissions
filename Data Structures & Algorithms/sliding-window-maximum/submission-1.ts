class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res = [];
        let max = undefined;
        let maxIndex = undefined;

        for (let r = k - 1; r < nums.length; r++) {
            if (maxIndex === r - k || maxIndex === undefined) {
                max = undefined;
                maxIndex = undefined;
                for (let i = r; i > r - k; i--) {
                    if (max === undefined || nums[i] > max) {
                        maxIndex = i;
                        max = nums[i];
                    }
                }
            }

            if (nums[r] > max) {
                maxIndex = r;
                max = nums[r];
            }
            res.push(max);
        }
        return res;
    }
}

// m.set(nums[r], (m.get(nums[r])||0)+1);
// max = max===undefined ? nums[r]: Math.max(max, nums[r]);

// if(r+1>=k){
//     res.push(max);
//     m.set(nums[(r+1)-k], m.get(nums[(r+1)-k])-1);
//     m.set(nums[r], (m.get(nums[r])||0)+1);
// }

// for(let r = 0; r<nums.length; r++){
//     m.set(nums[r], (m.get(nums[r])||0)+1);
//     max = max===undefined ? nums[r]: Math.max(max, nums[r]);

//     if(r+1>=k){
//         res.push(max);
//         m.set(nums[(r+1)-k], m.get(nums[(r+1)-k])-1);
//         m.set(nums[r], (m.get(nums[r])||0)+1);
//     }
// }
