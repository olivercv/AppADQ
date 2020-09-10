import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'EA_ADQ',
    'userDB',
    'temporal',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false,
        dialectOptions: { 
            useUTC: true, // -->Add this line. for reading from database 
        }, 
        timezone: '-04:00', // -->Add this line. for writing to database 
    }
)