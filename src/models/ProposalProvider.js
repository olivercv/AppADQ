import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';

const ProposalProvider = sequelize.define('proposalProvider',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    economicProposal: {
        type: Sequelize.NUMBER
    },
    date: {
        type: Sequelize.DATE
    },
    formId: {
        type: Sequelize.UUID
    
    },

},{
    timestamps: false
});
ProposalProvider.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(ProposalProvider, {foreignKey: 'formId', sourceKey: 'id'});

export default ProposalProvider;