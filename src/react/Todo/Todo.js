import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const bgName = [
        { pic: 'light-bg-pic', color: 'light-bg-color', time: 'Light' },
        { pic: 'dark-bg-pic', color: 'dark-bg-color', time: 'Dark' }
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const colorMode = () => (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)

    return (
        <section className="todo">
            <div className={`top ${bgName[bgIndex].pic}`}>
            </div>
            <div className={`bottom ${bgName[bgIndex].color}`}></div>
            <main>
                <div className="d-flex justify-content-between">
                    <h1>To Do</h1>
                    <button onClick={() => colorMode()}>{bgName[bgIndex].time}</button>
                </div>
                <div>
                    <input type="text" placeholder="Enter your To Do here" />
                    <button>Add</button>
                </div>
                <div></div>
            </main>
        </section>
    );
};

export default Todo;