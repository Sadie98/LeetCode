/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let stringX = '';
    
    if(x < 0){
        stringX = '-';
        x *= -1;
    }
    while(x % 10 === 0 && x !== 0) x /= 10;
    
    
    while(x > 0){
        stringX += (x % 10).toString();
        x  = Math.floor(x / 10);
    }
    
    return (Math.abs(stringX) > (Math.pow(2, 31) - 1) > 0 ? 0 : stringX);
};
