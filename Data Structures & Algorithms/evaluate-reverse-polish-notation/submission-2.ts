class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        let num1,num2;
        for (let r = 0; r<tokens.length; r++){
            const token = tokens[r];
            switch (token){
                case "+":
                    num2 = Number(stack.pop());
                    num1 = Number(stack.pop());
                    stack.push(num1+num2);
                    break;
                case "-":
                    num2 = Number(stack.pop());
                    num1 = Number(stack.pop());
                    stack.push(num1-num2);
                    break;
                case "*":
                    num2 = Number(stack.pop());
                    num1 = Number(stack.pop());
                    stack.push(num1*num2);
                    break;
                case "/":
                    num2 = Number(stack.pop());
                    num1 = Number(stack.pop());
                    const answer = num1/num2;
                    if(answer<=0){
                        stack.push(Math.ceil(num1/num2));
                    }else{
                        stack.push(Math.floor(num1/num2));
                    }
                    break;
                default:
                    stack.push(token);
            }
        }
        return Number(stack[0]);
    }
}
