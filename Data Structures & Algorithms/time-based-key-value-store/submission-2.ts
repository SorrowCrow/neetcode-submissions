class TimeMap {
    keyStore: Map<string,{timestamp:number; value:string}[]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(this.keyStore[key]){
            this.keyStore[key].push({timestamp, value});
        }else{
            this.keyStore[key] = [{timestamp, value}]
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(!this.keyStore[key]){
            return "";
        }else{
            let arr = this.keyStore[key];
            let i = arr.length-1;
            let max:{timestamp:number; value:string};
            while(i>=0){
                if((max === undefined && arr[i].timestamp<=timestamp) || (arr[i].timestamp<=timestamp && max.timestamp<arr[i].timestamp)){
                    max = arr[i];
                }
                i--;
            }
            if(max !== undefined && max.timestamp <=timestamp){
                return max.value;
            }
            return ""
        }
    }
}
