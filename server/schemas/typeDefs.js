const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql `
type Project {
    _id: ID
    projectName: String
    projectText: String
    assignedTo: [User]
    taskCount: Int
    tasks: [Task]
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

type Query {

}
}

`;

// export typeDefs
module.exports = typeDefs;

