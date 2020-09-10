import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Position from './Position';

const Office = sequelize.define('office',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    companyId: {
        type: Sequelize.UUID
    },
    supOfficeId: {
        type: Sequelize.UUID
    }
},{
    timestamps: false
});
Office.hasMany(Position, {foreignKey:'officeId', sourceKey: 'id'});
Position.belongsTo(Office, {foreignKey: 'officeId', sourceKey: 'id'});

export default Office;