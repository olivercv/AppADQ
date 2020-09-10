import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Product = sequelize.define('product',{
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    quantity: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.DECIMAL
    },
    requestId: {
        type: Sequelize.UUID
    }

},{
    timestamps: false
});


export default Product;