class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[][] = [];
        let res = 0;
        for(let i =0; i<heights.length;i++){
            const height = heights[i];
            let start = i;
            while(stack.length && stack[stack.length-1][1]>=height){
                const [index, h] = stack.pop();
                res = Math.max(res, h*(i-index));
                start= index;
            }
            stack.push([start, height]);
            
        }
        for(let b =0; b<stack.length;b++){
                res = Math.max(res, stack[b][1] * (heights.length- stack[b][0]));
            }   
            return res;
    }
}
