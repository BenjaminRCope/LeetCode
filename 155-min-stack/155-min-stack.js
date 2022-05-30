
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (val < this.min) {
        this.min = val;
    }
    
    this.stack[this.stack.length] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let endValue = this.stack.pop();
    
    if (endValue === this.min) {
        let newMin = Infinity;
        
        this.stack.forEach((value) => {
            if (value < newMin) {
                newMin = value;
            }
        })
        
        this.min = newMin;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */