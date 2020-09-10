import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
// import Status from './Status';
const Procedure = sequelize.define('procedure',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    positionId: {
        type: Sequelize.UUID
    },
    procedureName: {
        type: Sequelize.TEXT
    },
    order: {
        type: Sequelize.INTEGER
    },

    
},{
    timestamps: false
});

// Procedure.hasMany(Status, {as:'status', foreignKey:'procedureId', sourceKey: 'id'});

export default Procedure;