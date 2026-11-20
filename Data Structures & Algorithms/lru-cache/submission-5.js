class Node {
    prev = null;
    next = null;
    constructor(key, val){
        this.key = key;
        this.val=val;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    obj = {}
    capacity;
    head = null;
    tail = null;
    count = 0;
    constructor(capacity) {
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.obj.hasOwnProperty(key)){
            let node = this.obj[key];
            if(node.prev===null){
                return this.obj[key].val;
            }
            if(node.next !==null){
                node.next.prev=node.prev;
            }else{
                this.tail = this.tail.prev;
            }
            node.prev.next=node.next;
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = this.head.prev;
            return this.obj[key].val;
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(!this.obj.hasOwnProperty(key)){
            let node = new Node(key,value);
           
            node.next = this.head;
            if(this.head !==null){        
                this.head.prev = node;
                this.head = this.head.prev;
            }else{
                this.head = node;
                this.tail = node;
            }

            this.obj[key]=this.head;
            if(this.count===this.capacity){
                delete this.obj[this.tail.key];
                this.tail = this.tail.prev;
                this.tail.next = null;
            }else{
                this.count++;
            }
        }else{
            let node = this.obj[key];
            node.val = value;
            this.get(key)
        }
    }
}
