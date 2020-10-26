import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';
const OpeningAct = sequelize.define('openingAct',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    codeRequest: {
        type: Sequelize.UUID
    },
    
},{
    timestamps: false
});

OpeningAct.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(OpeningAct, {foreignKey: 'formId', sourceKey: 'id'});

export default OpeningAct;