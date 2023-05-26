import React,{Component} from "react";
class Login extends Component
{
constructor(props)
{
    super(props)
    this.state={
        sname:'',
        pwd:''
    }   
}
nameHandler=(event)=>{
    this.setState({
        sname:event.target.value})
}

pwdHandler=(event)=>{
    this.setState({
        pwd:event.target.value})
}

submitHandler=(event)=>{
    alert(
        "name:"+`${this.state.sname}`+
        "pwd:"+`${this.state.pwd}`
        )
    }
render()
{
    return(<form onSubmit={this.submitHandler}>
     <div>
        <label> User name</label>
        <input type="text" value={this.state.sname} onChange={this.nameHandler}></input>
     </div>
     <div>
     <label>Password</label>
        <input type="text" value={this.state.pwd} onChange={this.pwdHandler}></input>
      
     </div>
     <div>
        <button>submit</button>
     </div>
    </form>)
}
}
export default Login