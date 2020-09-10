import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Office from './Office';

const Company = sequelize.define('company',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    direction: {
        type: Sequelize.TEXT
    },
    nit: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});

Company.hasMany(Office, {foreignKey:'companyId', sourceKey: 'id'});
Office.belongsTo(Company, {foreignKey: 'companyId', sourceKey: 'id'});
export default Company;