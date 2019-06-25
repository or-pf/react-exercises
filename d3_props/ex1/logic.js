class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item" >
                <Icon />
                <h3> {this.props.title}</h3>
                <p>{this.props.text}</p>
                <WhichCircle />
                {this.props.children}
            </div>
        );
    }
}

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <img className="icon" src={this.props.src}></img>
        )
    }
}
class WhichCircle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="breadCrumbs" id={this.props.bullet}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <Box
                    src="./pics/1.png"
                    title="ready to travel"
                    text="choose your destination, plan ypur trip </br> pick the best place for your holiday"
                    bullet="a"
                />
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
