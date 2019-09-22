const numbers = [1, 2, 3, 4, 5];

function forSum(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function whileSum(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function recursiveFunc(nums, index) {
  let i = index;
  if (index >= nums.length) {
    return 0;
  }
  return nums[i] + recursiveFunc(nums, ++i);
}

function recursiveSum(nums) {
  return recursiveFunc(nums, 0);
}

function underscoreSum(nums) {
  return _.reduce(nums, function (memo, entry) { return entry + memo; }, 0);
}

console.log(forSum(numbers));
console.log(whileSum(numbers));
console.log(recursiveSum(numbers));
console.log(underscoreSum(numbers));
