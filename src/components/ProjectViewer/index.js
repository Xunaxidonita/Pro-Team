import React from 'react'
import { Radio, Button, Icon } from 'semantic-ui-react'

// not sure if this goes here
// task swimlanes also goes here? 

// toggle between All Tasks and My Tasks
// need something to say "All Tasks" and "My Tasks" and switch when clicked on

const TaskToggle = () => <Radio toggle />

// Add Task Button 
const AddTaskButton = () => (
  <div>
    <Button icon labelPosition='left' size='mini'>
      <Icon name='plus' />
      Add a new task to this project
    </Button>

  </div>
)

export default TaskToggle;
export default AddTaskButton;