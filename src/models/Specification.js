import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';
const Specification = sequelize.define('specification',{
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

Specification.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(Specification, {foreignKey: 'formId', sourceKey: 'id'});

export default Specification;