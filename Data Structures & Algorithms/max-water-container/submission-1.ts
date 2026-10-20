class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let r = heights.length-1;
        let l = 0;
        let max = 0
        while(l<r){
            const left = heights[l];
            const right = heights[r];
            const sum = Math.min(left,right)*(r-l);
            max= Math.max(sum,max);

            if(left<=right){
                l++;
            }else {
                r--;
            }
            
        }
        return max;
    }
}
