import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';
const BudgetCertification = sequelize.define('budgetCertification',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    reserveCode: {
        type: Sequelize.TEXT
    },
    
},{
    timestamps: false
});

BudgetCertification.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(BudgetCertification, {foreignKey: 'formId', sourceKey: 'id'});

export default BudgetCertification;