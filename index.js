// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let nums = [-1, 0, 3, 5, 9, 12];
let target = 5;


function search(nums, target) {
  console.log('test', nums);
  let x = [];
  if (nums[Math.round(nums.length / 2)] === target || nums[0] === target) {
    console.log('Winner!', target);
    return true;
  } else if (nums[Math.round(nums.length / 2)] < target) {
    x = nums.slice(Math.round(nums.length / 2), nums.length);
    search(x, target);
  } else if (nums[Math.round(nums.length / 2)] > target) {
    x = nums.slice(0, Math.round(nums.length / 2));
    search(x, target);
  } else {
    console.log('provided target doesn\'t exist in the nums array!');
    return null;
  }
}
