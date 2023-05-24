import React, {Component} from "react";
class Forms extends Component{
    constructor(props){
        super(props)
            this.state={
                sname:'',
                gender:'',
                gen:'',
                addr:'',
        }
    }
        nameHandeler=(event)=>{
            this.setState(
                {
                    sname:event.target.value
                }
            )
        }
        genderHandeler=(event)=>{
            this.setState(
                {
                    gender:event.target.value
                }
            )
        }
        genHandeler=(event)=>{
            this.setState(
                {
                    gen:event.target.value
                }
            )
        }
        addrHandeler=(event)=>{
            this.setState(
                {
                    addr:event.target.value
                }
            )
        }
        submitHandeler=(event)=>{
            alert(
                "name: "+`${this.state.sname}`+
                "gender: "+`${this.state.gender}`+
                "gen: "+`${this.state.gen}`+
                "addr: "+`${this.state.addr}`

            )
        }
        render(){
            return(
                <form onSubmit={this.submitHandeler}>
                 <div>
                    <label> Enter the Name</label> 
                    <input type="text"
                    value={this.state.sname}
                    onChange={this.nameHandeler}></input>   
                </div>   
                <div>
                    <label> choose the Gender</label> 
                    <select value={this.state.gender} onChange={this.genderHandeler}>
                        <option>Male</option>
                        <option>Female</option>
                    </select> 
                </div>
                <div   value={this.state.gen} onChange={this.genHandeler}>
                    <label> choose the Gender</label> 
                    <input type="radio" nmae="gen" value="Male"/>Male
                    <input type="radio" nmae="gen" value="Female"/>Female
                </div>
                <div>
                <label>Enter the Address</label>
                <textarea 
                rows="3"
                value={this.state.addr}
                onChange={this.addrHandeler}
                ></textarea>
            </div>
            <div>
                <button >Submit</button>
            </div>
            </form>
            )
         }

}
export default Forms