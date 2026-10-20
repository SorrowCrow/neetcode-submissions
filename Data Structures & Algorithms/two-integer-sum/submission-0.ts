class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i<nums.length;i++){
            let b = i+1;
            while(b<nums.length && nums[i]+nums[b]!==target) {b++};
            if(nums[i]+nums[b]===target){
                return [i,b]
            }       
        }
        // let obj:{[n:number]: number[]} = {};

        // nums.map((n, index)=>{
        //     if(obj.hasOwnProperty(n)){

        //     }
        // })
    }
}
