class Box extends React.Component {
    constructor() {
        super();
    }

    render() {
        let boxStyle = {
            height: 100,
            width: 100,
            margin: 20,
            padding: 10,
            border: "1px solid black",
            backgroundColor: this.props.isShown ? "red" : "blue",
            borderRadius: this.props.isCircle ? "50%" : ""
        }

        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown: true,
            isCircle: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShown: !this.state.isShown
            });
        }, 2000)

        setTimeout(() => {
            this.setState({
                isCircle: true
            });
        }, 10000)
    }
    render() {
        console.log("App- render")
        return (
            <Box isShown={this.state.isShown} isCircle={this.state.isCircle}> </Box>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("root"));