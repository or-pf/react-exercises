class Box4 extends React.Component{
    render(){
        return (
           <div className="box four"></div>
        );
    }
}

class Box3 extends React.Component{
    render(){
        return (
           <div className="box three">
               <Box4/>
               <Box4/>
           </div>
        );
    }
}

class Box2 extends React.Component{
    render(){
        return (
           <div className="box two">
               <Box3/>
           </div>
        );
    }
}
class Box1 extends React.Component{
    render(){
        return (
           <div className="box one"> 
           <Box2/>
           </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Box1/>
    </div>,
    document.getElementById("root")
);