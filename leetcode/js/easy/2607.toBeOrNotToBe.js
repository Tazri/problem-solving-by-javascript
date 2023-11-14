/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const value = val;
    
    return {
        toBe(_value){
            if(value === _value){
                return true;
            }

            throw new Error("Not Equal");
        },
        notToBe(_value){
            if(value !== _value){
                return true;
            }

            throw new Error("Equal");
        }
    }
};


expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
