import Specification from "../models/Specification";
import Document from "../models/Document";

export async function getSpecifications(req, res) {
  try {
    const specifications = await Specification.findAll();
    res.json({
      specifications: specifications,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getSpecification(req, res) {
  const { id } = req.params;
  try {
    const specification = await Specification.findOne({
      where: {
        id,
      },
    });
    res.json({
      specification: specification,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getSP(req, res) {
  const { id } = req.params;
  try {
    const specification = await Specification.findOne({
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
      specification: specification,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createSpecification(req, res) {
  const { codeRequest } = req.body;
  try {
    let newSpecification = await Specification.create(
      {
        codeRequest, 
        
      },
      {
        fields: ["codeRequest"],
      }
    );
    if (newSpecification) {
      return res.json({
        message: "Specification Created",
        specification: newSpecification,
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

export async function updateSpecification(req, res) {
  const { id } = req.params;
  const {codeRequest} = req.body;

  try {
    const specifications = await Specification.findAll({
      attributes: ['id','codeRequest'],
      where: {
        id,
      },
    });
    if (specifications.length > 0) {
      specifications.forEach(async (specification) => {
        await specification.update({
            codeRequest, 
            
        });
      });
    }

    return res.json({
      message: "Specification Updated Succesfully",
      specification: specifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteSpecification(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Specification.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Specification Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
