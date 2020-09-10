import AdmCondition from "../models/AdmCondition";

export async function getAdmConditions(req, res) {
  try {
    const admConditions = await AdmCondition.findAll();
    res.json({
      admConditions: admConditions,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAdmCondition(req, res) {
  const { id } = req.params;
  try {
    const admCondition = await AdmCondition.findOne({
      where: {
        id,
      },
    });
    res.json({
      admCondition: admCondition,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getAdmConditionRequest(req, res) {
  const { requestId } = req.params;
  try {
    const admConditions = await AdmCondition.findAll({
      where: {
        requestId,
      },
    });
    res.json({
      admConditions: admConditions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createAdmCondition(req, res) {
  const { priority, type, warranty, deliveryTime, placeDelivery, posibleProviders, requestId } = req.body;
  try {
    let newAdmCondition = await AdmCondition.create(
      {
        priority, 
        type, 
        warranty, 
        deliveryTime, 
        placeDelivery, 
        posibleProviders,
        requestId
      },
      {
        fields: ["priority", "type", "warranty", "deliveryTime", "placeDelivery","posibleProviders","requestId"],
      }
    );
    if (newAdmCondition) {
      return res.json({
        message: "AdmCondition Created",
        admCondition: newAdmCondition,
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

export async function updateAdmCondition(req, res) {
  const { id } = req.params;
  const {priority, type, warranty, deliveryTime, placeDelivery, posibleProviders, requestId } = req.body;

  try {
    const admConditions = await AdmCondition.findAll({
      attributes: ['id','priority', 'type', 'warranty', 'deliveryTime', 'placeDelivery','posibleProviders', 'requestId'],
      where: {
        id,
      },
    });
    if (admConditions.length > 0) {
      admConditions.forEach(async (admCondition) => {
        await admCondition.update({
            priority, 
            type, 
            warranty, 
            deliveryTime, 
            placeDelivery, 
            posibleProviders,
            requestId
        });
      });
    }

    return res.json({
      message: "AdmCondition Updated Succesfully",
      admCondition: admConditions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteAdmCondition(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await AdmCondition.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "AdmCondition Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
