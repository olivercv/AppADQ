import Role from "../models/Role";

export async function getRoles(req, res) {
  try {
    const roles = await Role.findAll();
    res.json({
      roles: roles,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getRole(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      where: {
        id,
      },
    });
    res.json({
      role: role,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}


export async function createRole(req, res) {
  const { roleName, level } = req.body;
  try {
    let newRole = await Role.create(
      {
        roleName,
        level, 
        
      },
      {
        fields: ["roleName", "level"],
      }
    );
    if (newRole) {
      return res.json({
        message: "Role Created",
        role: newRole,
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

export async function updateRole(req, res) {
  const { id } = req.params;
  const {roleName, level} = req.body;

  try {
    const roles = await Role.findAll({
      attributes: ['id','roleName', 'level'],
      where: {
        id,
      },
    });
    if (roles.length > 0) {
      roles.forEach(async (role) => {
        await role.update({
            roleName,
            level, 
            
        });
      });
    }

    return res.json({
      message: "Role Updated Succesfully",
      role: roles,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteRole(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Role.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Role Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
