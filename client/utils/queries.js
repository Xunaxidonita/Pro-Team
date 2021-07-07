// add user - have
// add project - have
// add task - have
// update project
// update task
// delete user
// delete project
// delete task


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

export const QUERY_USER = gql`
  {
    user {
      username
      email
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

export const QUERY_CHECKOUT = gql `
query getCheckout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;
