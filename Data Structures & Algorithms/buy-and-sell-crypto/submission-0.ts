class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if(prices.length===1){
            return 0;
        }
        let max = 0;
        let l=0;
        let r=1;
        while(r<prices.length){
            const left = prices[l];
            const right = prices[r];
            if(right>left){
                max = Math.max(max, right-left);
                r++;
            }else if(left>=right){
                l++;
                if(l===r){
                    r++;
                }
            }
        }
        return max;
    }
}
