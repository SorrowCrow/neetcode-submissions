class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);
        for(let i=0; i<temperatures.length; i++){
            const cur = temperatures[i];

            while(stack.length && cur > temperatures[stack[stack.length-1]]){
                const ind = stack.pop();
                const temp = temperatures[ind];
                res[ind] = i-ind;
            }

            stack.push(i);
        }

        return res;
    }
}
