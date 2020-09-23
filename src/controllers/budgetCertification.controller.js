import BudgetCertification from "../models/BudgetCertification";
import Document from "../models/Document";

export async function getBudgetCertifications(req, res) {
  try {
    const budgetCertifications = await BudgetCertification.findAll();
    res.json({
      budgetCertifications: budgetCertifications,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getBudgetCertification(req, res) {
  const { id } = req.params;
  try {
    const budgetCertification = await BudgetCertification.findOne({
      where: {
        id,
      },
    });
    res.json({
      budgetCertification: budgetCertification,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getBC(req, res) {
  const { id } = req.params;
  try {
    const budgetCertification = await BudgetCertification.findOne({
      where: {
        id,
      },
      include: [{
        model: Document,
        as: 'documents',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','type','src','status','createDate','fileName']
      }]
    });
    res.json({
      budgetCertification: budgetCertification,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createBudgetCertification(req, res) {
  const { reserveCode } = req.body;
  try {
    let newBudgetCertification = await BudgetCertification.create(
      {
        reserveCode, 
        
      },
      {
        fields: ["reserveCode"],
      }
    );
    if (newBudgetCertification) {
      return res.json({
        message: "BudgetCertification Created",
        budgetCertification: newBudgetCertification,
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

export async function updateBudgetCertification(req, res) {
  const { id } = req.params;
  const {reserveCode} = req.body;

  try {
    const budgetCertifications = await BudgetCertification.findAll({
      attributes: ['id','reserveCode'],
      where: {
        id,
      },
    });
    if (budgetCertifications.length > 0) {
      budgetCertifications.forEach(async (budgetCertification) => {
        await budgetCertification.update({
            reserveCode, 
            
        });
      });
    }

    return res.json({
      message: "BudgetCertification Updated Succesfully",
      budgetCertification: budgetCertifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteBudgetCertification(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await BudgetCertification.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "BudgetCertification Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
