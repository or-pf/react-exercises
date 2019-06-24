class Lottery extends React.Component {
    isWinner() {
        let randomInt = Math.floor(Math.random() * 10) + 1;
        console.log(randomInt);
        let title;  
        if (randomInt > 5) {
         title = <h1>you won</h1>
        } 
        else {title=<h3>you lost</h3>; }
        return title
    }

    render() {
       let output= this.isWinner();
        return (
            <div>{output}</div>
        );
    }
}



ReactDOM.render(
    <Lottery />,
    document.getElementById("root")
);