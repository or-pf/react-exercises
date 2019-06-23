class Quiz extends React.Component {
    render() {
        return (<div className="quiz"><QuizTitle /></div>);
    }
}
class QuizTitle extends React.Component {
    render() {
        return (<div className="quizTitle">
            <h1>How Do You Like Front End?</h1>
        </div>);
    }
}
class Q1 extends React.Component {
    render() {
        return (<div className="Q1"><Q1Title /></div>);
    }
}
class Q1Title extends React.Component {
    render() {
        return (<div className="Q1Title">
            <h3>How Much you love front-end?</h3>
            <Q1Input />
        </div>);
    }
}
class Q1Input extends React.Component {
    render() {
        return (<div className="Q1Input">
            <input type="range" min="0" max="10"></input>
        </div>);
    }
}
class Q2 extends React.Component {
    render() {
        return (<div className="Q2"><Q2Title /></div>);
    }
}
class Q2Title extends React.Component {
    render() {
        return (<div className="Q2Title">
            <h3>What is your favoutite front end feature/ topic?</h3>
            <Q2Input />
        </div>);
    }
}
class Q2Input extends React.Component {
    render() {
        return (<div className="Q2Input">
            <input type="text"></input>
        </div>);
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Quiz />
                <Q1 />
                <Q2 />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);