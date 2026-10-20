class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s= s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        for(let i =0; s.length-1-i>i; i++){
            if(s[i]!==s[s.length-1-i]){
                console.log(s, i)
                return false;
            }
        }
        return true;
    }
}
