class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l =0, r=nums.length-1;
            let m = Math.ceil((r+l)/2);
            if(nums[l]===target){
                return l;
            }
            if(nums[r]===target){
                return r;
            }
            
            if(target>=nums[r]){
                r=m;
            }else{
                l=m-1;
            }
        while(l<r){
            if(nums[l]===target){
                return l;
            }
            if(nums[r]===target){
                return r;
            }
            m = Math.ceil((r+l)/2);
            if(target>=nums[m]){
                l=m;
            }else{
                r=m-1;
            }
        }
        return -1;
    }
}
