class App extends React.Component {
    constructor(props) {
        super(props);
        this.colorNew = this.colorNew.bind(this);
        this.state = {
            color: ""
        };
    }
    colorNew(newColor) {
        this.setState({
            color: newColor
        });
    }
    render() {
        let colorClass = this.state.color;
        return (
            <div>
                <Button handleclick={this.colorNew} color="blue" />
                <Button handleclick={this.colorNew} color="green" />
                <Button handleclick={this.colorNew} color="orange" />
                <div className={"box " + colorClass} ></div>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this);
    }
    colorChange() {
        this.props.handleclick(this.props.color)
    }
    render() {
        return (
            <button onClick={this.colorChange}>{this.props.color}</button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);