import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Product from './Product';
import AdmCondition from './AdmCondition';
import Document from './Document';

const AcquisitionRequest = sequelize.define('acquisitionRequest',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    code: {
        type: Sequelize.TEXT
    },
    version: {
        type: Sequelize.TEXT
    },
    validity: {
        type: Sequelize.DATE
    },
    numRequest: {
        type: Sequelize.TEXT
    },
    requestDate: {
        type: Sequelize.DATE
    },
    nPac: {
        type: Sequelize.TEXT
    },
    place: {
        type: Sequelize.TEXT
    },
    coin: {
        type: Sequelize.TEXT
    },
    title: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.TEXT
    },
    selectionMethod: {
        type: Sequelize.TEXT
    },
    warranty: {
        type: Sequelize.TEXT
    }

},{
    timestamps: false
});
AcquisitionRequest.hasMany(Product, {foreignKey:'requestId', sourceKey: 'id'});
Product.belongsTo(AcquisitionRequest, {foreignKey: 'requestId', sourceKey: 'id'});

AcquisitionRequest.hasMany(AdmCondition, {foreignKey:'requestId', sourceKey: 'id'});
AdmCondition.belongsTo(AcquisitionRequest, {foreignKey: 'requestId', sourceKey: 'id'});

AcquisitionRequest.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(AcquisitionRequest, {foreignKey: 'formId', sourceKey: 'id'});


export default AcquisitionRequest;