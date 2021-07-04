import React from 'react'
import { Table } from 'semantic-ui-react'

const TaskSwimlanesAll = () => (
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
        <Table.Cell>Placeholder Task 1</Table.Cell>
        <Table.Cell>Placeholder Task 2</Table.Cell>
        <Table.Cell>Placeholder Task 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Placeholder Task 1</Table.Cell>
        <Table.Cell>Placeholder Task 2</Table.Cell>
        <Table.Cell>Placeholder Task 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Placeholder Task 1</Table.Cell>
        <Table.Cell>Placeholder Task 2</Table.Cell>
        <Table.Cell>Placeholder Task 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Placeholder Task 1</Table.Cell>
        <Table.Cell>Placeholder Task 2</Table.Cell>
        <Table.Cell>Placeholder Task 3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

// Not sure if this should go here:

const TaskSwimlanesMyTasks = () => (
    <Table basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>In Progress:</Table.HeaderCell>
          <Table.HeaderCell>Completed:</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>Placeholder Task 1</Table.Cell>
          {/* *due dates! */}
          <Table.Cell>Placeholder Task 2</Table.Cell>
          <Table.Cell>Placeholder Task 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Placeholder Task 1</Table.Cell>
          <Table.Cell>Placeholder Task 2</Table.Cell>
          <Table.Cell>Placeholder Task 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )

export default TaskSwimlanesAll;
export default TaskSwimlanesMyTasks; 