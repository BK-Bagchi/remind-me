import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const bgName = [
        {
            pic: 'light-bg-pic',
            color: 'light-bg-color'
        },
        {
            pic: 'dark-bg-pic',
            color: 'dark-bg-color'
        }
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const colorMode = () => (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)

    return (
        <section className="todo">
            <div className={`top ${bgName[bgIndex].pic}`}>
                <button onClick={() => colorMode()}>Change</button>
            </div>
            <div className={`bottom ${bgName[bgIndex].color}`}>

            </div>
        </section>
    );
};

export default Todo;