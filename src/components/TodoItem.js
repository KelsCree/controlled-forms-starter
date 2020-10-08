import React from 'react'

export default function TodoItem({todo, deleteTodo}) {
    const handleClick = () => {
        deleteTodo(todo)
    }
    return (
        <li>
            <h2>{todo.title}</h2>  
            <p>{todo.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </li>
    )
}
