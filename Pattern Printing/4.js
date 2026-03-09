let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
        row+=" ";
    }
    for (let j = 0; j < i+1; j++) {
        row+="*";
        
    }
    for (let j = 0; j < i; j++) {
        row+="*";
        
    }
    
    console.log(row);
}
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i+1; j++) {
        row+=" ";
    }
    for (let j = i; j < n-1; j++) {
        row+="*";
        
    }
    for (let j = i; j < n; j++) {
        row+="*";
        
    }
    
    console.log(row);
}