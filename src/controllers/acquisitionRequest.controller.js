import AcquisitionRequest from "../models/AcquisitionRequest";
import Product from "../models/Product";
import AdmCondition from "../models/AdmCondition";
import Document from '../models/Document';


export async function getAcquisitionRequests(req, res) {
  try {
    const acquisitionRequests = await AcquisitionRequest.findAll();
    res.json({
      acquisitionRequests: acquisitionRequests,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAcquisitionRequest(req, res) {
  const { id } = req.params;
  try {
    const acquisitionRequest = await AcquisitionRequest.findOne({
      where: {
        id,
      },
    });
    res.json({
      acquisitionRequest: acquisitionRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getADQRequest(req, res) {
  var  id  = req.params.id;
  try {
    const acquisitionRequest = await AcquisitionRequest.findOne({
      where: {
        id,
      },
      include: [{
        model: Product,
        as: 'products',
        required: false,
      // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'name','description','quantity','price']
      },{
      model: AdmCondition,
        as: 'admConditions',
        required: false,
      // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'priority','type','warranty','deliveryTime','placeDelivery','posibleProviders']
      },{
        model: Document,
        as: 'documents',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','type','src','status','createDate','fileName']
      }

    ]
    });
    res.json({
      acquisitionRequest: acquisitionRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createAcquisitionRequest(req, res) {
  const {
    code,
    version,
    validity,
    numRequest,
    requestDate,
    nPac,
    place,
    question1,
    question2,
    question3,
    coin,
    title,
    category,
    selectionMethod,
    descriptionTitle,
  } = req.body;
  try {
    let newAcquisitionRequest = await AcquisitionRequest.create(
      {
        code,
        version,
        validity,
        numRequest,
        requestDate,
        nPac,
        place,
        question1,
        question2,
        question3,
        coin,
        title,
        category,
        selectionMethod,
        descriptionTitle,
      },
      {
        fields: [
          "code",
          "version",
          "validity",
          "numRequest",
          "requestDate",
          "nPac",
          "place",
          "question1",
          "question2",
          "question3",
          "coin",
          "title",
          "category",
          "selectionMethod",
          "descriptionTitle",
        ],
      }
    );
    if (newAcquisitionRequest) {
      return res.json({
        message: "AcquisitionRequest Created",
        acquisitionRequest: newAcquisitionRequest,
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

export async function updateAcquisitionRequest(req, res) {
  const { id } = req.params;
  const {
    code,
    version,
    validity,
    numRequest,
    requestDate,
    nPac,
    place,
    question1,
    question2,
    question3,
    coin,
    title,
    category,
    selectionMethod,
    descriptionTitle,
  } = req.body;

  try {
    const acquisitionRequests = await AcquisitionRequest.findAll({
      attributes: [
        'id',
        'code',
        'version',
        'validity',
        'numRequest',
        'requestDate',
        'nPac',
        'place',
        'question1',
        'question2',
        'question3',
        'coin',
        'title',
        'category',
        'selectionMethod',
        'descriptionTitle',
      ],
      where: {
        id,
      },
    });
    if (acquisitionRequests.length > 0) {
      acquisitionRequests.forEach(async acquisitionRequest => {
        await acquisitionRequest.update({
          code,
          version,
          validity,
          numRequest,
          requestDate,
          nPac,
          place,
          question1,
          question2,
          question3,
          coin,
          title,
          category,
          selectionMethod,
          descriptionTitle,
        });
      })
    }

    return res.json({
      message: "AcquisitionRequest Updated Succesfully",
      acquisitionRequest: acquisitionRequests,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteAcquisitionRequest(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await AcquisitionRequest.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "AcquisitionRequest Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
