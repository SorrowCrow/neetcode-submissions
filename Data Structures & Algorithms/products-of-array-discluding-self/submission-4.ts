class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const sol = Array(nums.length).fill(nums[0]);
        sol[0]=1;
        for (let i = 1; i<nums.length;i++){
            if(nums[i]!==1){
                for(let b =0; b<nums.length;b++){
                    if(b!==i){
                        sol[b] = sol[b]*nums[i];
                    }
                }
            }

        }

        return sol;
    }
}
