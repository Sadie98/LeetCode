/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    if(!strs.length) return res;
    if(strs.length === 1) return strs[0];
    
    for(let i = 0; i < strs[0].length; i++){
        for(let wordNum = 0; wordNum < strs.length; wordNum++){
            if(!strs[wordNum][i] || strs[wordNum][i] !== strs[0][i]) return res;
        }
        
        res += strs[0][i];
    }
    
    return res;
};
