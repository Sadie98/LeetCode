/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let opened = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
          opened.push(s[i]);  
        }else{
            let openedSymb = opened.pop();
            
            if(s[i] === ')' && openedSymb !== '(' ||
               s[i] === '}' && openedSymb !== '{' ||
               s[i] === ']' && openedSymb !== '['){
                return false;
            }
        }
    }
    
    return (opened.length) ? false : true;
};
