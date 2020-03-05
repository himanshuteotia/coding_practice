function spiral(n) {
    let results = [];
    for(i =0; i < n; i++) {
      results.push([])
    }
    let counter = 1;
    let row = 0;
    let higherRow = n-1;
    let column = 0;
    let higherColumn = n-1;
  
    while(row <= higherRow && column <= higherColumn) {
      
      // horizontal 
  
      for(let i = column; i <= higherColumn; i++) {
        results[row][i] = counter;
        counter++
      } 
      row++;

      for(let i = row; i <= higherRow; i++) {
        results[i][higherColumn] = counter;
        counter++
      }
      higherColumn--;   
      
      for(let i = higherColumn; i >= column; i--) {
        results[higherRow][i] = counter;
        counter++;
      }
      higherRow--;
      
      for(let i=higherRow; i >= row; i--) {
        results[i][column] = counter;
        counter++
      }
      column++;
    
    }
    console.log("final results",results)
  }
  spiral(10)