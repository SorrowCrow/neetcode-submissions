class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let n = 0;
        for(let i = 1;i<numbers.length;i++){
            // const secondIndex = numbers.findIndex(num=> num===target-numbers[i])

            if( numbers[i]+numbers[n]===target){
                return [n+1,i+1];
            }

            if(i===numbers.length-1&& n<numbers.length-2){
                for(let b = n+1; b<numbers.length-1; b++){
                    if(numbers[b-1]===numbers[b]){
                        n++
                    }else{break;}
                }
                n++;
                i=n;
            }
        }
        return[];
    }
}
