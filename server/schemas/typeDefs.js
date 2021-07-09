const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql `
type Project {
    _id: ID
    projectName: String
    assignedTo: [User]
    taskCount: Int
    tasks: [Task]
    dueDate: String
}

type Task {
    _id: ID
    taskName: String
    taskText: String
    assignedTo: [User]
    dueDate: String
}

type User {
    _id: ID 
    username: String
    email: String
    projectCount: Int
    taskCount: Int
    projects: [Project]
    tasks: [Task]
}

type Query {
    me: User
    users: [User]
    userByUsername(username: String): User
    projsByUser(projectId: ID): [Project]
    projects(username: String): [Project]
    project(projectId: ID): Project
    userTasks(username: String): [Task]
    projTasks(projectId: ID): [Task]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addProject(projectName: String, assignedTo: ID, taskIds: ID, dueDate: String): Project
    updateProject(projectId: ID, projectName: String, assignedTo: ID, taskIds: ID, dueDate: String): Project
    addTask(projectId: ID, taskName: String, taskText: String, assignedTo: ID, dueDate: String): Project
    updateTask(projectId: ID, _id: ID, taskName: String, taskText: String, assignedTo: ID, dueDate: String): Task
}
`;
/*
We will need to go over the Queries and Mutations as a group to decide what they need to look like, however the current ones are implemented and work

It might be easier to create a task or project and then add/remove assignees to it rather than ony while creating it. And we'll probaly need to pass through either the ID or the username of the assignee
*/
module.exports = typeDefs;

