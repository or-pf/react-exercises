class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            input: ""
        }
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(text) {
        this.setState({
            input: text
        });
    }

    render() {
        return (
           <div className="container">
               <InputText text="Select a username:" handleChange={this.updateInput} />
               <div>{this.state.input}</div>
           </div> 
        )
    }
}

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.sendInput = this.sendInput.bind(this);
    }

    sendInput(event) {
        this.props.handleChange(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <label for={this.props.text}>{this.props.text}</label>
                <input type="text" onChange={this.sendInput}></input>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);