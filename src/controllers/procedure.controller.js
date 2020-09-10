import Procedure from "../models/Procedure";
import Status from "../models/Status";

export async function getProcedures(req, res) {
  try {
    const procedures = await Procedure.findAll();
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

export async function getProcedureStatus(req, res) {
  const { positionId } = req.params;
  try {
    const procedure = await Procedure.findAll({
      where: {
        positionId,
      },
      include: [{
        model: Status,
        as: 'status',
        required: false,
        where: { current: true },
      // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'procedureId','userId','status','dateAt','current','codeRequest', 'formId', 'name']
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
  const { positionId, procedureName, order } = req.body;
  try {
    let newProcedure = await Procedure.create(
      {
        positionId, procedureName, order, 
        
      },
      {
        fields: ["positionId", "procedureName", "order"],
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
  const {positionId, procedureName, order} = req.body;

  try {
    const procedures = await Procedure.findAll({
      attributes: ['id','positionId', 'procedureName', 'order'],
      where: {
        id,
      },
    });
    if (procedures.length > 0) {
      procedures.forEach(async (procedure) => {
        await procedure.update({
            positionId, procedureName, order, 
            
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
