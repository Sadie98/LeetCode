/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            let isOk = true;
            
            for (let j = 1; j < needle.length; j++){
                if(!haystack[i + j] || haystack[i + j] !== needle[j]){
                    isOk = false;
                }
            }
            
            if(isOk) return i; 
        }
    }
    
    return -1;
};
