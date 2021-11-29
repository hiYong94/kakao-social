module.exports = {
  type: 'mysql',
  entities: [process.env.ENTITY_PATH],
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  synchronize: true,
};
