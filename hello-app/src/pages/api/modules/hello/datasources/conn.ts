import { Sequelize } from 'sequelize-typescript';
import { Hello } from 'api/modules/hello/models/hello';

const conf = {
  "host": "localhost",
  "port": 5432,
  "user": "hello",
  "password": "123password",
  "database": "hellodb"
};

const sequelize = new Sequelize({
  database: 'hellodb',
  dialect: 'postgres',
  username: 'hello',
  password: '123password',
  models: ['../models'], // or [Player, Team],
});

console.log("Creating connection");
sequelize.addModels([Hello]);

export { sequelize };
