class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left =1;
        let right = Math.max(...piles);
        let res = right;
        while(left<=right){
            const k = Math.floor((left+right)/2);
            let count = 0;
            for(const p of piles){
                count+= (Math.ceil(p/k));
            }    
            if(count<=h){
                res = k;
                right = k-1;
            }else{
            left= k+1;
            }
        }

        return res;
        
    }
}
