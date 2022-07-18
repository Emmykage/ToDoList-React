import React, { Component } from "react";
class InputTodo extends Component{
    state = {
        title: ""
    }
    onChange=e=>{
       this.setState({
        title: e.target.value
       });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.title)
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
        }else{
            alert("Please write an Item")
        }
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                className="input-text" 
                placeholder="Add Todo..." 
                value={this.state.title}
                name="title"
                onChange={this.onChange}
                />
                <button> Submit</button>
            </form>
        )
    }
}
export default InputTodo