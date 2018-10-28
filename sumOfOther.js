function sumOfOther(array) {
    let newArray = [];
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum = sum + array[i];	
    }
    for(let i = 0; i < array.length; i++) { 
        newArray[i] = sum - array[i];
    }
    return newArray;
  }