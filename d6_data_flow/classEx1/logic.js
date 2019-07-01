class Input extends React.Component {
    constructor(props) {
        super(props);

        this.takeInput = this.takeInput.bind(this);
    }
    takeInput(event) {
        this.props.handleClick(event.target.value);
    }
    render() {
        return (
            <input type="text" onChange={this.takeInput}></input>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
        this.updateUserName= this.updateUserName.bind(this);
    }

    updateUserName(text) {
        this.setState({
            username: text
        });
    }
    render() {
        return (
            <div>
                <Input handleClick={this.updateUserName} />
                <span className="label">{this.state.username}</span>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);