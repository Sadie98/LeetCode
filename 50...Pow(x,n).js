/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 1) return 1;
    if(x === -1){
       return (n % 2 === 0) ? 1 : -1; 
    }
    
    let res = 1;
    
    for(let i = 0; i < Math.abs(n); i++){
        res *= x;
    }
    
    if(n < 0) res = 1 / res;
    
    return res ;
};
