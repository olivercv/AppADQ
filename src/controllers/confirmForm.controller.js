import ConfirmForm from "../models/ConfirmForm";
import User from "../models/User";

export async function getConfirmations(req, res) {
  try {
    const confirmations = await ConfirmForm.findAll();
    res.json({
        confirmations: confirmations,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getConfirmation(req, res) {
  const { id } = req.params;
  try {
    const confirmation = await ConfirmForm.findOne(
      {
        where: {
          id,
        },
      }
    );
    res.json({
        confirmation: confirmation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getConf(req, res) {
  const { id } = req.params;
  try {
    const confirmation = await ConfirmForm.findOne(
      {
        where: {
          id,
        },include: [{
          model: User,
          as: 'user',
          required: false,
          attributes: ['id', 'name','lastname', 'positionId']
        }]
      }
    );
    res.json({
        confirmation: confirmation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createConfirmation(req, res) {
  const { userId, dateAt, observation, refuse, codeRequest} = req.body;
  console.log('datos ', req.body);
  try {
    let newConfirmation = await ConfirmForm.create(
      {
        userId,
        codeRequest,
        dateAt,
        observation,
        refuse
      },
      {
        fields: ["userId", "codeRequest", "dateAt", "observation", "refuse"],
      }
    );
    if (newConfirmation) {
      return res.json({
        message: "Confirmation Created",
        confirmation: newConfirmation,
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

export async function updateConfirmation(req, res) {
  const { id } = req.params;
  const { userId, dateAt, observation, refuse, codeRequest} = req.body;

  try {
    const confirmations = await ConfirmForm.findAll({
      attributes: ["userId", "codeRequest", "dateAt", "observation", "refuse"],
      where: {
        id,
      },
    });
    if (confirmations.length > 0) {
        confirmations.forEach(async (confirmation) => {
        await confirmation.update({
            userId,
            codeRequest,
            dateAt,
            observation,
            refuse
        });
      });
    }

    return res.json({
      message: "Confirmation Updated Succesfully",
      confirmation: confirmations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteConfirmation(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await ConfirmForm.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Confirmation Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}