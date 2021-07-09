<<<<<<< HEAD
import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
=======
/* Do we need a get all users query? I can't think of a situation in which we would need one */
import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query projects($username: String) {
    projects(username: $username) {
      _id
      projectName
      assignedTo {
        _id
      }
      dueDate
      tasks {
        taskName
        dueDate
      }
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
    }
  }
`;

<<<<<<< HEAD
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
=======
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
    }
  }
`;

<<<<<<< HEAD
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
=======
export const PROJECT = gql`
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
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
    }
  }
`;

<<<<<<< HEAD
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
=======
export const USER_TASKS = gql`
  query tasks($username: String) {
    tasks(projectName: $projectName) {
      taskName
      taskText
      dueDate
    }
  }
`;

export const PROJECT_TASKS = gql`
  query projTasks($projectId: ID) {
    tasks(_id: $id) {
      taskName
      taskText
      assignedTo
      dueDate
    }
  }
`;

export const QUERY_ME = gql`
  query me($token: String) {
    me(token: $token) {
      username
      email
      projectCount
      taskCount
      projects {
        _id
        projectName
        dueDate
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
      }
    }
  }
`;

<<<<<<< HEAD
export const QUERY_CHECKOUT = gql `
query getCheckout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
=======
export const QUERY_USER = gql`
  query user($username: String!) {
    userByUsername(username: $username) {
      _id
      username
      email
      projectCount
      taskCount
      projects {
        _id
        projectName
        dueDate
        tasks {
          _id
          taskName
          assignedTo {
            _id
          }
          dueDate
        }
      }
    }
  }
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
`;
