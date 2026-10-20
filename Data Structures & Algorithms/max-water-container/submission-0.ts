class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let r = heights.length;
        let l = 0;
        let max = 0
        while(l<r){
            const left = heights[l];
            const right = heights[r];
            
            if(left<=right){
                const sum = left*(r-l);
                max= sum>max? sum:max;
                l++;
            }else {
                const sum = right*(r-l);
                max= sum>max? sum:max;
                r--;
            }
            
        }
        return max;
    }
}
