function sumOfOther(array) {
    let resArray = [];
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];	
    }
    for(let i = 0; i < array.length; i++) { 
        resArray[i] = sum - array[i];
    }
    return resArray;
  }