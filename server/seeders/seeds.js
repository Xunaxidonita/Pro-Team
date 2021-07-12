const faker = require('faker');

const db = require('../config/connection');
const { Project, User } = require('../models');

db.once('open', async () => {
    await Project.deleteMany({});
    await User.deleteMany({});

    const createdUsers = [];

    for (let i = 0; i < 100; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const createdUser = await User.create({ username, email, password });
        
        createdUsers.push(createdUser);

    }

    

    let createdProjects = [];
    for (let i = 0; i < 100; i++) {
        const projectName = faker.lorem.words(Math.floor(Math.random() * 5) + 1);
        const description = faker.lorem.words(Math.floor(Math.random() * 50) + 1);
        const dueDate = faker.date.future();
        const members = [];
        const status = Math.round(Math.random()) === 1 ? 'In Progress' : 'Completed';

        const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
        const { _id: userId } = createdUsers[randomUserIndex];
        for (let j = 0; j < (Math.round(Math.random() * 5)); j++) {
            let newMember = createdUsers[Math.floor(Math.random() * createdUsers.length)]
            members.push(newMember._id);
        };

        const createdProject = await Project.create({ projectName, description, dueDate, members, status });

        const updatedUser = User.findByIdAndUpdate(
            { _id: userId },
            {$push: { projects: createdProject._id } },
            { new: true }
        );

        createdProjects.push(createdProject);
    };

    console.log('Finished seeding');
    process.exit(0);
});