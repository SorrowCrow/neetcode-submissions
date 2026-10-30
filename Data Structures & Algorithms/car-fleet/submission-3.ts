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
// 3 4 5 6 7 8
// 4 4 4 4 4 4
// 2 2 2 1 1 1

// 0  3 5 8 10
// 1  3 1 4 2
// 12 3 7 1 1

// 0  1   4 7
// 1  2   2 1
// 10 4.5 3 3
            let stepsRemaining = combinedAndSorted[i][2];  
            let prevRemaining = stack.length && stack[stack.length-1];
            if(prevRemaining&& stepsRemaining<=prevRemaining){

            }else {
                // while(prevRemaining && stepsRemaining > prevRemaining){
                //     stack.pop();
                // }
                stack.push(stepsRemaining);
            }  
        }

        return stack.length;
    }
}
