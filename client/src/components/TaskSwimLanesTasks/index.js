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
);

export default TaskSwimlanesMyTasks;
