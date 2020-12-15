import User from "../models/User";
import bcrypt from 'bcrypt-node';
import { createToken } from  '../services/jwt';
import { resetToken } from  '../services/jwt';
import jwt from 'jsonwebtoken';
import { cfg } from '../config/config'
import Position from "../models/Position"
import Office from "../models/Office"
import Role from "../models/Role";
// const nodemailer = require("nodemailer");
export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Position,
          as: 'position',
          include: [{
            model: Office,
            as: 'office'
          }]
        },{
          model: Role,
            as: 'role',
            required: false,
            attributes: ['id', 'roleName','level']
          }
      ]
    });
    res.json({
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(req, res) {
 
  try {
    const  {id}  = req.params;
    const user = await User.findOne(
      {
        where: {
          id,
        },
        include: [{
          model: Position,
          as: 'position',
          required: false,
            include: [{
              model: Office,
              as: 'office'
            }]
        },{
          model: Role,
            as: 'role',
            required: false,
            attributes: ['id', 'roleName','level']
          } ]
        
      }
    );
    res.json({
      data: user,
      id: id
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createUser(req, res) {
  const { name, lastname, email, password, access, roleId, positionId, resetLink } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
        lastname,
        email,
        password,
        access,
        roleId,
        positionId,
        resetLink
      },
      {
        fields: ["name", "lastname", "email", "password", "access", "roleId", "positionId","resetLink"],
      }
    );
    if (newUser) {
      return res.json({
        message: "User Created",
        data: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  console.log(req.params);

  const { name, lastname, email, password, access, roleId, positionId, resetLink } = req.body;

  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "name",
        "lastname",
        "email",
        "password",
        "access",
        "roleId",
        "positionId",
        "resetLink",
      ],
      where: {
        id,
      },
    });
    if (users.length > 0) {
      users.forEach(async (user) => {
        if(user.password !== password) {
          password = bcrypt.hashSync(password);
        }
        await user.update({
          name,
          lastname,
          email,
          password,
          access,
          roleId,
          positionId,
          resetLink,
        });
      });
    }

    return res.json({
      message: "User Updated Succesfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await User.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "User Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}

export async function register(req, res){
  const { name, lastname, email, password, access, roleId, positionId } = req.body;
  var hash = bcrypt.hashSync(password);
  try {
    let newUser = await User.create(
      {
        name,
        lastname,
        email,
        password: hash,
        access,
        roleId,
        positionId,
        resetLink,
      },
      {
        fields: ["name", "lastname", "email", "password", "access", "roleId", "positionId","resetLink"],
      }
    );
    if (newUser) {
      const token = createToken(newUser);
      res.status(200).json({
        "user" : newUser, 
        "Bearer" : token
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.error(error);
  }

  
}

export async function signin(req, res){ 
  const  { email, password } = req.body;
  const user = await User.findOne(
    {
      where: {
        email
      },
    }
  );
  
  if(!user){
    res.status(401).json({
      message: 'El email ingresado no existe'
    });
  }

  bcrypt.compare(password, user.password, function(err, check){
    if (check) {
      //devolver datos del usuario logueado
      user.password = '';
      const token = createToken(user);
        res.status(200).json({
          "user" : user, 
          "Bearer" : token
        })
    }else{
      res.status(404).send({message:'El usuario no ha podido loguearse'});	
    }
    if ( err ){
      res.status(500).send('error', err);
    }
  });
  
  
    
}

export async function updatePassword(req, res) {
  const { id } = req.params;
  const { password } = req.body;
  var hash = bcrypt.hashSync(password);

  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "name",
        "lastname",
        "email",
        "password",
        "access",
        "roleId",
        "positionId",
        "resetLink",
      ],
      where: {
        id,
      },
    });
    if (users.length > 0) {
      users.forEach(async (user) => {
        await user.update({
          password: hash,
        });
      });
    }

    return res.json({
      message: "User Updated Succesfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}


 export async function resetEmail(req, res) {
  const {email} = req.params;
  console.log(email);
  try {
    const user = await User.findOne(
      {
        where: {
          email
        },
      }
    );
    console.log(user);
    const token = resetToken(user);
    user.update({resetLink:token});
    sendEmail(email,token,res);
    return res.json({
      message: "User Updated Succesfully",
      data: user,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      error,
      data: {},
    });
    console.error(error);
  }
  
} 

async function sendEmail(email,token, res){

  //let testAccount = await nodemailer.createTestAccount();

  // var transporter = nodemailer.createTransport({
   /*  host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "velva.stokes62@ethereal.email", // generated ethereal user
      pass: "Y5bApMGaD1nSDMzzHR", // generated ethereal password
    }, */

    /* tls:{
      rejectUnauthorized: false
    } */
  //   service: "Yahoo",
  //   secure: true,
  //   auth: {
  //     user: "carlos05_ale@yahoo.es",
  //     pass: "ykzsibrryadkyekd"  
  //   },
  // });

   // send mail with defined transport object
   var mailOptions = {
    from: "carlos05_ale@yahoo.es", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Este es un mensaje de pprueba para mandar emails?", // plain text body
    html: `<b>esta funcionando esta prueba?</b><h1>${token}</h1>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      return res.status(500).json(
        {error: error});
    }else{
      console.log('mensaje enviado');
      return res.status(200).json({
        message: "Mensaje enviado",
        
      });
    }
  })

}

export async function resetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;
  
  if(token){
    jwt.verify(token, cfg.key,async function(error, decodedData){
      if(error){
        return res.status(401).json({
          message: 'Solicitud desautorizada'
      });
      }      
        try {
          const user = await User.findOne(
            {
              where: {
                resetLink:token
              },
            }
          );
          console.log(user);
          var hash = bcrypt.hashSync(password);
          await user.update({
                    password: hash,
          });
          return res.json({
            message: "User Updated Succesfully",
            data: user,
          });
        } catch (error) {
          
          res.status(500).json({
            message: "Something goes wrong",
            error,
            data: {},
          });
        }
      })
  }

}
