import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const TaskForm = () => (
  <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder="Title" />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder="Description" />
    </Form.Field>
    <Form.Field>
      <label>Assignee</label>
      <input placeholder="Assignee" />
    </Form.Field>
    <Form.Field>
      <label>Status</label>
      <input placeholder="Status" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default TaskForm;
