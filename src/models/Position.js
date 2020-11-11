import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import User from './User';

// import Office from './Office';

const Position = sequelize.define('position',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    officeId: {
        type: Sequelize.UUID
    },
    name: {
        type: Sequelize.TEXT
    },
    active: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps: false
});

// Office.hasMany(Position, {foreignKey:'officeId', sourceKey: 'id'});
// Position.belongsTo(Office, {foreignKey: 'officeId', sourceKey: 'id'});

Position.hasMany(User, {foreignKey:'positionId', sourceKey: 'id'});
User.belongsTo(Position, {foreignKey: 'positionId', sourceKey: 'id'});



export default Position;