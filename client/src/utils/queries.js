import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            _id
            username
            email
        }
    }
`

export const QUERY_PROJECT = gql`
    {
        project {
            _id
            projectName
            assignedTo {
                user {
                    _id
                    username
                }
            }
            taskCount
            tasks {
                task {
                    _id
                    taskName
                    dueDate
                }
            }
            dueDate
        }
    }
`