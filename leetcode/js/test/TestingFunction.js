const color = require("colors");

class TestingFunction{
    /**
     * 
     * @param {object[]} datas 
     */
    constructor(datas){
        this.datas = datas;
        this.totalPassed = 0;
        this.totalFailed = 0;
        this.totalCase = datas.length;
        this.isErrorHappend = null;
        this.errorStack = [];
        this.error = null;
        this.testCalled = 0;
        this.testStack = [];
    }

    white(text){
        return color.white(text);
    }

    red(text){
        return color.red(text);
    }

    yellow(text){
        return color.yellow(text);
    }

    green(text){
        return color.green(text);
    }

    getStatusMessage(s){
        if(s){
            return color.green("PASSED");
        }
    
        return color.red("FAILED");
    }

    printError(){
        if(this.isErrorHappend == null){
            console.log("> Test is not called.");
        }else if(this.isErrorHappend == false){
            console.log("> Error is not happend.");
        }else{
            for(let line of this.errorStack){
                console.log(line);
            }
        }
    }

    printErrorStack(){
        if(this.isErrorHappend == null){
            console.log("> Test is not called.");
        }else if(this.isErrorHappend == false){
            console.log("> Error is not happend.");
        }else{
            console.log(this.white("> Error Stack is : "));
            console.log(this.error);
        }
    }


    on(fn){
        this.isErrorHappend = false
        this.totalFailed = 0;
        this.totalPassed = 0;
        this.testStack = [];
        this.datas.forEach(data=>{

            try{

                let result = fn(...data.input);
                result = JSON.stringify(result);
                let isPassed = result === JSON.stringify(data.expected);

                const statusMessage = this.getStatusMessage(isPassed);

                if(isPassed){
                    this.totalPassed++;
                }else{
                    this.totalFailed++;
                };

                const caseStack = [
                    this.white(`> Case : ${data.case}`),
                    this.white(`> Status : ${statusMessage}`),
                    this.white(`> Input : ${JSON.stringify(data.input)}`),
                    this.white(`> Output : ${result}`),
                    this.white(`> Expected : ${JSON.stringify(data.expected)}`)
                ]; 

                this.testStack.push(caseStack);
            }catch(error){
                this.isErrorHappend = true;
                this.error = error;

                this.errorStack = [
                    this.white("> Error Comes From : "),
                    this.white(`> Test Case : ${data.case}`),
                    this.white(`> Input was : ${data.input}`),
                    this.white(`> Error message : ${error.message}`),
                ];
            }
        });
        this.testCalled += 1;
    }

    printTestStack(){
        if(this.isErrorHappend == true){
            console.log(this.white("> Error is occurd!!"));
        }
        else if(this.testStack.length === 0){
            console.log(this.white("> Test is not happend."));
        }else{
            for(let stack of this.testStack){
                for(let line of stack){
                    console.log(line);
                }
                console.log(this.yellow("\n----------------------------\n"));
            }
        }
    }

    printTestSummary(){
        if(this.testStack.length === 0){
            console.log(this.white("> Test is not heppend."));
        }else{
            console.log(this.white(`> Total Case : ${this.totalCase}`));
            console.log(`${color.white("> Total Passed : ")}${color.green(this.totalPassed)}`);
            console.log(`${color.white("> Total Failed : ")}${color.red(this.totalFailed)}`);
        }
    }
}

module.exports = TestingFunction;