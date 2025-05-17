function stairCase(n){
    for(let i=1;i<=n;i++){
        let star = ''
        let space = ''
        for(let j=1;j<=n-i;j++){
            space += ' '
            
        }
        for (let k=1;k<=i;k++){
            star += '*'
        }
        
        console.log(space+star);
    }
    
}


let n = 5
stairCase(n)