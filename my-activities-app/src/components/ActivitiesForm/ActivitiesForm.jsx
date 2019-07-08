import React from "react";
import "./ActivitiesForm.css";

class ActivitiesForm extends React.Component {
    constructor() {
        super();

        this.state = ({
            what: "",
            when: "",
            where: ""
        })

        this.handleSubmitActivity = this.handleSubmitActivity.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmitActivity(e) {
        this.props.handleNewActivity(Object.assign({}, this.state));        
    }

    handleInputChange(e) {
        let inputValue = e.target.value;
        let stateKey = e.target.getAttribute("data-bind");

        // let newState = {};
        // newState[stateKey] = inputValue;
        // this.setState(newState);

        this.setState({
            [stateKey]: inputValue
        })
    }

    render() {
        return (
            <div>
                <input className="activity-form" data-bind="what" onChange={this.handleInputChange} type="text" placeholder="what?" />
                <input className="activity-form" data-bind="when" onChange={this.handleInputChange} type="text" placeholder="when?" />
                <input className="activity-form" data-bind="where" onChange={this.handleInputChange} type="text" placeholder="where?" />
                <button className="btn btn-primary" onClick={this.handleSubmitActivity} >Submit Activity</button>
            </div>
        )
    }
}

export default ActivitiesForm;