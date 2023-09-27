import React, { Component } from "react"
import './HandsonOne.css';
import FunctionComp from "./FunctionCompo";
import ClassComp from "./ClassCompo";

class DisplayCompo extends Component{
    constructor(){   //
        super();
        this.state = {
            count : 0, //10, "", 
            showData : false
        }
    }
    render(){
        console.log(this.state.count);
        console.log(this.state.showData)
        return(
            <>
                <h1 className="Heading" >Styling Using Functional and Class Component</h1>
                
                {/* <h1> Count : {this.state.count}</h1> */}
                {/* <h1> Data : {this.state.showData  }</h1> */}
                {/* <button onClick={()=> this.setState({count: this.state.count + 1})}>Increment</button> */}
                <div className="buttonDiv" >
                    <button className='buttonbar' onClick={()=> this.setState({count: !this.state.count})}> To see Styling in Functional Component</button>
                    <button className='buttonbar' onClick={()=> this.setState({showData: !this.state.showData})}> To see Styling in Class Component</button>
                </div>

                { this.state.count  ? <FunctionComp/> : null }
                { this.state.showData && <ClassComp/> }

            </>
        )
    }
}

export default DisplayCompo;