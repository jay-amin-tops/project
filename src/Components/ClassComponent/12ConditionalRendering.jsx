import React, { Component } from 'react';
class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin:true }
    }
    render() {
        return(
            <>
            {/* {(this.state.isLogin)  ?<> <button onClick={()=>{ this.setState({ isLogin:!this.state.isLogin }) }}>Logout</button></>:<> <button onClick={()=>{ this.setState({ isLogin:!this.state.isLogin }) }}>Login</button></>} */}
            <> <button onClick={()=>{ this.setState({ isLogin:!this.state.isLogin }) }}>{(this.state.isLogin)?"Login" :"Logout"}</button></>
            
            </>
        )
        // if (this.state.isLogin) {
        //     return (
        //         <>
        //         {/* { JSON.stringify(this.state.isLogin)} */}
        //             {/* <button onClick={()=>{ this.setState({ isLogin:false }) }}>Login</button> */}
        //             <button onClick={()=>{ this.setState({ isLogin:!this.state.isLogin }) }}>Logout</button>
        //         </>
        //     );
        // } else {
        //     return (
        //         <>
        //         {/* { JSON.stringify(this.state.isLogin)} */}
        //             {/* <button onClick={()=>{ this.setState({ isLogin:false }) }}>Login</button> */}
        //             <button onClick={()=>{ this.setState({ isLogin:!this.state.isLogin }) }}>Login</button>
        //         </>
        //     );
        // }
    }
}

export default ConditionalRendering;