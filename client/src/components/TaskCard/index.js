import React from "react";
import { Card, Button } from "semantic-ui-react";

const TaskCard = ({ task }) => (
  <Card>
    <Card.Content>
      <Card.Header>{task.title}Task</Card.Header>
      <Card.Meta>
        <span className="date">Due date:{task.dueDate}</span>
      </Card.Meta>
      <Card.Description>{task.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button href={`/projects/${task?.project?.id}/tasks/${task?.id}`}>
        Edit
      </Button>
      <Button textalign="right">{task.status}</Button>
    </Card.Content>
  </Card>
);

export default TaskCard;
