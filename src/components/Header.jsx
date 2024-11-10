import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';


const Header = ({todos, setTodos}) => {
    const [task, setTask] = useState("")
    const addTodo =() => {
        console.log(task);
        const newTodo={
          // id: new Date().getTime(),
          id: uuidv4(),
          text: task, 
          compleated: false
        }
        console.log(newTodo);
        setTodos([...todos, newTodo])
        setTask("")
    }
  return (
    <div>
      <h1 className='text-center text-danger m-5'  >Task Command Center</h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto gap-4 ">
        <Form.Control
          placeholder="Enter new task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=> setTask(e.target.value)}
          value={task}
          
        />
        <Button className='input-group-text bg-danger  ' onClick={addTodo} disabled={!task.trim} id="basic-addon2">Add New Task</Button>
      </InputGroup>
    </div>
  )
}

export default Header
