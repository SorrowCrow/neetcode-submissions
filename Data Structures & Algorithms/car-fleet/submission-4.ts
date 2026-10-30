class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const combinedAndSorted = position.map((p,i)=>[p, speed[i], (target-p)/speed[i]]).sort((a,b)=>a[0]-b[0]);

        let stack = [];
        for(let i = combinedAndSorted.length-1; i>=0;i--){
            let stepsRemaining = combinedAndSorted[i][2];  
            let prevRemaining = stack.length && stack[stack.length-1];
            if(!prevRemaining || stepsRemaining>prevRemaining){
                stack.push(stepsRemaining);
                
            }  
        }

        return stack.length;
    }
}
