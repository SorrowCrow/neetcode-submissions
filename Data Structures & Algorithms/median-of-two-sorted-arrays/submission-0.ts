class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }
        const A = nums1, B = nums2;
        const m = A.length, n = B.length;
        const half = Math.floor((m + n + 1) / 2);
        let lo = 0, hi = m;

        while (lo <= hi) {
            const i = Math.floor((lo + hi) / 2); // take i from A
            const j = half - i;                  // take rest from B

            const Aleft  = i > 0 ? A[i - 1] : -Infinity;
            const Aright = i < m ? A[i]     :  Infinity;
            const Bleft  = j > 0 ? B[j - 1] : -Infinity;
            const Bright = j < n ? B[j]     :  Infinity;

            if (Aleft <= Bright && Bleft <= Aright) {
                if ((m + n) % 2 === 1) {
                    return Math.max(Aleft, Bleft);
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                hi = i - 1; // too many from A
            } else {
                lo = i + 1; // too few from A
            }
        }
    }
}
