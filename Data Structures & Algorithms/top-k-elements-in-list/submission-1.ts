class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj:{[n:number]:number} = {};
        if(nums.length===1){
            return nums;
        }

        for (let i = 0; i<nums.length;i++){
            if(obj.hasOwnProperty(nums[i])){
                obj[nums[i]]++;
            }else{
                obj[nums[i]]=1;
            }
        }

        return Object.keys(obj).sort((a,b)=>obj[b]-obj[a]).slice(0,k).map(n=>Number(n));
    }
}
