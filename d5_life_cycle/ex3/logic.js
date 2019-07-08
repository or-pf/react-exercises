class Item extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.state = {
            isSelected: false
        }
    }
    select() {
        let newState = {
            isSelected: !this.state.isSelected
        };
        this.setState(newState);
    }

    render() {
        let className = this.state.isSelected ? "selected" : "";
        let ifchecked = this.state.isSelected ? "true" : "false";
        return (
            <div>
                <h3 className={className}>{this.props.text}</h3>
                <input type="checkbox" onClick={this.select} /> Yes
            <input type="checkbox" checked={ifchecked} /> No
            </div>
        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Item text="I read the terms" />
                <Item text="I accept the terms" />

            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);