class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const len = height.length;
        if(len<3){
            return 0;
        }
        let l=0;
        let r=1;
        let total = 0;
        let temp = 0;
        let left = height[l];
        while(r<height.length){
            const right = height[r];
            if(right<left){
                temp+=left-right;
            }else if(right>=left){
                total+=temp;
                temp = 0;
                l=r;
                left = height[l];
            }
            r++;
            if(r===height.length && temp>0&&left>right){
                temp=0;
                left--;
                r=l+1;
            }
        }

        return total;
    }
}
