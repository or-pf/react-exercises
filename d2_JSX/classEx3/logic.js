class NumbersList extends React.Component {
    constructor() {
        super();
        this.createNumbers = this.createNumbers.bind(this);
        this.display = this.display.bind(this);
    }


    createNumbers(max) {
        let numbersRow = "";
        for (var i = 0; i <= max; i++) {
            numbersRow += ' ' + i;
        }
        return numbersRow;
    }

    display() {
        let allToDisplay =this.createNumbers(12);
        document.querySelector('.message').innerHTML = allToDisplay;
    }
    
    render() {
        return (
            <div>
                <button onClick={this.display}> ShowNumbers </button>
                <h3> Numbers: </h3>
                <div className="message"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <NumbersList />,
    document.getElementById("root")
);