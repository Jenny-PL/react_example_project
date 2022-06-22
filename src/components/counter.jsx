import React from "react";
// import {useState } from 'react';

const Counter = (props)=> {
    const deleteOnClick = props.deleteOnClick;
    const courseList = props.courseList;
    const handleIncrement = props.handleIncrement;
    const count = props.count;


    
    const imageUrl = 'https://picsum.photos/200';  

        return (
            <section>
        <img src={imageUrl} alt="randomly generated pic"></img>
        {/* bootstrap styling applied with badge/ badge-primary m-3 */}
        <button onClick={handleIncrement} className="btn btn-secondary btn-small">Click Here to Count UP!</button>
        <p className="badge badge-primary m-3">{count}</p>
        <h3> List of courses offered: </h3>


        {/* deleteOnClick doesn't work because I didn't correctly give course a key. */}
        <ul>
            {courseList.map((course) => {
                return (<li key={course}> {course} <button onClick={() => deleteOnClick(course)}className="btn btn-secondary btn-small m-3" > Delete</button>
                </li>);
                })
                }
        </ul>
        </section>
        );
    }

export default Counter;