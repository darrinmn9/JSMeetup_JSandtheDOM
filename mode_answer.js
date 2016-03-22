//solution for only 1 mode
function mode(arr){
  //create an object to store our counts for each number
  var counts = {};
  //create a variable to keep track of the current mode
  var answer;

  //create a variable to keep track of the # of times the current mode was found
  var largestCount = 0;


  //iterate through the array and check to see if the number exists in the object
  //if it does, increment the count. If it does not, initialize that property's value to 1
  for(var i = 0; i < arr.length; i++){
     if(counts[arr[i]] !== undefined){
         counts[arr[i]]++;
     }else{
         counts[arr[i]] = 1;
     }
  }

  //iterate through the keys in our "counts" object, if the value is greater than our
  //current "largestCount" update our mode and largest count variables
  for(var num in counts){
     if(counts[num] > largestCount){
         answer = num;
         largestCount = counts[num];
     }
  }

  return answer;

}


//solution for multiple modes
function modeAnswerExtra(arr){
  var counts = {};
  var modes = [];
  var largestCount = 0;

  for(var i = 0; i < arr.length; i++){
     if(counts[arr[i]] !== undefined){
         counts[arr[i]]++;
     }else{
         counts[arr[i]] = 1;
     }
  }


  for(var num in counts){
     if(counts[num] > largestCount){
         modes = [num];
         largestCount = counts[num];
     } else if(counts[num] === largestCount){
         modes.push(num);
     }
  }

  return modes.length === 1 ? modes[0] : modes;

}
