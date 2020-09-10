import TechnicalEvaluation from "../models/TechnicalEvaluation";
import Document from "../models/Document";

export async function getTechnicalEvaluations(req, res) {
  try {
    const technicalEvaluations = await TechnicalEvaluation.findAll();
    res.json({
      technicalEvaluations: technicalEvaluations,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTechnicalEvaluation(req, res) {
  const { id } = req.params;
  try {
    const technicalEvaluation = await TechnicalEvaluation.findOne({
      where: {
        id,
      },
    });
    res.json({
      technicalEvaluation: technicalEvaluation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getTED(req, res) {
  const { id } = req.params;
  try {
    const technicalEvaluation = await TechnicalEvaluation.findOne({
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
      technicalEvaluation: technicalEvaluation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createTechnicalEvaluation(req, res) {
  const { to, via,  whose, number, date } = req.body;
  try {
    let newTechnicalEvaluation = await TechnicalEvaluation.create(
      {
        to, 
        via,  
        whose, 
        number, 
        date
      },
      {
        fields: ["to", "via", "whose","number","date"],
      }
    );
    if (newTechnicalEvaluation) {
      return res.json({
        message: "TechnicalEvaluation Created",
        technicalEvaluation: newTechnicalEvaluation,
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

export async function updateTechnicalEvaluation(req, res) {
  const { id } = req.params;
  const {to, via, whose, number, date } = req.body;

  try {
    const technicalEvaluations = await TechnicalEvaluation.findAll({
      attributes: ['id','to', 'via','whose','number', 'date'],
      where: {
        id,
      },
    });
    if (technicalEvaluations.length > 0) {
      technicalEvaluations.forEach(async (technicalEvaluation) => {
        await technicalEvaluation.update({
            to, 
            via, 
            whose, 
            number, 
            date
        });
      });
    }

    return res.json({
      message: "TechnicalEvaluation Updated Succesfully",
      technicalEvaluation: technicalEvaluations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteTechnicalEvaluation(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await TechnicalEvaluation.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "TechnicalEvaluation Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
