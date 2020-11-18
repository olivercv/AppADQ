import Procedure from "../models/Procedure";
import Status from "../models/Status";
import Role from "../models/Role";

export async function getProcedures(req, res) {
  try {
    const procedures = await Procedure.findAll({
      include: [{
            model: Role,
            as: 'role'
      }],
      order: [['order']],
    });
    // console.log('resultados procedimientos ',res);
    res.json({
      procedures: procedures,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProcedure(req, res) {
  const { id } = req.params;
  try {
    const procedure = await Procedure.findOne({
      where: {
        id,
      },
    });
    res.json({
      procedure: procedure,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}



// export async function getProcedureStatus(req, res) {
//   const { id } = req.params;
//   try {
//     const procedure = await Procedure.findAll({
//       where: {
//         positionId: id,
//       },
//       include: [{
//         model: Status,
//         as: 'status',
//         required: false,
//       // Pass in the Product attributes that you want to retrieve
//         attributes: ['id', 'procedureId','userId','status','dateAt','current','codeRequest', 'formId', 'name']
//       }]
//     });
//     res.json({
//       procedure: procedure,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Something goes wrong",
//       data: {},
//     });
//     console.log(error);
//   }
// }

export async function getProcedureByOrder(req, res) {
  const { order } = req.params;
  try {
    const procedure = await Procedure.findOne({
      where: {
        order,
      },
    });
    res.json({
      procedure: procedure,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getProcedureByCategoryOrder(req, res) {
  const { category, order } = req.params;
  try {
    const procedure = await Procedure.findOne({
      where: {
        category,
        order
      },
    });
    res.json({
      procedure: procedure,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getProcedureStatus(req, res) {
  const { roleId } = req.params;
  try {
    const procedure = await Procedure.findAll({
      where: {
        roleId,
      },
      include: [{
        model: Status,
        as: 'status',
        required: false,
        where: { current: true },
      // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'roleId','userId','status','dateAt','current','codeRequest', 'formId', 'name']
      }]
    });
    res.json({
      procedure: procedure,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createProcedure(req, res) {
  const { roleId, internal, procedureName, order, category, formName } = req.body;
  try {
    let newProcedure = await Procedure.create(
      {
        roleId, internal, procedureName, order, category, formName
        
      },
      {
        fields: ["roleId", "internal", "procedureName", "order", "category", "formName"],
      }
    );
    if (newProcedure) {
      return res.json({
        message: "Procedure Created",
        procedure: newProcedure,
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

export async function updateProcedure(req, res) {
  const { id } = req.params;
  const {roleId, internal, procedureName, order, category, formName} = req.body;

  try {
    const procedures = await Procedure.findAll({
      attributes: ['id','roleId', 'internal', 'procedureName', 'order', 'category', 'formName'],
      where: {
        id,
      },
    });
    if (procedures.length > 0) {
      procedures.forEach(async (procedure) => {
        await procedure.update({
            roleId, internal, procedureName, order, category, formName
            
        });
      });
    }

    return res.json({
      message: "Procedure Updated Succesfully",
      procedure: procedures,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProcedure(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Procedure.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Procedure Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
