class Calculator {
  
    /** 
     * @param {number} value
     */
	constructor(value) {
		this.value = value;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	add(value){
		this.value += value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	subtract(value){
		this.value -= value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */  
	multiply(value) {
		this.value *= value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	divide(value) {
        if(!value){
            throw "Division by zero is not allowed";
        }

		this.value /= value;
        return this;
	}
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
	power(value) {
		this.value **=value;
        return this;
	}
    
    /** 
     * @return {number}
     */
	getResult() {
        return this.value;		
	}
}

// testing
let res = new Calculator(2).multiply(5).power(2).getResult();
let another = new Calculator(5).add(6).getResult();
console.log(res);
console.log(another);

let ress = new Calculator(20).divide(0).getResult();
console.log(ress);