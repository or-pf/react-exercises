class Item  extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
            <input type="checkbox" checked= {this.props.isChecked}/> {this.props.text}
            </div>
        );
    }
}
class App  extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Item text="I read the terms"/>
                <Item text="I accept the terms"/>
                <Item isChecked={true} text="I want the weekly newsletter"/>
                <Item isChecked={true} text="I want to get adjuted"/>
                
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);