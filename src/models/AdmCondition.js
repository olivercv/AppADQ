import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const AdmCondition = sequelize.define('admCondition',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    priority: {
        type: Sequelize.TEXT
    },
    type: {
        type: Sequelize.TEXT
    },
    warranty: {
        type: Sequelize.TEXT
    },
    deliveryTime: {
        type: Sequelize.TEXT
    },
    placeDelivery: {
        type: Sequelize.TEXT
    },
    posibleProviders: {
        type: Sequelize.TEXT
    },
    requestId: {
        type: Sequelize.UUID
    }
},{
    timestamps: false
});


export default AdmCondition;