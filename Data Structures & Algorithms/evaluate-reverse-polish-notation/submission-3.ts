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
                    stack.push(stack.pop()+stack.pop());
                    break;
                case "-":
                    num2 = stack.pop();
                    num1 = stack.pop();
                    stack.push(num1-num2);
                    break;
                case "*":
                    stack.push(stack.pop()*stack.pop());
                    break;
                case "/":
                    num2 = stack.pop();
                    num1 = stack.pop();
                    stack.push(Math.trunc(num1/num2));
                    break;
                default:
                    stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
