import React, { Component } from 'react';

class ControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", formData: { username: '' } }
    }
    inpHandleChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        this.setState({ username: e.target.value })
    }
    // inpHandleChange= (e)=>  console.log("called")

    render() {
        return (
            <>
                {JSON.stringify(this.state)}
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" className='form-control' placeholder='Print Inside Console' name="usernameonchangelog" onChange={(e) => { console.log("called"); }} id="username" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" name="usernameeventhandle" className='form-control' placeholder='User Name handle by Event Handler arrow' onChange={this.inpHandleChange} id="username" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" name="usernamesetstate" className='form-control' placeholder='Enter direct arrow func set state' onChange={(e) => { this.setState({ username: e.target.value }) }} id="username" /> <br />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" name="usernamesetstate" className='form-control' placeholder='Enter direct arrow func set state' onChange={(e) => {
                            this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } }))
                        }} id="username" /> <br />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        {/* <input type="text" name="mobile" className='form-control' placeholder='Enter Mobile' onChange={(e) => {  this.setState((prevValue)=>({...prevValue.formData,[e.target.name]:e.target.value} ))  }} id="username" /> <br /> */}
                        {/* <input type="text" name="mobile" className='form-control' placeholder='Enter Mobile' onChange={(e) => {
                            this.setState((prevValue) => { 
                                console.log(prevValue);
                             })
                        }} id="username" /> <br /> */}
                        {/* <input type="text" name="mobile" className='form-control' placeholder='Enter Mobile' onChange={(e) => {
                            this.setState((prevValue) => ({formData: { [e.target.name]: e.target.value } }))
                        }}  id="username" /> <br /> */}
                        <input type="text" name="mobile" className='form-control' placeholder='Enter Mobile' onChange={(e) => {
                            this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } }))
                        }} id="mobile" /> <br />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <input type="text" name="email" className='form-control' placeholder='Enter Email' onChange={(e) => {
                            this.setState((prevValue) => ({ formData: { ...prevValue.formData, [e.target.name]: e.target.value } }))
                        }} id="username" /> <br />
                    </div>
                </div>
                {/* this.state = { username: "", formData: {username:''} } */}
                {/*  <input type="text" className='form-control' placeholder='Print Inside Console' name="usernameonchangelog" onChange={(e) => { this.setState({ username: e.target.value }) }} id="username" />  */}
            </>
        );
    }
}

export default ControlledCompo;