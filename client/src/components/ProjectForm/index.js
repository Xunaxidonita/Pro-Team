import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const ProjectForm = () => (
  <Form>
    <Form.Field>
      <label>Project Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder='Description' />
    </Form.Field>
    <h3>Members:</h3>
    {/*  need ability to add & populate members here */}
    <h3>Due Date:</h3>
    {/* need maybe a calendar here where user can select date */}

    <Button type='submit'>Submit</Button>
  </Form>
)

export default ProjectForm;