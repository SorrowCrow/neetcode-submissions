class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length%2!==0){
            return false
        }
        const stack = [];
        for(let char of s){
            if(char==="["||char==="{"||char==="("){
                stack.push(char)
            }else{
                switch(char){
                    case "]":
                        if(stack.pop()!=="["){
                            return false;
                        }
                        break;
                    case ")":
                        if(stack.pop()!=="("){
                            return false;
                        }
                        break;

                    case "}":
                        if(stack.pop()!=="{"){
                            return false;
                        }
                        break;
                }
            }
        }
        return stack.length!==0?false: true;
    }
}
