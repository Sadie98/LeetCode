/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {    
    if(s.length === 1) return 1;
    
    let biggestRes = 0;
    let uniqNums = new Set();

    nthNum: for(let position = 0; position < s.length; position++){
      uniqNums.clear();

      for(let symbolIndex = position; symbolIndex < s.length; symbolIndex++){
          if(!uniqNums.has(s[symbolIndex])){
            uniqNums.add(s[symbolIndex]);
            if(uniqNums.size > biggestRes) biggestRes = uniqNums.size;
          }else{
             continue nthNum;
          }
      }
    };

    return biggestRes;
};
