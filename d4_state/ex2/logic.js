class Color extends React.Component {
    constructor(props) {
        super(props);
        this.appearance = this.appearance.bind(this);
        this.state = {
            isShown: true
        };
    }
    appearance() {
        let newState = this.state.isShown === true ? false : true;
        this.setState({
            isShown: newState
        });
    }
    render() {
        let selectClass= this.state.isShown ? "" : " disabled";
        return (
            <span onClick={this.appearance} className={"box" + selectClass}>{this.props.text}</span>
        );
    }
}

class App extends React.Component {
    render() {
        return(
        <div>
            <Color text="blue"></Color>
            <Color text="purple"></Color>
            <Color text="green"></Color>
            <Color text="red"></Color>
            <Color text="pink"></Color>
        </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);