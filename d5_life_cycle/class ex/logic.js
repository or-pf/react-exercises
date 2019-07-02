class Box extends React.Component {
    constructor() {
        super();
        console.log("Box- constructor")
    }
    componentWillMount() {
        console.log("Box will mount")
    }

    componentDidMount() {
        console.log("Box was mounted")
    }
    componentWillReceiveProps(nextProps) {
        console.log("Box received props!");
    }
    componentDidUpdate(prevProps, nextProps) {
        console.log("Box was updated!");
    }

    render() {
        console.log("Box- render")
        let boxStyle = {
            margin: 20,
            padding: 10,
            border: "1px solid black",
            display: this.props.isShown ? "block" : "none"
        }

        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        console.log("App- constructor")
        this.state = {
            isShown: true
        }
    }
    componentWillMount() {
        console.log("App will mount")
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShown: !this.state.isShown
            });
        }, 1000)
    }
    render() {
        console.log("App- render")
        return (
            <Box isShown={this.state.isShown}>
                <Box isShown={this.state.isShown} />
                <Box isShown={this.state.isShown} />
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));

