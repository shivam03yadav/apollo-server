import { config } from 'dotenv';
config();
const configuration = Object.freeze({
  port: process.env.PORT,
});

export default configuration;
