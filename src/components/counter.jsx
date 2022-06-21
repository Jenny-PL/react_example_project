import React from "react";
import {useState } from 'react';

// from Mosh React Tutorial for Beginners

const Counter = (props)=> {
    const [count, setCounter] = useState(0);

    const state = {
        imageUrl: 'https://picsum.photos/200', 
        courseNames: ['math', 'geometry', 'biology', 'art']
    };

    const handleIncrement =(count) => {
        console.log('Increment clicked');
        setCounter(count += 1);
    }

        return (
            <section>
        <img src={state.imageUrl} alt="randomly generated pic"></img>
        {/* bootstrap styling applied with badge/ badge-primary m-3 */}
        <button onClick={handleIncrement} className="btn btn-secondary btn-small">Click Here to Count UP!</button>
        <p className="badge badge-primary m-3">{count}</p>
        <h3> List of courses offered: </h3>
        <ul>
                {state.courseNames.map((course) => {
                    return (<li key={course}>{course} <button className="btn btn-secondary btn-small m-3" > Delete</button>
                    </li>);
                })
                }
        </ul>
        </section>
        );
    }

export default Counter;