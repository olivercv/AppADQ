import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Document from './Document';

const TechnicalReport = sequelize.define('technicalReport',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    background: {
        type: Sequelize.TEXT
    },
    acquisitionObjetive: {
        type: Sequelize.TEXT
    },
    testInspection: {
        type: Sequelize.TEXT
    },
    supportDocument: {
        type: Sequelize.TEXT
    },
    technicalQuarantee: {
        type: Sequelize.TEXT
    },
    technicalService: {
        type: Sequelize.TEXT
    },
    placeDelivery: {
        type: Sequelize.TEXT
    },
    deliveryTerm: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.TEXT
    }

},{
    timestamps: false
});
TechnicalReport.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(TechnicalReport, {foreignKey: 'formId', sourceKey: 'id'});

export default TechnicalReport;