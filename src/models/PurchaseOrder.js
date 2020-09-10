import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Document from './Document';

const PurchaseOrder = sequelize.define('purchaseOrder',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    code: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    

},{
    timestamps: false
});
PurchaseOrder.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(PurchaseOrder, {foreignKey: 'formId', sourceKey: 'id'});

export default PurchaseOrder;