class Box extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.color + " "  +this.props.size } >
                {this.props.children}
            </div>
        );
    }
}

// class MultiBox extends React.Component {
//     render() {
//         return (
//             <div className={this.props.color + " "  +this.props.size + " box "  }>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

class App extends React.Component {
    render() {
        return (
            <Box color="white" size="frame">
                <Box color="green" size="big" >
                    <Box color="blue" size="big" >
                        <Box color="pink" size="big" >
                            <Box color="purple" size="small" />
                            <Box color="purple" size="small" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

ReactDOM.render(
    <App/ >,
    document.getElementById("root")
);