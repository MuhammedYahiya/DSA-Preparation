function breakingTheRecord(scores){
    let min = scores[0]
    let max = scores[0]
    let maxCount = 0
    let minCount = 0
    for(let i=0;i<scores.length;i++){
        if(scores[i] > max){
            max = scores[i]
            maxCount++;
        }else if(scores[i] < min){
            min = scores[i]
            minCount++;

        }
    }
    return [maxCount,minCount]
}



let numberOfGames = 9
let scores = [10,5,20,20,4,5,2,25,1]
console.log(breakingTheRecord(scores));
 



