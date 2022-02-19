require('dotenv').config()

// module.exports = {
//   "type":"postgres",
//   "url":"postgres://admin:1234@localhost:5432/local",
//   "logging": false,
//     "entities": [
//        "src/entities/**/*.ts"
//     ],
//     "migrations": [
//        "src/migration/**/*.ts"
//     ],
//     "subscribers": [
//        "src/subscriber/**/*.ts"
//     ],
//     "cli": {
//        "entitiesDir": "src/entities",
//        "migrationsDir": "src/migration",
//        "subscribersDir": "src/subscriber"
//     }
// }
const productionEnv = {
    type: process.env.CONNECTION,
    host: process.env.HOST,
    port: process.env.PORT_POSTGRES,
    database: process.env.DATABASE,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    entities: ["./dist/src/entities/*/.js"],
    migrations: ["./dist/src/migration/*.js"],
    cli: {
      migrationsDir: "./dist/src/migration",
    },
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    logging: true,
  };

  const developmentEnv = {
    type: process.env.CONNECTION,
    host: process.env.HOST,
    port: process.env.PORT_POSTGRES,
    database: process.env.DATABASE,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    entities: ["./src/entities/*/.ts"],
    migrations: ["./src/migration/*.ts"],
    cli: {
      migrationsDir: "./src/migration",
    },
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    logging: true,
  };


module.exports = developmentEnv