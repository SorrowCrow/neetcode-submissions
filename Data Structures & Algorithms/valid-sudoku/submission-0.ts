class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for(let i = 0; i<board.length; i++){
            const row = [...board[i]].sort();
            const column = board.map(r=>r[i]).sort();
            let hBoxNumber = i%3;
            let vBoxNumber =Math.floor( i/3);
            const box = []
            for(let boxI = 0; boxI<3; boxI++){
                box.push(board[vBoxNumber*3+boxI][hBoxNumber*3]);
                box.push(board[vBoxNumber*3+boxI][hBoxNumber*3+1]);
                box.push(board[vBoxNumber*3+boxI][hBoxNumber*3+2]);
            }
            box.sort();
          

            for (let b = 1; b<row.length; b++){
                if ((row[b]!=="." && row[b]===row[b-1])|| (column[b]!=="." && column[b]===column[b-1]  )|| (box[b]!=="." && box[b]===box[b-1])){
                    console.log(box, i);
                    return false;
                }
            }            
        } 

        return true;
    }
}
