#include<bits/stdc++.h>
using namespace std;

vector<vector<char>>ans;

bool isValid(vector<char>&arr,char k){
    for(int i=0;i<arr.size();i++){
        if(arr[i]==k)
            return false;
    }
    return true;
}

bool f(vector<char>arr){
    for(int i=0;i<arr.size();i++){
        if(arr[i]=='.'){
            bool flag=false;
            for(char j='1';j<='3';j++){
                if(isValid(arr,j)){
                    arr[i]=j;
                    if(f(arr))
                        flag=true;
                    arr[i]='.';
                }
            }
            return flag;
        }
    }
    ans.push_back(arr);
    return true;
}

int main(){
    vector<char>arr={'.','.','.'};
    f(arr);
    for(auto ele:ans){
        for(char i:ele){
            cout<<i<<" ";
        }
        cout<<endl;
    }
    
}