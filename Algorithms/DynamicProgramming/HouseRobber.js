const houses = [2, 1, 5, 6, 3, 4, 8, 2, 3];

// determine the highest value you can possibly steal
// can't steal from houses next to one another
// Time Complexity: O(n)
// Space Complexity: O(n) - could probably be done in-place, O(1)
function stealArr(input) {
  let copy = input.slice();
  let max = copy[0];

  for (let i = 1; i < houses.length; ++i) {
    // do I take current + input[-2] or do I take input[-1];
    copy[i] = Math.max(copy[i-1], copy[i] + ((copy[i-2])? copy[i-2] : 0));
    max = Math.max(copy[i], max);
  }

  return max;
}

console.log(stealArr(houses));

class Node = {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// [2, 1, 5, 6, 3, 4, 8, 2, 3];
const rewt = new Node(2);
rewt.left = new Node(1);
rewt.left.left = new Node(6);
rewt.left.right = new Node(3);

rewt.right = new Node(5);
rewt.right.left = new Node(7);
rewt.right.right = new Node(4);

// https://leetcode.com/problems/house-robber-iii/description/
function stealBT(root) {

}
