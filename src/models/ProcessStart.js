import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';

const ProcessStart = sequelize.define('processStart',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    startDate: {
        type: Sequelize.DATE
    },
    endDate: {
        type: Sequelize.DATE
    },
    

},{
    timestamps: false
});
ProcessStart.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(ProcessStart, {foreignKey: 'formId', sourceKey: 'id'});

export default ProcessStart;