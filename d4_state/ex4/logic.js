class MessageCounter extends React.Component {
    constructor() {
        super();

        this.ignore = this.ignore.bind(this);
        this.state = {
            count: Math.floor(Math.random() * 10 + 1),
            visibility: "visible"
        };
    }


    ignore() {
        this.setState({
            visibility: "hidden"
        });
    }
    render() {

        return (
            <div>
                <div className="Nav">
                    <span className="info">info</span>
                    <span className="star">star</span>
                    <span className="messages">messages</span>
                    <span className="notification" onClick={this.ignore} style={{ visibility: this.state.visibility }}>{this.state.count}</span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <MessageCounter />,
    document.getElementById("root")
);

