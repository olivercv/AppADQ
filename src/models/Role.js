import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import User from './User';
import Procedure from './Procedure';
const Role = sequelize.define('role',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    roleName: {
        type: Sequelize.TEXT
    },
    level: {
        type: Sequelize.NUMBER
    },
    
},{
    timestamps: false
});

Role.hasMany(User, {foreignKey:'roleId', sourceKey: 'id'});
User.belongsTo(Role, {foreignKey: 'roleId', sourceKey: 'id'});

Role.hasMany(Procedure, {foreignKey:'roleId', sourceKey: 'id'});
Procedure.belongsTo(Role, {foreignKey: 'roleId', sourceKey: 'id'});

export default Role;