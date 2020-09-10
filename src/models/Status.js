import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import AcquisitionRequest from './AcquisitionRequest';
import TechnicalReport from './TechnicalReport';
import BudgetCertification from './BudgetCertification';
import Procedure from './Procedure';

const Status = sequelize.define('status',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    procedureId: {
        type: Sequelize.UUID
    },
    userId: {
        type: Sequelize.UUID
    },
    formId: {
        type: Sequelize.UUID
    },
    status: {
        type: Sequelize.TEXT
    },
    dateAt: {
        type: Sequelize.DATE
    },
    current: {
        type: Sequelize.BOOLEAN
    },
    codeRequest: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },

},{
    timestamps: false,
    freezeTableName: true
});


AcquisitionRequest.hasMany(Status, {foreignKey:'formId', sourceKey: 'id'});
Status.belongsTo(AcquisitionRequest, {foreignKey: 'formId', sourceKey: 'id'});

TechnicalReport.hasMany(Status, {foreignKey:'formId', sourceKey: 'id'});
Status.belongsTo(TechnicalReport, {foreignKey: 'formId', sourceKey: 'id'});

BudgetCertification.hasMany(Status, {foreignKey:'formId', sourceKey: 'id'});
Status.belongsTo(BudgetCertification, {foreignKey: 'formId', sourceKey: 'id'});

Procedure.hasMany(Status, {as:'status', foreignKey:'procedureId', sourceKey: 'id'});
Status.belongsTo(Procedure, {foreignKey: 'procedureId', sourceKey: 'id'});

export default Status;