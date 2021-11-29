import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' });

export default {
  mysql: {
    host: process.env.DB_HOST || '127.0.0.1',
    db: process.env.DB_DATABASE || 'kakao',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 3309,
  },
};
