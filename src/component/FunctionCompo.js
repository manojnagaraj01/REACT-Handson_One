//function based component
import React from 'react'
import './HandsonOne.css';
function FunctionComp(){
    return(
        <>
            <div className="boxdiv functioncomponent">
                <h2>This is created using Functional Component</h2>
                <p style={{marginTop:"20px"}}>This is done using external CSS</p>
                <p style={{marginTop:"20px" , color:"blue"}}>This is done using inline CSS</p>
            </div> 
        </>
    )
}
 
export default FunctionComp; // default export 
//export {FunctionComp};  // name export
