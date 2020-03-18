/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];

    nums.forEach((num, index) => {
        nums[index] = 'hello fren'; 
    
        if(nums.includes(target - num)){
            res = [index, nums.indexOf(target - num)];
        }else{
            nums[index] = num;
        }
    });
    
    return res;
};
