function gradingStudent(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < 38){
            result.push(arr[i])
            continue
        }
        let nextMultipleOf5 = Math.ceil(arr[i] / 5) * 5;
        if (nextMultipleOf5 - arr[i] < 3){
            result.push(nextMultipleOf5)
        }
        else{
            result.push(arr[i])
        }
        
    }
    return result
}


let arr = [72,67,38,33]
result = gradingStudent(arr)
console.log(result);
