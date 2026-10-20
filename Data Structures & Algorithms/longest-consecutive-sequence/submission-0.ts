class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums = [...new Set(nums)].sort((a,b)=>a-b);

        if(nums.length === 0){
            return 0;
        }

        let sol = 1;
        let count = 1;

        for (let i =1; i< nums.length; i++){
            if(nums[i-1]===nums[i]-1){
                count++;
            } else{
                sol = sol>count ? sol : count;
                count=1;
            }
        }

        return sol>count ? sol : count;

    }
}
