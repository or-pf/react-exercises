class Nav extends React.Component {
    render() {
        return (<div className="nav">
            <NavBoxes />
            <span className="nav-logo"></span>
        </div>);
    }
}
class NavBoxes extends React.Component {
    boldi(event){
        event.target.classList.add("boldi");
        // document.getElementsByClassName("nav-text").classList.add("boldi");
    }
    render() {
        return (<div className="navBoxes">
            <span className="nav-text" onClick={this.boldi}>services</span>
            <span className="nav-text" onClick={this.boldi}>work</span>
            <span className="nav-text" onClick={this.boldi}><u>the team</u></span>
        </div>);
    }
}
class MainPage extends React.Component {
    render() {
        return (<div className="MainPage">
            <TitleBox />
            <FeaturesBox />
        </div>);
    }
}
class TitleBox extends React.Component {
    render() {
        return (<div className="TitleBox">
            <h1 className="heading">Services</h1>
            <p>our vision is simple. we want to create websites and applications with both high quality design and easy-to-access content.
            The finished product will be totally unique and represent awesomeness.</p>
        </div>);
    }
}
class FeaturesBox extends React.Component {
    render() {
        return (<div className="FeaturesBox">
            <Feature1 />
            <Feature2 />
            <Feature3 />
        </div>);
    }
}
class Feature1 extends React.Component {
    changeImage(){
        document.querySelector(".Feature1 .icon").classList.add("different");
    }
    changeImageBack(){
        document.querySelector(".Feature1 .icon").classList.remove("different");
    }
    makeBorder(event) {
        let heading = event.target;
        heading.classList.add("border");
        setTimeout(function () {
            heading.classList.remove("border");
        }, 1000);
    }
    render() {
        return (<div className="Feature1">
            <div className="icon" onMouseEnter={this.changeImage} onMouseLeave={this.changeImageBack}></div>
            <h3 className="heading" onMouseEnter={this.makeBorder} >user interface design</h3>
            <ul>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Usability testing</li>
            </ul>
        </div>);
    }
}

class Feature2 extends React.Component {
    changeImage(){
        document.querySelector(".Feature2 .icon").classList.add("different");
    }
    changeImageBack(){
        document.querySelector(".Feature2 .icon").classList.remove("different");
    }
    makeBorder(event) {
        let heading = event.target;
        heading.classList.add("border");
        setTimeout(function () {
            heading.classList.remove("border");
        }, 1000);
    }
    render() {
        return (<div className="Feature2">
            <div className="icon" onMouseEnter={this.changeImage} onMouseLeave={this.changeImageBack}></div>
            <h3 className="heading" onMouseEnter={this.makeBorder} >concept and ideas</h3>
            <ul>
                <li>Conceptualization</li>
                <li>Digital Branding</li>
                <li>Poduct Strategy</li>
            </ul>
        </div>);
    }
}

class Feature3 extends React.Component {
    changeImage(){
        document.querySelector(".Feature3 .icon").classList.add("different");
    }
    changeImageBack(){
        document.querySelector(".Feature3 .icon").classList.remove("different");
    }
    makeBorder(event) {
        let heading = event.target;
        heading.classList.add("border");
        setTimeout(function () {
            heading.classList.remove("border");
        }, 1000);
    }
    render() {
        return (<div className="Feature3">
            <div className="icon" onMouseEnter={this.changeImage} onMouseLeave={this.changeImageBack}></div>
            <h3 className="heading" onMouseEnter={this.makeBorder}>design and branding</h3>
            <ul>
                <li>Interaction Design</li>
                <li>Graphic Design</li>
                <li>Identity Design</li>
            </ul>
        </div>);
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <MainPage />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);