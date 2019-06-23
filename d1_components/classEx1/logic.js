class MyFirstComponent extends React.Component{
    render(){
        return (
            <ul>
                <li>First</li>
                <li>second</li>
                <li>third</li>
                <li>forth</li>
            </ul>
        );
    }
}

ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById("root")
);