import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import User from './User';

const ConfirmForm = sequelize.define('confirmForm',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    userId: {
        type: Sequelize.UUID
    },
    codeRequest: {
        type: Sequelize.UUID
    },
    dateAt: {
        type: Sequelize.DATE
    },
    observation: {
        type: Sequelize.TEXT
    },
    refuse: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps: false
});
User.hasMany(ConfirmForm, {foreignKey:'userId', sourceKey: 'id'});
ConfirmForm.belongsTo(User, {foreignKey: 'userId', sourceKey: 'id'});

export default ConfirmForm;