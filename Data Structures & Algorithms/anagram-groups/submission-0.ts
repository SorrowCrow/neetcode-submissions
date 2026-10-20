class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let obj:{[s:string]:number} = {};
        const sol:string[][] = [];

        strs.map((s)=>{
            let sortS = s.split('').sort().join('');
            if(obj.hasOwnProperty(sortS)){
                sol[obj[sortS]].push(s)
            }else{
                obj[sortS]=sol.length;
                sol.push([s]);
            }
        })

        return sol;
    }
}
