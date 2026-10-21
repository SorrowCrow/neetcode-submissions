class MinStack {
    arr:number[] = [];
    min:number[]=[];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val);
        this.min.push(this.min.length===0?val:Math.min(this.min[this.min.length-1], val))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop();
        this.min.pop();
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
        return this.min[this.min.length-1];
    }
}
