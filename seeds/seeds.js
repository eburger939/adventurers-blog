const sequelize = require('../config/connection');
const seedEntries = require('./entryInfo');
const seedUsers = require('./userInfo')



const seedDatabase = async () => {
  await sequelize.sync({ force: true });
await seedUsers();
 await seedEntries();
 

  process.exit(0);
};

seedDatabase();
