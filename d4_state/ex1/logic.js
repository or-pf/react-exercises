class Square extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this);
        this.state = {
            color: ""
        };
    }
    colorChange(event) {
        let newColor= event.target.innerText;
        this.setState({
            color: newColor
        });
    }
    render() {
        let colorClass= this.state.color;
        return (
            <div>
                <button onClick={this.colorChange}>blue</button>
                <button onClick={this.colorChange}>green</button>
                <button onClick={this.colorChange}>orange</button>
                <div className={"box " + colorClass} ></div>
            </div>
        )
    }
}
ReactDOM.render(
    <Square />,
    document.getElementById("root")
);
