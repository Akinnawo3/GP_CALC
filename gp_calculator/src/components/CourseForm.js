import React, { Component } from 'react'
import '../css/courseForm.css'
import $ from 'jquery'

class CourseForm extends Component{

    state={
        id: '', 
        code : '',
        title : '',
        units : '',
        grade : '',
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      const {addCourse} = this.props;
      this.setState({
          ...this.state,id: Math.random() * 10
      })
      addCourse(this.state)
      $('.courseForm').hide()
        this.setState({
            code : '',
            title : '',
            units : '',
            grade : '',
        })
    }
    componentDidMount(){
        this.setState({
            ...this.state,id: Math.random() * 10
        })
    }
    handleChange=(e)=>{
            this.setState({
                [e.target.id] : e.target.value
            })
    }


 
    render(){
        return(
           
            <form className='courseForm' onSubmit={this.handleSubmit}>
                <input placeholder ="Course code" id='code' onChange={this.handleChange} value={this.state.code} required />
                <input placeholder ="Course title" id='title' onChange={this.handleChange} value={this.state.title} required/>
                <select id='units' onChange={this.handleChange} value={this.state.units}  required >
                   
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
                <select id='grade' onChange={this.handleChange} value={this.state.grade} required>
                    <option></option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                  
                </select>
                <button type='submit'>Submit</button>
            </form>
        )
    }





}

export default CourseForm