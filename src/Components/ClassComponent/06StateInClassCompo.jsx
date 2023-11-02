import React, { Component } from 'react';

class StateInClassCompo extends Component {
    // usernamedm = "Data Member"
    // constructor(props) {
    //     super(props); //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    //     // this.usernamedm = "Something from DM"
    //     // console.log(this.usernamedm);
    //     // console.log("Constuctor calling");
    //     this.state = {DataMariMarji:"Test"}
    //     // this.changeStateData=this.changeStateData.bind(this)
    // }
    //aavu nthi krvanu Chalu 
    // databuilding(){ let variable = "some variable" }
    // datachanging(){}
    // var username = "Something"
    // changeStateData() {
    //     this.setState({ DataMariMarji:"Testing from changeStateData" })
    // }
    //aavu nthi krvanu Puru

    constructor(props) {
        super(props);
        this.state = {DataMariMarji:"Test"}
    }
    clickHandle() {
        console.log("checking");
    }

    changeStateData = () =>{
        this.setState({ DataMariMarji:"Testing from changeStateData" })
    }
    render() {
        return (
            <>
              <button onClick={this.clickHandle}>Click</button>  
              <button onClick={()=>{ console.log("btn Clicked");  }}>Click</button>  
              <button onClick={()=>{ this.setState({ DataMariMarji:"change" }) }}>{this.state.DataMariMarji}</button>  
              <button onClick={this.changeStateData}>Btn Click Change StateData by Function</button>  
            </>
        );
    }
}

export default StateInClassCompo;