import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import ProposalProvider from './ProposalProvider';


const ProposalEvaluation = sequelize.define('proposalEvaluation',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    code: {
        type: Sequelize.TEXT
    },
   

},{
    timestamps: false
});

ProposalEvaluation.hasMany(ProposalProvider, {foreignKey:'formId', sourceKey: 'id'});
ProposalProvider.belongsTo(ProposalEvaluation, {foreignKey: 'formId', sourceKey: 'id'});
export default ProposalEvaluation;