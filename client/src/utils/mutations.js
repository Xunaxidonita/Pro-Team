import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject($projectName: String, $assignedTo: ID, $taskCount: Int, $taskIds: ID, $dueDate: String) {
        addProject(projectName: $projectName, assignedTo: $assignedTo, taskCount: $taskCount, taskIds: $taskIds, dueDate: $dueDate) {
            project {
                _id
                projectName
                assignedTo
                taskCount
                tasks
                dueDate
            }
        }
    }
`;

export const UPDATE_PROJECT = gql`
    mutation updateProject($projectId: ID, $projectName: String, $assignedTo: ID, $taskIds: ID, $dueDate: String) {
        updateProject(projectId: $projectId, projectName: $projectName, assignedTo: $assignedTo, taskIds: $taskIds, dueDate: $dueDate) {
            project {
                _id
                projectName
                assignedTo
                taskCount
                tasks
                dueDate
            }
        }
    }
`;

export const ADD_TASK = gql`
    mutation addTask($projectId: ID, $taskName: String, $taskText: String, assignedTo: ID, dueDate: String) {
        addTask(projectId: $projectId, taskName: $taskName, taskText: $taskText, assignedTo: $assignedTo, dueDate: $dueDate) {
            project {
                _id
                projectName
                assignedTo
                taskCount
                tasks {
                    _id
                    taskName
                }
                dueDate
            }
        }
    }
`;

export const UPDATE_TASK = gql`
    mutation updateTask($_id: ID, $taskName: String, $taskText: String, assignedTo: ID, dueDate: String) {
        updateTask(_id: $taskId, taskName: $taskName, taskText: $taskText, assignedTo: $assignedTo, dueDate: $dueDate) {
            task {
                _id
                taskName
                taskText
                assignedTo {

                }
                dueDate
            }
        }
    }
`