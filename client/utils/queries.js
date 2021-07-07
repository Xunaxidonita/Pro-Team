/* Do we need a get all users query? I can't think of a situation in which we would need one */

import { gql } from "@apollo/client";

export const QUERY_PROJECTS_BY_USER = gql`
  query projsByUser($username:String) {
    projects(username: $username) {
      _id
      projectName
      assignedTo
      dueDate
      username
      tasks {
        taskName
        dueDate
      }
    }
  }
`;

export const PROJECT_BY_PROJECT_ID = gql`
  query project($id: ID!) {
    projects(_id: $id) {
      _id
      projectName
      assignedTo
      dueDate
      username
      tasks {
        taskName
        dueDate
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      username
      email
      projectCount
      taskCount
      projects {
        _id
        projectName
        assignedTo
        dueDate
        tasks {
          _id
          taskName
          assignedTo
          dueDate
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      projectCount
      taskCount
      projects {
        _id
        projectName
        assignedTo
        dueDate
        tasks {
          _id
          taskName
          assignedTo
          dueDate
        }
      }
    }
  }
`;
