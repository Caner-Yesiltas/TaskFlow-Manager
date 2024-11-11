import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({todos, setTodos}) => {
    const deleteTodo = (id) => {
        const newTodos = todos.filter(item => item.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id) => {
        const newTodos = todos.map(item => 
            item.id === id 
            ? {...item, completed: !item.completed} 
            : item
        )
        setTodos(newTodos)
    }

    return (
        <div>
            <h2 className='text-center text-dark mt-5'> Daily List☃️</h2>
            <ListGroup className='w-50 d-flex mx-auto'>
                {todos.map((item) => (
                    <ListGroup.Item
                        key={item.id}  
                        className='m-2 text-capitalize d-flex justify-content-between'
                        variant="danger"
                        role="button"
                        onDoubleClick={() => toggleTodo(item.id)}
                    >
                        <span className={item.completed ? "text-decoration-line-through" : "text-decoration-none"}>
                            {item.text}
                        </span>
                        <svg
                            onClick={() => deleteTodo(item.id)}
                            style={{ cursor: 'pointer' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="red"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                        </svg>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default TodoList