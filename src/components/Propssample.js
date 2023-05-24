import React from "react";
let Propssample=(props)=>{
    return(
        <div>
    <h1> welcome {props.name} boys from {props.city}</h1>
    {props.children}
    </div>
    )
}
export default Propssample