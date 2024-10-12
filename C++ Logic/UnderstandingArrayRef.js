let ans=new Array();

const cool=(arr)=>{
    let narr=arr.map((ele)=>Array.from(ele));
    ans.push(narr);
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[0].length;j++){
            arr[i][j]*=2;
        }
    }
    ans.push(arr);
}

let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
cool(arr);
console.table(ans);