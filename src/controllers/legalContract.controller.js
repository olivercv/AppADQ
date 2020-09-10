import LegalContract from "../models/LegalContract";
import Document from "../models/Document";

export async function getLegalContracts(req, res) {
  try {
    const legalContracts = await LegalContract.findAll();
    res.json({
      legalContracts: legalContracts,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getLegalContract(req, res) {
  const { id } = req.params;
  try {
    const legalContract = await LegalContract.findOne({
      where: {
        id,
      },
    });
    res.json({
      legalContract: legalContract,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getLCD(req, res) {
  const { id } = req.params;
  try {
    const legalContract = await LegalContract.findOne({
      where: {
        id,
      },
      include: [{
        model: Document,
        as: 'documents',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','type','src','status','createDate']
      }]
    });
    res.json({
      legalContract: legalContract,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createLegalContract(req, res) {
  const { code, description,responsable } = req.body;
  try {
    let newLegalContract = await LegalContract.create(
      {
        code,
        description,
        responsable
      },
      {
        fields: ["code", "description","responsable"],
      }
    );
    if (newLegalContract) {
      return res.json({
        message: "LegalContract Created",
        legalContract: newLegalContract,
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

export async function updateLegalContract(req, res) {
  const { id } = req.params;
  const { code, description, responsable } = req.body;

  try {
    const legalContracts = await LegalContract.findAll({
      attributes: ['id', 'code', 'description','responsable'],
      where: {
        id,
      },
    });
    if (legalContracts.length > 0) {
      legalContracts.forEach(async (legalContract) => {
        await legalContract.update({
          code,
          description,
          responsable
        });
      });
    }

    return res.json({
      message: "LegalContract Updated Succesfully",
      legalContract: legalContracts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteLegalContract(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await LegalContract.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "LegalContract Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
