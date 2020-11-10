import React from 'react'
import '../css/courselist.css'
import cancel from '../images/images.jpeg'
const CourseList = ({value,deleteCourse})=>{

    return(
        <li >
            <div className='oneCourse'>
                <div>{value.code}</div>
                <div>{value.title}</div>
                <div>{value.units}</div>
                <div>{value.grade}</div>
            </div>
            <div className='cancelImage' onClick={()=>deleteCourse(value)} ><img srcSet={cancel} title='click to delete'/></div>
        </li>
    )
}
export default CourseList