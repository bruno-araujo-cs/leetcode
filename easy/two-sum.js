/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashmap = {};
  hashmap[nums[0]] = 0; 

  for (let i = 1; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashmap) {
      return [hashmap[complement], i];
    }
    hashmap[nums[i]] = i;
  }
};

// console.log(twoSum([2,7,11,15], 9));