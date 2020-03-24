/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || x == 10) return false;
    
    let ans = true;
    let count = Math.ceil(Math.log10(x + 0.5));

    for(let deepth = 0; deepth < Math.floor(count / 2); deepth++){
      let right = Math.floor((x % Math.pow(10, deepth + 1)) / Math.pow(10, deepth));
      let left = Math.floor(x / Math.pow(10, count - deepth - 1)) % 10;

      if(right !== left) return false;
    }


    return true;
};
