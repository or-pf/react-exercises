class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRender: false
        }
    }
//didMount is "operating" only after the entire page was rendered.
// that's how we can create a delay for the boxes to appear- using setTimeout function- after everything is loaded
    componentDidMount() {
        setTimeout(() => {
            this.setState({ shouldRender: true });
        }, 1500);
    }

    render() {
        var style = {
            width: this.props.size + "px",
            height: this.props.size + "px"
        };
        //because the render has a condition- and the condition becomes true only after the time that was set- the boxes would appear only after that time period
        return (
            this.state.shouldRender ?
                <div className="box pop-in" style={style}></div>
                : null
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRemoveBox: false
        };
    }
// the same for the making the boex "disappear"- we want that to happen only after a certain amount of time
    componentDidMount() {
        setTimeout(() => {
            this.setState({ shouldRemoveBox: true });
        }, 4500);
    }

    render() {
        return (
            <div>
                loaded
                {this.state.shouldRemoveBox ? null :
                    <div>
                        <Box />
                        <Box size={150} />
                        <Box size={50} />
                    </div>
                }
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