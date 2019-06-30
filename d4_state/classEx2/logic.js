class Square extends React.Component {
    constructor(props) {
        super(props);
        this.appearance = this.appearance.bind(this);
        this.state = {
            isShown:true
        };
    }
    appearance() {
        let newState= this.state.isShown === true ? false : true;
        this.setState({
            isShown: newState 
        });
    }
    render() {
        let selectClass= this.state.isShown ? "" : " hide";
        return (
            <div>
                <div className={"box" + selectClass} ></div>
                <button onClick={this.appearance}>show/hide</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Square />,
    document.getElementById("root")
);