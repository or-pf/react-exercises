class Box extends React.Component {
    constructor(props) {
        super(props);

        this.ChangeFrameColor = this.ChangeFrameColor.bind(this);
    }
    ChangeFrameColor(event) {
        event.stopPropagation();
        this.props.handleClick(this.props.color);
    }
    render() {
        return (
            <div className={this.props.color + " " + this.props.size} onClick={this.ChangeFrameColor}>
                {this.props.children}
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newColor: "white"
        };
        this.ColorChange = this.ColorChange.bind(this);
    }

    ColorChange(color) {
        this.setState({
            newColor: color
        });
    }
    render() {
        return (
            <Box color={this.state.newColor} size="frame" >
                <Box color="green" size="big" handleClick={this.ColorChange} >
                    <Box color="blue" size="big" handleClick={this.ColorChange} >
                        <Box color="pink" size="big" handleClick={this.ColorChange} >
                            <Box color="purple" size="small" handleClick={this.ColorChange} />
                            <Box color="purple" size="small" handleClick={this.ColorChange} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

