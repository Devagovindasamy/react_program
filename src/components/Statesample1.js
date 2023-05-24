import React, { Component } from "react";
class Statesample1 extends Component{
    constructor(){
        super()
        this.state={
            msg:'Welcom'
        }
    }
    dispMsg(){
        this.setState(
            {
                msg:'thankyou'
            }
        )
    }
    render(){
    return (
    <div> 
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.dispMsg()}>submit</button>
    </div>
    )
}
}
export default Statesample1