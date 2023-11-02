import React, { Component } from 'react';
import SecondCompo from './SecondCompo.jsx';

class Mainfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:"default"
        }
    }
    
    handleInputChange=(fromchild,data)=>{
        console.log("called inside parent",fromchild,data);
        this.setState({data:fromchild})
    }
    render() {
        return (
            <>
            <div className="row p-5">
                <div className="col">
                <SecondCompo ParentMethod={this.handleInputChange}/>
                <p> in parent compo : {this.state.data} </p>
                </div>
            </div>
            </>
        );
    }
}

export default Mainfile;