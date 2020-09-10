import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';

const ProposalComparison = sequelize.define('proposalComparison',{
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
    provider: {
        type: Sequelize.TEXT
    },
    
    

},{
    timestamps: false
});
ProposalComparison.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(ProposalComparison, {foreignKey: 'formId', sourceKey: 'id'});

export default ProposalComparison;