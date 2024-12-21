import React, { useState } from "react";

import RobotContext from "./RobotContext";


const RoboProvider = (props) => {

    const [a, setA] = useState(false);


 return (
    <RobotContext.Provider value={
        {
            a,setA
        }
    }>
        {props.children}
    </RobotContext.Provider>
 )


}

export default RoboProvider;