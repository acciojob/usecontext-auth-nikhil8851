import React ,{useState, useContext}from "react";
import RobotContext from "../context/RobotContext";

const Hello = (props) => {
    
     
    let {a,setA} = useContext(RobotContext);
  

    console.log(props.name);


    
    // console.log(obj);

    return (
        <div>
            {
                a == "on" ? <h1>you are authenticated now you process</h1> : <h1>click on checkbox to authenticate with robot</h1>

                
            }

            <form>
                    input: <input type="checkbox" onChange={(e) => setA(e.target.value)} /> 
                    
            </form>
        </div>

    )

}

export default Hello;