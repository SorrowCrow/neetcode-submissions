class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
    const res: number[] = [];
    const dq: number[] = []; // indices, values decreasing
    let head = 0;            // avoids O(n) shift()

    for (let r = 0; r < nums.length; r++) {
        // drop the front index if it has left the window
        if (head < dq.length && dq[head] <= r - k) head++;

        // drop smaller values from the back; they can never be a max again
        while (dq.length > head && nums[dq[dq.length - 1]] <= nums[r]) dq.pop();

        dq.push(r);

        if (r >= k - 1) res.push(nums[dq[head]]);
    }
    return res;
}
}
