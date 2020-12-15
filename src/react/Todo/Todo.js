import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, doneTodo } from '../../redux/action/action';
import './Todo.css';

const Todo = () => {
    const bgName = [
        { pic: 'light-bg-pic', color: 'light-bg-color', time: 'Light' },
        { pic: 'dark-bg-pic', color: 'dark-bg-color', time: 'Dark' }
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const add = useDispatch()
    const done = useDispatch()
    const dlt = useDispatch()

    console.log(useSelector(state => state.message));

    const colorMode = () => {
        (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)
        add(addTodo('Item added'))
        done(doneTodo('Item done'))
        dlt(deleteTodo('Item deleted'))
    }

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