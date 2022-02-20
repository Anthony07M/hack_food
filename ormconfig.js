require('dotenv').config()

module.exports = {
  type: process.env.CONNECTION,
  host: process.env.HOST,
  port: process.env.DATABASE,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
  cli: {
    entitiesDir: "dist/entities",
    migrationsDir: "dist/migration",
    subscribersDir: "dist/subscriber",
  },
};
