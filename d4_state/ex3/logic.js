class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 style={{ "visibility": this.props.visibility }}>{this.props.text}</h2>
        );
    }
}
class Parent extends React.Component {
    render() {
        return (
            <div>
                <Title visibility="visible" text="visability as prop" />
            </div>
        );
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.appearance = this.appearance.bind(this);
        this.state = {
            visibility: "visible"
        };
    }
    appearance() {
        let newState = this.state.visibility === "visible" ? "hidden" : "visible";
        this.setState({
            visibility: newState
        });
    }
    render() {
        return (
            <h2 onClick={this.appearance} style={{ visibility: this.state.visibility }}>visibility as state</h2>
        );
    }
}


ReactDOM.render(
    <div>
        <Parent />
        <Box />
    </div>,
    document.getElementById("root")
);