import React,{useState} from 'react'

function Log() {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    function submitHandler(){
        if (email ==="deva@gmail.com" & pass==="1234"){
            alert("success")
        }
            else{
                alert("failed")
            }

    }
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
        <div>
            <label htmlFor='pass'>Password :</label>
            <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        </div>
        <div>
        <button> submit</button>
        </div>
    </form> 

  )
}

export default Log