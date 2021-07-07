/* Do we need a get all users query? I can't think of a situation in which we would need one */

import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query projsByUser(projectId: ID) {
    projects(username: $username) {
      _id
      projectName
      assignedTo
      dueDate
      username
      image
      tasks {
        taskName
        dueDate
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
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
