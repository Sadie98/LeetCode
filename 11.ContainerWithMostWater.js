/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxS = 0;
    
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            let S = Math.min(height[i], height[j]) * (j - i);
            if(S > maxS) maxS = S;
        }
    }
    
    return maxS;
};
