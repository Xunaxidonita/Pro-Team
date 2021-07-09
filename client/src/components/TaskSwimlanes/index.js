import React from "react";
import { Table } from "semantic-ui-react";
import TaskCard from "../TaskCard";

const TaskSwimlanesAll = ({ tasks }) => {
  const unassignedTasks = tasks?.filter((task) => task.state === "unassigned");
  const assignedTasks = tasks?.filter((task) => task.state === "assigned");
  const inProgressTasks = tasks?.filter((task) => task.state === "inProgress");
  const completedTasks = tasks?.filter((task) => task.state === "completed");

  return (
    <Table basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Unassigned:</Table.HeaderCell>
          <Table.HeaderCell>Assigned:</Table.HeaderCell>
          <Table.HeaderCell>In Progress:</Table.HeaderCell>
          <Table.HeaderCell>Completed:</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            {unassignedTasks?.map((task) => {
              return <TaskCard task={task}></TaskCard>;
            })}
          </Table.Cell>
          <Table.Cell>
            {assignedTasks?.map((task) => {
              return <TaskCard task={task}></TaskCard>;
            })}
          </Table.Cell>
          <Table.Cell>
            {inProgressTasks?.map((task) => {
              return <TaskCard task={task}></TaskCard>;
            })}
          </Table.Cell>
          <Table.Cell>
            {completedTasks?.map((task) => {
              return <TaskCard task={task}></TaskCard>;
            })}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

// Not sure if this should go here:

export default TaskSwimlanesAll;
