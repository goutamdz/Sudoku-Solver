let ans = [];

function vertical(board, row, col, k) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][col] == k) return false;
    }
    return true;
}

function horizontal(board, row, col, k) {
    for (let i = 0; i < board[0].length; i++) {
        if (board[row][i] == k) return false;
    }
    return true;
}

function block(board, row, col, k) {
    let rblock = Math.floor(row / 3) * 3;
    let cblock = Math.floor(col / 3) * 3;
    for (let i = rblock; i < rblock + 3; i++) {
        for (let j = cblock; j < cblock + 3; j++) {
            if (board[i][j] == k) return false;
        }
    }
    return true;
}

function isValid(board, i, j, k) {
    return vertical(board, i, j, k) && horizontal(board, i, j, k) && block(board, i, j, k);
}

function sudokuHelper(board) {
    let n = board.length;
    let m = board[0].length;


    if (ans.length >= 10) return true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == '.') {
                let flag=false;
                for (let k = '1'; k <= '9'; k++) {
                    if (isValid(board, i, j,k)) {
                        board[i][j] = k;
                        if (sudokuHelper(board)) {
                            flag=true;
                        }
                        board[i][j] = '.'; // Backtrack
                    }
                }
                return flag; // Return false if no valid number was found
            }
        }
    }
    let nBoard=board.map(ele=>Array.from(ele));
    ans.push(nBoard);
    return true; // Return true if the board is completely filled
}

function Sudoku(board){
    // let board = [
    //     ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    //     ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    // ];
    sudokuHelper(board);
    // ans.forEach(ele=>{
    //     ele.forEach(iele=>{
    //         console.log(iele.join(" "));
    //     })
    //     console.log("\n");
    // })
    return ans;
}

function isSudoku(board) { 
    let n = board.length;
    let m = board[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] != '.') {
                let temp = board[i][j];
                board[i][j] = '.'; // Temporarily empty the cell
                if (!isValid(board, i, j, temp)) {
                    board[i][j] = temp
                    return false;
                }
                board[i][j] = temp; // Restore the original value
            }
        }
    }
    return true;
}


module.exports={Sudoku,isSudoku};