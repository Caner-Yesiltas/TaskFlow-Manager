import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
const Header = () => {
    const [task, setTask] = useState("")
  return (
    <div>
      <h1 className='text-center text-danger m-5'  >Task Command Center</h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter new task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=> setTask(e.target.value)};
          }
        />
        <Button className='input-group-text bg-danger '  id="basic-addon2">Add New Task</Button>
      </InputGroup>
    </div>
  )
}

export default Header
