import TechnicalReport from "../models/TechnicalReport";
import Document from "../models/Document";

export async function getTechnicalReports(req, res) {
  try {
    const technicalReports = await TechnicalReport.findAll();
    res.json({
      technicalReports: technicalReports,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTechnicalReport(req, res) {
  const { id } = req.params;
  try {
    const technicalReport = await TechnicalReport.findOne({
      where: {
        id,
      },
    });
    res.json({
      technicalReport: technicalReport,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getTR(req, res) {
  const { id } = req.params;
  try {
    const technicalReport = await TechnicalReport.findOne({
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
      technicalReport: technicalReport,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createTechnicalReport(req, res) {
  const { background, acquisitionObjetive, testInspection, supportDocument, technicalQuarantee, technicalService, placeDelivery, deliveryTerm, price } = req.body;
  try {
    let newTechnicalReport = await TechnicalReport.create(
      {
        background, 
        acquisitionObjetive, 
        testInspection, 
        supportDocument, 
        technicalQuarantee, 
        technicalService, 
        placeDelivery, 
        deliveryTerm, 
        price
      },
      {
        fields: ["background", "acquisitionObjetive", "testInspection", "supportDocument", "technicalQuarantee","technicalService","placeDelivery","deliveryTerm","price"],
      }
    );
    if (newTechnicalReport) {
      return res.json({
        message: "TechnicalReport Created",
        technicalReport: newTechnicalReport,
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

export async function updateTechnicalReport(req, res) {
  const { id } = req.params;
  const {background, acquisitionObjetive, testInspection, supportDocument, technicalQuarantee, technicalService, placeDelivery, deliveryTerm, price } = req.body;

  try {
    const technicalReports = await TechnicalReport.findAll({
      attributes: ['id','background', 'acquisitionObjetive', 'testInspection', 'supportDocument', 'technicalQuarantee','technicalService', 'placeDelivery','deliveryTerm', 'price'],
      where: {
        id,
      },
    });
    if (technicalReports.length > 0) {
      technicalReports.forEach(async (technicalReport) => {
        await technicalReport.update({
            background, 
            acquisitionObjetive, 
            testInspection, 
            supportDocument, 
            technicalQuarantee, 
            technicalService, 
            placeDelivery, 
            deliveryTerm, 
            price
        });
      });
    }

    return res.json({
      message: "TechnicalReport Updated Succesfully",
      technicalReport: technicalReports,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteTechnicalReport(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await TechnicalReport.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "TechnicalReport Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
