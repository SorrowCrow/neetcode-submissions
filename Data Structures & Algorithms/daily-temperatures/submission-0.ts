class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = [];
        let highest  = temperatures.length-1;
        for(let i = temperatures.length-1; i>=0; i-- ){
            const cur = temperatures[i];
            if(cur>=temperatures[highest]){
                res.unshift(0);
                highest = i;
            }else {
                for(let b = i+1; b<=highest; b++){
                    if(temperatures[b]>cur){
                        res.unshift(b-i);
                        break;
                    }else if (b===highest){
                        res.unshift(highest-i);
                    }
                }
            }
        }
        return res;
    }
}
