class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for(let row = 0; row<matrix.length; row++){
            for(let column = 0; column<matrix[row].length; column++){
                if(matrix[row][column] === target){
                    return true;
                }
                if(column===0 && matrix[row][column] > target){
                    if(row === 0 && column===0 ||matrix[row-1].length <=1 ){
                        return false;
                    }
                    row--;
                    column=0;
                    continue;
                }else if(column===0 && matrix[row][column]<target){
                    if(row===matrix.length-1&& target<=matrix[row][matrix[row].length-1]){
                        continue;
                    }
                    break;
                }else if(matrix[row][column]>target || column === matrix[row].length-1){
                    return false;
                }
            }
        }
        return false;
    }
}
