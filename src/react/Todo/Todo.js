import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, doneTodo } from '../../redux/action/action';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    const add = useDispatch()
    const done = useDispatch()
    const dlt = useDispatch()

    const bgName = [
        { pic: 'light-bg-pic', color: 'light-bg-color', time: 'Night', icon: faMoon, listBg: 'list-night', calBg: 'calculation-bg-light' },
        { pic: 'dark-bg-pic', color: 'dark-bg-color', time: 'Day', icon: faSun, listBg: 'list-day', calBg: 'calculation-bg-dark' }
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
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-around align-items-center w-100 my-3">
                        <h1 className={`${bgName[bgIndex].time}`} onClick={() => colorMode()}>Remind Me</h1>
                        <p className={`font ${bgName[bgIndex].time}`} onClick={() => colorMode()}><FontAwesomeIcon icon={bgName[bgIndex].icon} /></p>
                        {/* <button onClick={() => colorMode()}>{bgName[bgIndex].time}</button> */}
                    </div>
                    <div className="my-3">
                        <input type="text" placeholder="Enter your To Do here" onBlur={settingTodo} />
                        <button onClick={addingTodo}>Add</button>
                    </div>
                    <section className={`todo-work-list my-3 ${bgName[bgIndex].listBg} w-100`}>
                        {
                            todo.map((todo, i) => {
                                return (
                                    <div className="todo-works d-flex align-items-center justify-content-between" key={i} >
                                        <input type="checkbox" className="" onChange={(e) => doingTodo(e, i)} />
                                        <p className="font text-capitalize px-3">{todo.message}</p>
                                        <p className="pointer font" onClick={() => deletingTodo(i)}><FontAwesomeIcon icon={faTimes} /></p>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <div className={`d-flex justify-content-between ${bgName[bgIndex].calBg}`}>
                        <p>Total: {todo.length} &nbsp;</p>
                        <p>Done: {todo.filter(done => done.done === true).length}</p>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Todo;