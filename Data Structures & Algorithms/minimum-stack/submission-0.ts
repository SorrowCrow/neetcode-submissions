class MinStack {
    arr:number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.arr);
    }
}
