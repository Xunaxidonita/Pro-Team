const { User, Task, Project } = require('../models');


const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            const userData = await User.findOne({ _id })
            .select('-__v -password')
            .populate('projects')
            .populate('tasks');

            return userData;
        },

        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('projects')
            .populate('tasks');
        },

        userByUsername: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('projects')
            .populate('tasks');
        },
        
        projsByUser: async (parent, { _id }) => {
            const projectData = await User.findOne({ _id })
            .select('projects')
            .populate('projects')
            .populate('tasks');

            const projects = [...User.projects]
            return projects;
        },

        projects: async () => {
            return Project.find()
            .select('-__v');
        },

        project: async (parent, { _id }) => {
            return Project.findOne({ _id })
            .select('-__v')
            .populate('assignedTo');
        },

        userTasks: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-password')
            .select('tasks')
            .populate('tasks');
        },

        projTasks: async (parent, { _id }) => {
            const taskData = await Project.findOne({ _id })
            .select('-__v')
            .populate('tasks')

            return taskData;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },

        addProject: async (parent, args) => {
            const project = await Project.create(args);

            return project;
        },

        addTask: async (parent, args) => {
            const newTask = await Task.create(args)
            .then(Project.findOneAndUpdate(
                { _id: projectId },
                { $push: { tasks:  newTask } },
                { new: true }
            ));

            return newTask;
        },

        updateTask: async (parent, args) => {
            const updatedTask = await Task.findOneAndUpdate(
                { _id: _id },
                { taskName, taskText, assignedTo, dueDate },
                { new: true }
            );

            return updatedTask;
        },

        updateProject: async (parent, args) => {
            const updatedProject = await Project.findOneAndUpdate(
                { _id },
                { projectName, assignedTo, taskCount, taskIds, dueDate},
                { new: true }
            );

            return updatedProject;
        },
    }
};


// GET (Queries):

// get my user info -check
// get all users -check
// get single user by username (or by id)* - check
// get all users for project - check
// get all projects for a user - check
// get project by project id (should use id instead of name 
// in case multiple projects have same name) -check
// get all tasks for a user --check
// get all tasks for a project --

// POST, PUT, DELETE (Mutations):

// POST: create new user
// POST: create new project
// POST: create new task
// PUT: update project to assign user to a task
// DELETE (or PUT?): delete user from project
// DELETE (or PUT?): delete user from task
// DELETE: delete user altogether

// Not sure what to do with conversations

// * Should make username unique, otherwise need get user by id instead
// of get user by username

module.exports = resolvers;