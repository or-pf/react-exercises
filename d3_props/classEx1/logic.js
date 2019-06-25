class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        let style = { fontFamily: this.props.font };
        return <h1 style={style}>{this.props.text}</h1>;
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Title text="If I Rule the DOM" font="cursive" />
                <Title text="Talk is cheap. Show me the code" font="fantasy" />
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();