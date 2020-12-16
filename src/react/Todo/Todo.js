import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, doneTodo } from '../../redux/action/action';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    const add = useDispatch()
    const done = useDispatch()
    const dlt = useDispatch()

    const bgName = [
        { pic: 'light-bg-pic', color: 'light-bg-color', time: 'Night', icon: faMoon },
        { pic: 'dark-bg-pic', color: 'dark-bg-color', time: 'Day', icon: faSun }
    ]
    const [bgIndex, setBgIndex] = useState(0)
    const [todoWork, setTodoWork] = useState('')
    const allTodo = useSelector(state => state);
    const [todo, setTodo] = useState([])
    useEffect(() => {
        setTodo(allTodo)
    }, [allTodo])

    console.log(todo);

    const colorMode = () => (bgIndex === 1) ? setBgIndex(0) : setBgIndex(1)

    const settingTodo = (e) => setTodoWork(e.target.value)
    const addingTodo = (e) => add(addTodo(todoWork))
    const doingTodo = (e, index) => done(doneTodo(e.target.checked, index))
    const deletingTodo = (index) => dlt(deleteTodo(index))

    return (
        <section className={`todo ${bgName[bgIndex].time}`}>
            <div className={`top ${bgName[bgIndex].pic}`}></div>
            <div className={`bottom ${bgName[bgIndex].color}`}></div>
            <main className="w-100 d-flex justify-content-center">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className={`${bgName[bgIndex].time}`} onClick={() => colorMode()}>To Do</h1>
                        <p className={`mode-toggle-icon ${bgName[bgIndex].time}`} onClick={() => colorMode()}><FontAwesomeIcon icon={bgName[bgIndex].icon} /></p>
                        {/* <button onClick={() => colorMode()}>{bgName[bgIndex].time}</button> */}
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your To Do here" onBlur={settingTodo} />
                        <button onClick={addingTodo}>Add</button>
                    </div>
                    <section className="todo-work-list">
                        {
                            todo.map((todo, i) => {
                                return (
                                    <div className="d-flex align-items-center justify-content-between" key={i} >
                                        <input type="checkbox" name="" id="" onChange={(e) => doingTodo(e, i)} />
                                        <p>{todo.message}</p>
                                        <p onClick={() => deletingTodo(i)}>X</p>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </main>
        </section>
    );
};

export default Todo;