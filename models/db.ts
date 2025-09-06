import { Sequelize } from 'sequelize-typescript';
import { Game } from './Game';
import { House } from './House';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.MYSQL_ROOT_HOST || '127.0.0.1',
    username: process.env.MYSQL_USER || 'appuser',
    password: process.env.MYSQL_ROOT_PASSWORD || 'apppass',
    database: process.env.MYSQL_DATABASE || 'appdb',
    models: [
        Game,
        House,
    ],
});
