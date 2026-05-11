
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }
    return []
};

/**
Why this is better:
- Time Complexity: O(n)
- Space Complexity: O(n) for the map
- You only loop through the array once.
 */

// You can also apply brute-force approach with O(n²) time complexity.

/**
 var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target) return[i,j]
        }
    }
    return []
}; 
 */