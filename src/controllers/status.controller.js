import Status from "../models/Status";
import Procedure from "../models/Procedure"
import AcquisitionRequest from "../models/AcquisitionRequest"
import BudgetCertification from "../models/BudgetCertification";
const { Op } = require('sequelize');


export async function getStatuss(req, res) {
  try {
    const statuss = await Status.findAll({
      include: [
        {
          model: Procedure,
          as: 'procedure',
        },{
          model: AcquisitionRequest,
          as: 'acquisitionRequest',
        }
      ]

    });
    res.json({
      status: statuss,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getStatusByRequest(req, res) {
  const { codeRequest } = req.params;
  try {
    const statuss = await Status.findAll({
      where: {
        codeRequest
      },
      raw: true,
      order: [['dateAt']],
      include: [
        {
          model: Procedure,
          as: 'procedure', 
        }
      ]

    });
    res.json({
      status: statuss,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getStatusByRequestForm(req, res) {
  const { codeRequest } = req.params;
  try {
    const statuss = await Status.findAll({
      where: {
        codeRequest,
        status: 'enviado'
      }
    });
    res.json({
      status: statuss,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getStatusByRequestAndProcedure(req, res) {
  const { codeRequest, procedureId } = req.params;
  try {
    const statuss = await Status.findAll({
      where: {
        codeRequest,
        procedureId
      }
    });
    res.json({
      status: statuss,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentStatus(req, res) {
  const { codeRequest } = req.params;
  // console.log('paramtros', req.params);
  const current = true;
  try {
    const status = await Status.findOne({
      where: {
        codeRequest,
        current: current
      },
      include: [{
        model: Procedure,
        as: 'procedure',
        required: false,
        attributes: ['id', 'positionId','procedureName','order']
      },
      {
        model: AcquisitionRequest,
        as: 'acquisitionRequest',
      }
    ]
    });
    res.json({
      status: status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

// status por positon Id
export async function getStatusPositionId(req, res) {
  const { id, procedureId, userId } = req.params;
  
  try {
    const status = await Status.findAll({
      where: {
        // current: true,
        [Op.or]: [
          { userId: userId },
          { current: true }
        ]
      },
      include: [{
        model: Procedure,
        where: {
          // positionId: id
          [Op.or]: [
            { positionId : id },
            { positionId : null }
          ]
        }
      },
      {
        model: AcquisitionRequest,
        as: 'acquisitionRequest',
      }
    ]
      
    });
    res.json({
      status: status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong" + error,
      data: {},
    });
    console.log(error);
  }
}

// status por userId
export async function getStatusByUserId(req, res) {
  const { userId, startDate, endDate } = req.body;
  console.log('ingresó ', req.body);
  
  try {
    const status = await Status.findAll({
      where: {
        userId,
        dateAt: {
          [Op.between]: [startDate, endDate],
        },
        current: false
      },
      include: [
        {
          model: Procedure,
          as: 'procedure',
        },
        {
          model: AcquisitionRequest,
          as: 'acquisitionRequest',
        }
      ],
      logging: console.log,
      raw: true,
      order: [['dateAt', 'ASC']],
      
    });
    res.json({
      status: status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong" + error,
      data: {},
    });
    console.log(error);
  }
}

export async function getStatus(req, res) {
  const { id } = req.params;
  try {
    const status = await Status.findOne({
      where: {
        id,
      },
      include: [{
        model: Procedure,
        as: 'procedure',
      },
      {
        model: AcquisitionRequest,
        as: 'acquisitionRequest',
      }
    ]
      
    });
    res.json({
      status: status,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}



export async function createStatus(req, res) {
  const { procedureId, userId, formId, status, dateAt, current, codeRequest, name } = req.body;
  try {
    let newStatus = await Status.create(
      {
        procedureId,
        userId,
        formId, status, dateAt, current, codeRequest, name,
        
      },
      {
        fields: ["procedureId", "userId", "formId", "status", "dateAt", "current", "codeRequest", "name" ],
      }
    );
    if (newStatus) {
      return res.json({
        message: "Status Created",
        status: newStatus,
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

export async function updateStatus(req, res) {
  const { id } = req.params;
  const {procedureId, userId, formId, status, dateAt, current, codeRequest, name} = req.body;

  try {
    const statuss = await Status.findAll({
      attributes: ['id','procedureId', 'userId', 'formId', 'status', 'dateAt', 'current', 'codeRequest', 'name'],
      where: {
        id,
      },
    });
    if (statuss.length > 0) {
      statuss.forEach(async (status1) => {
        await status1.update({
            procedureId,
        userId,
        formId, 
        status, 
        dateAt, 
        current, 
        codeRequest,
        name,
            
        });
      });
    }

    return res.json({
      message: "Status Updated Succesfully",
      status: statuss[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteStatus(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Status.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Status Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
