import React, { Component } from 'react'
import Usage from '../components/Usage'
import '../css/calculator.css'
import add from '../images/add.png'
import $ from 'jquery'
import CourseForm from './CourseForm'
import CourseList from '../components/courseList'

class Calculator extends Component{
    state={
        courses : JSON.parse(localStorage.getItem('courses'))
    }

    


    componentDidUpdate(){
        localStorage.setItem('courses', JSON.stringify(this.state.courses))
    }

    addCourse =(course)=>{
        if (!this.state.courses){
            this.setState({
                courses : [course]
            })
        }
        else{
            this.setState({
                courses : [...this.state.courses, course]   
            })
        }
    }
    
    deleteCourse=(course)=>{
        const courses = this.state.courses.filter(item=> item.id!==course.id)
        this.setState({
            courses 
        })
    }


    handleAddIcon=()=>{
        if(!this.state.courses){
            $('.courseForm').show()
        }
           else if(this.state.courses.length<20){
            $('.courseForm').show()
           }
        else{
            alert('you cannot add more than 20 courses at once')
        }
        
    }
    
    handleClear=()=>{
        this.setState({
            courses: []
        })
    }
    
    render(){
            let units= 0;
            let totalPoint = 0;

            if(this.state.courses){
                for(let i=0; i<this.state.courses.length; i++){
                    units +=(+this.state.courses[i].units)
                    if(this.state.courses[i].grade === 'A'){
                        totalPoint += +this.state.courses[i].units*5.00
                    }
                    else if(this.state.courses[i].grade === 'B'){
                        totalPoint += +this.state.courses[i].units*4.00
                    }
                    else if(this.state.courses[i].grade === 'C'){
                        totalPoint += +this.state.courses[i].units*3.00
                    }
                    else if(this.state.courses[i].grade === 'D'){
                        totalPoint += +this.state.courses[i].units*2.00
                    }
                    else if(this.state.courses[i].grade === 'E'){
                        totalPoint += +this.state.courses[i].units*1.00
                    }
                    else{
                        totalPoint += +this.state.courses[i].units*0
                    }
                    
                }
                
            }


       

        return(
            <div className='calc'>
                <Usage/>
                <div className='form-container'>      
                    <div className='title'> 
                        <span >Course Code</span>
                        <span>Course Title</span>
                        <span>Unit</span>
                        <span>Grade</span>
                    </div> 

                    <ol className='booklist'>
                        {this.state.courses?(this.state.courses.map(item=><CourseList key={item.id} deleteCourse={this.deleteCourse} value={item}/>)): <div style={{textAlign:'center'}}>empty</div>
                        }
                    </ol>  
                    <div className='course_form' >      
                        <CourseForm addCourse={this.addCourse} />
                    </div>                  
                    <div className='icon-cont'>
                        <div className='results'>
                            <div>{this.state.courses?('Total Units =' + units):(null)}</div>
                            <div>{this.state.courses?('G.P =' + (totalPoint/units).toFixed(2) ):(null)}</div>
                        </div>
                        <div className='add-icon' >
                           {this.state.courses?<button onClick={this.handleClear}>Clear All</button>:null} 
                            <img src={add} alt='add course' title='click to add course' onClick={this.handleAddIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator