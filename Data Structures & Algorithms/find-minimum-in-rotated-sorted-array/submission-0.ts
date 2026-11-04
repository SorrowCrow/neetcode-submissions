class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let i =0;
        if(nums[nums.length-1]<= nums[0]){
            i =nums.length-1;
            while(i>1 && nums[i]>=nums[i-1] ){
                i--;
            }
        }
        
        return nums[i];
    }
}
