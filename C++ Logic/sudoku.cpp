#include <bits/stdc++.h>
using namespace std;

vector<vector<vector<char>>>ans;

bool vertical(vector<vector<char>> &board, int row, int col, char k){
    int n = board.size();

    for (int i = 0; i < n; i++)
    {
        if (board[i][col] == k)
            return false;
    }
    return true;
}

bool horizontal(vector<vector<char>> &board, int row, int col, char k)
{
    int n = board[0].size();

    for (int i = 0; i < n; i++)
    {
        if (board[row][i] == k)
            return false;
    }
    return true;
}

bool block(vector<vector<char>> &board, int row, int col, char k)
{
    int rblock = row / 3 * 3;
    int cblock = col / 3 * 3;
    for (int i = rblock; i < rblock + 3; i++)
    {
        for (int j = cblock; j < cblock + 3; j++)
        {
            if (board[i][j] == k)
                return false;
        }
    }
    return true;
}

bool isValid(vector<vector<char>> &board, int i, int j, char k)
{
    return vertical(board, i, j, k) && horizontal(board, i, j, k) && block(board, i, j, k);
}

bool sudokuHelper(vector<vector<char>> board)
{
    int n = board.size();
    int m = board[0].size();
    if(ans.size()>=10)
        return true;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (board[i][j] == '.')
            {
                bool flag=false;
                for (char k = '1'; k <= '9'; k++)
                {
                    if (isValid(board, i, j, k))
                    {
                        board[i][j] = k;
                        if (sudokuHelper(board)){
                            flag=true;
                        }
                    }
                    board[i][j] = '.';
                }
                return flag;
            }
        }
    }
    ans.push_back(board);
    return true;
}

int main()
{
    vector<vector<char>> board = {
        {'5', '6', '8', '9', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.', '.'}
    };

    sudokuHelper(board);
    
    cout<<"size of ans is : "<<ans.size()<<endl<<endl;

    for(auto b:ans){
        for(int i=0;i<b.size();i++){
            for(int j=0;j<b[0].size();j++){
                cout<<b[i][j]<<" ";
            }
            cout<<"\n";
        }
        cout<<"\n\n";
    }

}