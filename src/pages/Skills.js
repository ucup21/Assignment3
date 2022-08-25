import React from 'react';
import '../App.css';

function Skills() {
    return (
        <div>
            <p>HTML</p>
            <div className='container'>
                <div className='skills html'>70%</div>
            </div>

            <p>CSS</p>
            <div class="container">
                <div className='skills css'>70%</div>
            </div>

            <p>JavaScript</p>
            <div className='container'>
                <div className='skills js'>65%</div>
            </div>

            <p>JAVA</p>
            <div className='container'>
                <div className='skills java'>80%</div>
            </div>
        </div>
    )
}

export default Skills