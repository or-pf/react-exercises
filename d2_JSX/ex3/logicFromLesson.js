// function calcPow(num) {
//     return num*num;
// }
let componentsCounter = 0;

class App extends React.Component {
    render() {
        return (
            <div>
                <Calculator title="Calculate Squared Number"
                    calcFunc={num => num * num} />

                <Calculator title="Calculate Squared Root"
                    calcFunc={num => Math.sqrt(num, 2)} />

                <Calculator title="Calculate Sigma"
                    calcFunc={num => {
                        let sum = 0;
                        for (let i=1;i<=num;i++) {
                            sum+=i;
                        }
                        return sum;
                    }} />

                {/* <Calculator title="Calculate Squared Number" 
                            calcFunc={calcPow}/> */}
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor() {
        super();

        this.myId = componentsCounter++;
        this.performCalculation = this.performCalculation.bind(this);

    }
    performCalculation() {
        let value = document.getElementById("number" + this.myId).value;

        let result = this.props.calcFunc(parseInt(value));
        // let result = this.calcSqrNum(parseInt(value));

        document.getElementById("result" + this.myId).innerHTML = result;
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <label htmlFor="number">Enter Number</label>
                    <input type="text" onBlur={this.performCalculation} id={"number" + this.myId} />
                </div>
                <div>
                    <label htmlFor="result">Result:</label>
                    <span id={"result" + this.myId}></span>
                </div>
            </div>
        );
    }
}



class SqrNumCalc extends React.Component {
    constructor() {
        super();

        this.performCalculation = this.performCalculation.bind(this);
    }
    calcSqrNum(num) {
        return num * num;
    }

    performCalculation() {
        let value = document.getElementById("number-sqr").value;
        let result = this.calcSqrNum(parseInt(value));

        document.getElementById("result").innerHTML = result;
    }

    render() {
        return (
            <div>
                <h1>Calculate Squared Number</h1>
                <div>
                    <label htmlFor="number">Enter Number</label>
                    <input type="text" onBlur={this.performCalculation} id="number-sqr" />
                </div>
                <div>
                    <label htmlFor="result">Result:</label>
                    <span id="result"></span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);