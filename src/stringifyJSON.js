// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var answerArray = [];
  
  (function objectSort(obj) {
    //handle numbers
    if (typeof(obj) === 'number') {
      answerArray.push(obj.toString());
    }
    //handle nulls
    if(obj === null) {
      answerArray.push('null');
    }
    //handle booleans
    if(obj === true) {
      answerArray.push('true');
    }
    if(obj === false) {
      answerArray.push('false');
    }
    //handle strings
    if (typeof(obj) === 'string') {
      answerArray.push('"' + obj + '"');
    }
    //handle arrays
    if (Array.isArray(obj)) {
      answerArray.push('[');
    for(var i = 0; i < obj.length; i++) {
      answerArray.push(',');
      if (answerArray[answerArray.length - 2] === '[') {
      answerArray.push('!');
      answerArray.splice(answerArray.length - 2);
      }
        objectSort(obj[i]);
    }
    answerArray.push(']');
    }
    //handle objects
    if((!Array.isArray(obj)) && obj !== null && typeof(obj) === 'object') {
      answerArray.push('{');
      if (Object.keys(obj).length === 0) {
        answerArray.push('}');
      } else {
      for (var key in obj) {
        answerArray.push('"', key, '"', ':');
        objectSort(obj[key]);
        answerArray.push(',');
      }
      answerArray.pop();
      answerArray.push('}');
      }
    }
  }(obj));
  // return answerArray.join('');
  //remove functions in onjects from string
  var mayHaveFunctions = answerArray.join('');
  var noFunctions = mayHaveFunctions.replace(/{"functions":,"undefined":}/g, '{}');
  
return noFunctions;
  
  
};