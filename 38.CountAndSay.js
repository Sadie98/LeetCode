/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {    
    let res = '1';

    if(n === 1) return '1';
    
    for(let i = 1; i < n; i++){
        let pos = 0;
        let resNext = '';

        while(pos < res.length){
            if(res[pos] && res[pos+1] && (res[pos] === res[pos+1])){
              let repeat = 2;
              pos += 1;

              while(res[pos] && res[pos+1] && (res[pos] === res[pos+1])){
                  pos += 1;
                  repeat += 1; 
              }
              
              resNext += repeat + res[pos];
              pos += 1;
            }else{
                resNext += '1' + res[pos];
                pos += 1;
            }
        }

        res = resNext;
    }
    
    return res;
};
