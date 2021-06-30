const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    projectCount: Int
    taskCount: Int
    projects: [Project]
    tasks: [Task]

    
}

`;

// export typeDefs
module.exports = typeDefs;

