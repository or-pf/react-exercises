class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      
        let className= this.props.color +" box";
        


        return <div className={className}>{this.props.text}</div>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Box text="fresh" color="green" />
                <Box text="calm" color="blue" />
                <Box text="adventure" color="pink" />
                <Box text="happy" color="purple" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);