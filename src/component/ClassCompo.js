import React, { Component } from "react"
import './HandsonOne.css';

class ClassComp extends Component{
    constructor(){   //
        super();
        this.state = {
            lineOne: "This is created using Class Component",
            lineTwo : "This is done using external CSS",
            lineThree : "This is done using inline CSS"
        }
    }
    render(){
        return(
            <>
                <div className="boxdiv classcomponent">
                    <h2>{this.state.lineOne}</h2>
                    <p style={{marginTop:"20px"}}>{this.state.lineTwo} </p>    
                    <p style={{marginTop:"20px" , color:"blue"}}>{this.state.lineThree}</p>
                </div>
            </>
        )
    }
}

export default ClassComp;