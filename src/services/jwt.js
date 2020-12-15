import jwt from 'jsonwebtoken';
import { cfg } from '../config/config'


export function createToken(user) {

    var payload = {
        _id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        rol: user.rol,
        positionId: user.positionId
    }
    return jwt.sign(payload, cfg.key, { expiresIn: '6h' });

}

 export function resetToken(user) {

    var payload = {
        _id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        rol: user.rol,
        positionId: user.positionId
    }
    return jwt.sign(payload, cfg.key, { expiresIn: '20m' });

} 