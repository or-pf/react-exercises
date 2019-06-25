class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item" >
                <img className="icon" src={this.props.src}></img>
                <h3> {this.props.title}</h3>
                <p>{this.props.text}</p>
                <div className="breadCrumbs" >
                    <div ></div>
                    <div id={this.props.bullet}></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="page">
                <Box
                    src="./pics/1.png"
                    title="ready to travel"
                    text="choose your destination, plan ypur trip pick the best place for your holiday"
                    bullet="a"
                />

                <Box
                    src="./pics/2.png"
                    title="Select the Date"
                    text="Select the day. Pick your ticket. We give you the best price. We guarantee"
                    bullet="b"
                />

                <Box
                    src="./pics/3.png"
                    title="Feels Like Home"
                    text="Enjoy your holiday! Don't forget to take a beer and take a picture"
                    bullet="c"
                />
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// class Icon extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return
//         <img className="icon" src={this.props.src}></img>
//     }
// }
// class WhichCircle extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return
//         <div className="breadCrumbs" id={this.props.bullet}>
//             <Span></Span>
//             <Span></Span>
//             <Span></Span>
//         </div>
//     }
// }

