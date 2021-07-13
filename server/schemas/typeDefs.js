const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}

  type Project {
    _id: ID
    projectName: String
    description: String
    members: [User]
    taskCount: Int
    tasks: [Task]
    dueDate: String
    status: String
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
    project(_id: ID): Project
    userTasks(username: String): [Task]
    projTasks(projectId: ID): [Task]
  }

  input UserInput {
    _id: ID
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(
      projectName: String
      members: [ID]
      description: String
      dueDate: String
    ): Project
    addTask(
      taskName: String
      taskText: String
      assignedTo: ID
      dueDate: String
    ): Project
      updateProjectStatus(_id: ID, status: String): Project
  }
`;
/* Do we need a get all users query? I can't think of a situation in which we would need one */
/* Do we need projsByUser when we already have projects? */
/*
We will need to go over the Queries and Mutations as a group to decide what they need to look like, however the current ones are implemented and work

It might be easier to create a task or project and then add/remove assignees to it rather than ony while creating it. And we'll probaly need to pass through either the ID or the username of the assignee
*/
module.exports = typeDefs;
