class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(t.length===0||t.length>s.length){
            return ""
        }
        const count = new Map();
        for(let i = 0; i<t.length;i++){
            count.set(t[i],  (count.get(t[i])||0)+1);
        }

        let l = 0;
        let counter = 0;
        let best = undefined;
        let w = new Map();
        for(let r = 0; r<s.length;r++){
            const srcount = count.get(s[r]);

            if (srcount){
                const wsr = w.get(s[r])||0;
                if(wsr<srcount){
                    counter++;
                };
                w.set(s[r], wsr+1);
            }

            // OUZODYXAZV "XYZ"

            if(counter===t.length){
                // if(best ===undefined){
                //     const slic= s.slice(l,r+1);
                //     best = best.length> slic.length ? slic:best;
                // };
                while(counter===t.length){
                    const slic= s.slice(l,r+1);
                    best = (best!==undefined && (best.length< slic.length)) ? best:slic;
                    const slcount = count.get(s[l]); 
                    if (slcount){
                        const wsl = w.get(s[l])-1;
                        w.set(s[l], wsl);
                        if(wsl<slcount){
                            counter--;
                        }
                    }
                    l++;
                }
            }
        }

        return best || ""


    }
}

            // if (count.get(s[r])){
            //     if(counter===0){
            //         l=i;
            //     }
            //     counter++;
            //     count.set(s[i], count.get(s[i])-1);
            //     if(counter===t.length){
            //         if(oldR!==undefined){
            //             if(oldR-oldL>l-i){
            //                 oldL=l;
            //                 oldR=i;  
            //             }else{
            //                 // OUZODYXAYV
            //                 // AAAAZAAAAA AZ
            //                 count.set(s[l], 1);
            //                 counter--;
            //                 for(;s[l+1]!==s[i];l++){
            //                     if(count.get(s[l])!==undefined){
            //                         count.set(s[l], count.get(s[l]+))
            //                     }
            //                 }
            //             }
            //         }else{
            //             oldL=l;
            //             oldR=i;
            //         }
            //     }
            // }

            // if(count.get(s[i])>0)
