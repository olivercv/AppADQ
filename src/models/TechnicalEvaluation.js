import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Document from './Document';

const TechnicalEvaluation = sequelize.define('technicalEvaluation',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    to: {
        type: Sequelize.TEXT
    },
    via: {
        type: Sequelize.TEXT
    },
    whose: {
        type: Sequelize.TEXT
    },
    number: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATE
    }

},{
    timestamps: false
});
TechnicalEvaluation.hasMany(Document, {foreignKey:'formId', sourceKey: 'id'});
Document.belongsTo(TechnicalEvaluation, {foreignKey: 'formId', sourceKey: 'id'});

export default TechnicalEvaluation;