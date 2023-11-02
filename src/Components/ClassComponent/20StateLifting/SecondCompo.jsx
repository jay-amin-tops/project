import React, { Component } from 'react';

class SecondCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }
    inputInsideChildCompo = (e) => {
        // console.log("called inputInsideChildCompo",e);
        // console.log("called inputInsideChildCompo",e.target);
        // console.log("called inputInsideChildCompo",e.target.value);
        this.setState({ checked: !this.state.checked })
        this.props.ParentMethod(this.state.checked, "kaipan")
    }
    render() {
        return (
            <>
                <input type="text" onChange={this.inputInsideChildCompo} name="" id="" />
                <input type="checkbox" defaultChecked={this.state.checked}
                    onChange={this.inputInsideChildCompo} name="" id="" />  {(this.state.checked) ? "Cricket" : ""}
            </>
        );
    }
}

export default SecondCompo;