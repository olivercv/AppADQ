import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Document = sequelize.define('document',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    type: {
        type: Sequelize.TEXT
    },
    formId: {
        type: Sequelize.UUID
    },
    src: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.TEXT
    },
    createDate: {
        type: Sequelize.DATE
    },
    fileName: {
        type: Sequelize.TEXT
    }

},{
    timestamps: false
});


export default Document;