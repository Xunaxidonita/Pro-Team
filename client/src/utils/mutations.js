// add user - have
// add project - have
// add task - have
// update project
// update task
// delete user
// delete project
// delete task

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectName: String, $description: String, $members: [ID], $dueDate: String) {
    addProject(projectName: $projectName, description: $description, members: $members, dueDate: $dueDate) {
      _id
      projectName
      description
      members {
        _id
        username
      }
      dueDate
    }
  }
`;
export const ADD_TASK = gql`
  mutation addTask(
    $taskName: String!
    $taskText: String!
    $assignedTo: UserInput
    $dueDate: String
    $status: String
  ) {
    addTask(
      taskName: $taskName
      taskText: $taskText
      assignedTo: $assignedTo
      dueDate: $dueDate
      status: $status
    ) {
      _id
    }
  }
`;

// export const ADD_PROJECT_TO_USER = gql`
//   mutation addProjectToUser(
//     $projectName: String
//   )`;
