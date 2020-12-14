import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const bgName = ['light-bg', 'dark-bg']
    const [bgIndex, setBgIndex] = useState(0)
    const colorMode = () => (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)

    return (
        <section className="todo">
            <div className={`top ${bgName[bgIndex]}`}>
                <button onClick={() => colorMode()}>Change</button>
            </div>
            <div className="bottom">

            </div>
        </section>
    );
};

export default Todo;