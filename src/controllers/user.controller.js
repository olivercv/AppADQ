import User from "../models/User";
import bcrypt from 'bcrypt-node';
import { createToken } from  '../services/jwt';
import Position from "../models/Position"
import Office from "../models/Office"
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
        }]
        
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
  const { name, lastname, email, password, role, positionId } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
        lastname,
        email,
        password,
        role,
        positionId,
      },
      {
        fields: ["name", "lastname", "email", "password", "role", "positionId"],
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

  const { name, lastname, email, password, role, positionId } = req.body;

  try {
    const users = await User.findAll({
      attributes: [
        "id",
        "name",
        "lastname",
        "email",
        "password",
        "role",
        "positionId",
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
          role,
          positionId,
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
  const { name, lastname, email, password, role, positionId } = req.body;
  var hash = bcrypt.hashSync(password);
  try {
    let newUser = await User.create(
      {
        name,
        lastname,
        email,
        password: hash,
        role,
        positionId,
      },
      {
        fields: ["name", "lastname", "email", "password", "role", "positionId"],
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

