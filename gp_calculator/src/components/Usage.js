import React from 'react'
import '../css/Usage.css'
import $ from 'jquery'

const Usage =()=>{
    
        return(
            <div className = 'usage'>
                <div className ='steps'>
                    <h1> How To Calculate </h1>
                    <ol>
                        <li>Add a New Course with the Add (+) icon</li>
                        <li>Fill in the course Title, the units as well aas the Score in the appropriate columns as indicated in the form</li>
                        <li>You can add not more 20 courses</li>
                        <li>Click on the submit botton to calculate Grade Point</li>
                    </ol>
                </div>
            </div>
        )


}
export default Usage