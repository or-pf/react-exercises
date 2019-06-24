class Factorial extends React.Component {
    calcFactorial(num) {
        let factorialNum=1;
        for (let i=0; i<num; i++ ){
            factorialNum = factorialNum * (num-i);
        }
        return factorialNum;
    }

    render() {
        let sum = this.calcFactorial(5);
        return (
            <div>{sum}</div>
        );
    }
}




ReactDOM.render(
    <Factorial/>,
    document.getElementById("root")
);