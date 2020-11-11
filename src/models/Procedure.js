import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Role from './Role';
const Procedure = sequelize.define('procedure',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    roleId: {
        type: Sequelize.UUID
    },
    internal: {
        type: Sequelize.BOOLEAN
    },
    procedureName: {
        type: Sequelize.TEXT
    },
    order: {
        type: Sequelize.INTEGER
    },
    category: {
        type: Sequelize.TEXT
    },
    formName: {
        type: Sequelize.TEXT
    }

    
},{
    timestamps: false
});

// Procedure.hasMany(Status, {as:'status', foreignKey:'procedureId', sourceKey: 'id'});

export default Procedure;