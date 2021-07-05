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
    addProject(projectName: String!, assignedTo: ID, taskCount: Int, taskIds: ID, dueDate: String): Project
    addTask(taskName: String, taskText: String, assignedTo: ID, dueDate: String): Project
}
`;
// Should make username unique, otherwise need get user by id instead
// of get user by username
// Not sure what to do with conversations


// export typeDefs
module.exports = typeDefs;

