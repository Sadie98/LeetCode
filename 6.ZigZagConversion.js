/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length === 1 || numRows === 1) return s;
    
    let ans = '';
    
    for(let row = 0; row < numRows; row++){
        let pos = row;
        let throwBottom = row !== (numRows - 1) ? 1 : 0; // проходим ли через низ (для нижнего ряда всегда через верх)
        
        while(pos < s.length){
            let toTop = row; // расстояние до верха
            let toBottom = numRows - row - 1; // расстояние до низа
            
            ans += s[pos];
            
            if(throwBottom){
                pos += 2 * toBottom;
            }else{
                pos += 2 * toTop;
            }
            
            // если не крайние ряды, меняется напраление
            if(row !== 0 && row !== numRows - 1) throwBottom = !throwBottom;
        }
    }
    
    return ans;
};
