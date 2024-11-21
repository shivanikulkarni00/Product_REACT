import React from "react";

class Class3 extends React.Component{
    constructor(){
        super();
        console.log(this);

        this.state={
            name:"gaytri",
            age:23,
        }

        
    }
    f1(){
        this.setState({
            name:"sayli"
        });
    }
    f2(){
        this.setState({
            age:this.state.age+5,
        });
    }
    // component did mount cycle it will be called only once, on mounting 
    componentDidMount(){
        console.log("did mount cycle called",this.state.name,this.state.age);
        
    }
    //  didupdate cycle is called whenever the the change in the state
    componentDidUpdate(){
        console.log("did update cycle called",this.state.name,this.state.age);
    }
    componentWillUnmount(){
         console.log("Leaving component")
    }
    render(){
        return(
            <div className="container">
                <h1>Life-cycle hook</h1>
                <p>
                    {this.state.name}
                </p>
                <button onClick={()=>{this.f1()}}>Change name</button>
                <p>
                    {this.state.age}
                </p>
                <button onClick={()=>{this.f2()}}>Change age</button>
                </div>
        )
    }
}
export default Class3;