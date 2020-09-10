import jwt from 'jsonwebtoken';
import { cfg } from '../config/config';



export function ensureAuth(req, res, next) {
    // console.log(req.headers.authorization);
  
    if(!req.headers.authorization){
        res.status(401).json({
            message: 'Solicitud desautorizada'
        });
    }
    const token = req.headers.authorization.split(' ')[1];

    if(token === 'null'){
        res.status(401).json({
            message: 'Solicitud desautorizada'
        });
    }


    try{
		const payload = jwt.verify(token, cfg.key);
        
        console.log('Difference:', payload.exp - payload.iat);

		if ((payload.exp - payload.iat) <= 0) {
			return res.status(401).send({message:'El Token ha expirado'});

        }
        
        req.user = payload;
        next();

	}catch(err){
		console.error(err);
		return res.status(404).send({message:'Token no válido'});
	}

    
}