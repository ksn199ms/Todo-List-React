import React, { useState } from 'react'
import Button from './Button'

function Todo() {
    const [todo, setTodo] = useState([])
    const [completed, setCompleted] = useState(['Learn JavaScript'])
    const [todotext, setTodotext] = useState('')
    const [error, changeError] = useState('')

    const inputhandler= (e) => {
        if(e.target.value.length > 2) {
            changeError('')
        }
        // console.log(e.target.value);
        setTodotext(e.target.value)
    }

    const addTask=()=> {
        if(todotext.length > 2) {
            setTodo([...todo, todotext]);
            setTodotext(''); // Clear the input field after adding the task 
    }else{
        changeError('Task is too short')
    }
}

    const handleCancel = () => {
        setTodotext('');
    }

    const clearSection=(section) => {
        if(section==='todo'){
            setTodo([]);
        }else if (section==='completed') {
            setCompleted([]);
        }
    }

    const completeTodo =(index)=>{
        
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
        setCompleted([...completed, todo[index]]);
    }

    const deleteTodo = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    }

    const deleteCompleted = (index) => {
        const newCompleted = [...completed];
        newCompleted.splice(index, 1);
        setCompleted(newCompleted);
    }

    return (
        <>
            <div>
                <div className='todo-form'>
                    <h1>Todo List</h1>
                    <input type="text" className='todo-form input' placeholder='Enter Task' value={todotext} onChange={inputhandler} />
                    <span className='error'>{error}</span>
                    <div className='todo-form-buttons'>
                        <Button type="button" className='add-btn' text='Add Task' handleClick={() => addTask() } />
                        <Button className='cancel-btn' text='Cancel' handleClick={() => handleCancel()} />
                    </div>
                    </div>
                

                <div className="todo-section">
                    <div className="todo-left">
                        <h1>Todo Tasks ({todo.length}) <Button className='complete-btn' text='Clear All' handleClick={() => clearSection('todo')} /></h1>
                        {
                            todo.map((todo, index) =>
                                <div className="todo-item">
                                    <div className="todo-item-text">({index + 1}){todo}</div>
                                    <div className="todo-form-buttons">
                                        <Button className='complete-btn' text='Complete' handleClick={() => completeTodo(index)} />
                                        <Button className='delete-btn' text='Delete' handleClick={() => deleteTodo()} />
                                    </div>
                                </div>
                            )

                        }

                    </div>
                    <div className="todo-right">
                        <h1>Completed Tasks ({completed.length}) <Button className='complete-btn' text='Clear All' handleClick={() => clearSection('completed')} /></h1>
                        {
                            completed.map((completed, index) =>
                                <div className="todo-item">
                                    <div className="todo-item-text">({index + 1}){completed}</div>
                                    <div className="todo-form-buttons">
                                        <Button className='delete-btn' text='Delete' handleClick={() =>deleteCompleted()} />
                                    </div>
                                </div>
                            )

                        }

                    </div>
                </div>
            </div>
        </>
    )
}


export default Todo