import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';

const LegalContract = sequelize.define('legalContract',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT
    },
    code: {
        type: Sequelize.TEXT
    },
    responsable: {
        type: Sequelize.TEXT
    },
    
    

},{
    timestamps: false
});
LegalContract.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(LegalContract, {foreignKey: 'formId', sourceKey: 'id'});

export default LegalContract;