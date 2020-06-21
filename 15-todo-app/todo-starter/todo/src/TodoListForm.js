import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

class TodoListForm extends Component{
  constructor(props){
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  
  handleSubmit(evt){
    evt.preventDefault();
    this.props.create({...this.state,id: uuid() });
    this.setState({task: ""});
  }
  render(){
    return(
      <form onSubmit= {this.handleSubmit}>
        <label htmlFor='task'>Add new Todo</label>
        <input 
          id='task' 
          type='text' 
          name='task'
          value={this.state.task}  
          onChange={this.handleChange}
        />
        <button>ADD</button>
      </form>
    );
  }
}

export default TodoListForm;