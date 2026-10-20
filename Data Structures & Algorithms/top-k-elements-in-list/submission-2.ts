class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj:{[n:number]:number} = {};

        for(const num of nums){
            obj[num] = (obj[num]||0)+1;
        }

        return Object.entries(obj).sort((a,b)=>obj[b[0]]-obj[a[0]]).slice(0,k).map(n=>Number(n[0]));
    }
}
