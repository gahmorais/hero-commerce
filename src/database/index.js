const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL_DEV, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
