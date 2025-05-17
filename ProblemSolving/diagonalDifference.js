function diagonalDifference(arr){
    let principalDiagonal = 0
    let secondaryDiagonal = 0
    for(let i=0;i<arr.length;i++){
        for (let j=0; j<arr[i].length;j++){
            if(i===j){
                principalDiagonal += arr[i][j]
            }
            if((i+j) === (arr.length-1)){
                secondaryDiagonal += arr[i][j]
            }
            
        }
        
    }
    return Math.abs(principalDiagonal-secondaryDiagonal)
}

let array = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]

result = diagonalDifference(array)
console.log(result);
