/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        digits[i] += 1;
        if(digits[i] > 9){
            digits[i] = 0;
            if(i === 0) digits.unshift(1);
        }else{
            return digits;
        }
    }
    
    return digits;
};
