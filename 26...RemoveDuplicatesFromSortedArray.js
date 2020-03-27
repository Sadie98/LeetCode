/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;
    
    while(nums[i]  !== undefined){
        let duplicate = nums[i] ^ nums[i - 1] ? 0: 1;
        
        if(duplicate){
            nums.splice(i, 1);
        }else{
            i += 1;
        }
    }

    return i;
};
