import React, { Component } from "react";
class Statesample2 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incr(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    render(){
    return (
    <div> 
        <h1>count={this.state.count}</h1>
        <button onClick={()=>this.incr()}>click</button>
    </div>
    )
}
}
export default Statesample2