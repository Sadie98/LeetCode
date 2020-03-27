/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    
    while(nums[i]  !== undefined){
        if(nums[i] !== val){
            i += 1;
        }else{
            nums.splice(i, 1);
        }
    }
    
    return i;
};
