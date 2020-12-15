import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, doneTodo } from '../../redux/action/action';
import './Todo.css';

const Todo = () => {
    const add = useDispatch()
    const done = useDispatch()
    const dlt = useDispatch()

    const bgName = [
        { pic: 'light-bg-pic', color: 'light-bg-color', time: 'Light' },
        { pic: 'dark-bg-pic', color: 'dark-bg-color', time: 'Dark' }
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const allTodo = useSelector(state => state);
    const [todo, setTodo] = useState([])
    useEffect(() => {
        setTodo(allTodo)
    }, [allTodo])

    console.log(todo);

    const colorMode = () => {
        (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)
        // add(addTodo('Item added'))
        // done(doneTodo('Item done'))
        // dlt(deleteTodo('Item deleted'))
    }

    const noteTodo = (e) => {
        add(addTodo(e.target.value))
    }

    return (
        <section className="todo">
            <div className={`top ${bgName[bgIndex].pic}`}>
            </div>
            <div className={`bottom ${bgName[bgIndex].color}`}></div>
            <main className="w-100 d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-between">
                        <h1>To Do</h1>
                        <button onClick={() => colorMode()}>{bgName[bgIndex].time}</button>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your To Do here" onBlur={noteTodo} />
                        <button>Add</button>
                    </div>
                    <section className="todo-work-list">
                        {
                            todo.map((todo, i) => <p key={i}>{todo.message}</p>)
                        }
                    </section>
                </div>
            </main>
        </section>
    );
};

export default Todo;