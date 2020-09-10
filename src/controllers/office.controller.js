import Office from "../models/Office";
import Position from "../models/Position";

export async function getOffices(req, res) {
  try {
    const offices = await Office.findAll();
    res.json({
      offices: offices,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getOffice(req, res) {
  const { id } = req.params;
  try {
    const office = await Office.findOne(
      {
        where: {
          id,
        },
      }
    );
    res.json({
      office: office,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getOF(req, res) {
  const { id } = req.params;
  try {
    const office = await Office.findOne(
      {
        where: {
          id,
        },include: [{
          model: Position,
          as: 'positions',
          required: false,
        // Pass in the Document attributes that you want to retrieve
          attributes: ['id', 'name','active']
        }]
      }
    );
    res.json({
      office: office,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createOffice(req, res) {
  const { name, companyId, supOfficeId} = req.body;
  try {
    let newOffice = await Office.create(
      {
        name,
        companyId,
        supOfficeId
      },
      {
        fields: ["name", "companyId", "supOfficeId"],
      }
    );
    if (newOffice) {
      return res.json({
        message: "Office Created",
        office: newOffice,
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

export async function updateOffice(req, res) {
  const { id } = req.params;
  const { name, companyId, supOfficeId} = req.body;

  try {
    const offices = await Office.findAll({
      attributes: ["id","name", "companyId", "supOfficeId"],
      where: {
        id,
      },
    });
    if (offices.length > 0) {
      offices.forEach(async (office) => {
        await office.update({
          name,
          companyId,
          supOfficeId
        });
      });
    }

    return res.json({
      message: "Office Updated Succesfully",
      office: offices,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteOffice(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Office.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Office Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}