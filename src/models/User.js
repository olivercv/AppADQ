import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const User = sequelize.define('user',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    lastname: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    access: {
        type: Sequelize.TEXT
    },
    roleId: {
        type: Sequelize.UUID
    },
    positionId: {
        type: Sequelize.UUID
    },
    resetLink: {
        type: Sequelize.TEXT
    },

},{
    timestamps: false
});


export default User;