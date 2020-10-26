import OpeningAct from "../models/OpeningAct";
import Document from "../models/Document";

export async function getOpeningActs(req, res) {
  try {
    const openingActs = await OpeningAct.findAll();
    res.json({
      openingActs: openingActs,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getOpeningAct(req, res) {
  const { id } = req.params;
  try {
    const openingAct = await OpeningAct.findOne({
      where: {
        id,
      },
    });
    res.json({
      openingAct: openingAct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getOA(req, res) {
  const { id } = req.params;
  try {
    const openingAct = await OpeningAct.findOne({
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
      openingAct: openingAct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createOpeningAct(req, res) {
  const { codeRequest } = req.body;
  try {
    let newOpeningAct = await OpeningAct.create(
      {
        codeRequest, 
        
      },
      {
        fields: ["codeRequest"],
      }
    );
    if (newOpeningAct) {
      return res.json({
        message: "OpeningAct Created",
        openingAct: newOpeningAct,
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

export async function updateOpeningAct(req, res) {
  const { id } = req.params;
  const {codeRequest} = req.body;

  try {
    const openingActs = await OpeningAct.findAll({
      attributes: ['id','codeRequest'],
      where: {
        id,
      },
    });
    if (openingActs.length > 0) {
      openingActs.forEach(async (openingAct) => {
        await openingAct.update({
            codeRequest, 
            
        });
      });
    }

    return res.json({
      message: "OpeningAct Updated Succesfully",
      openingAct: openingActs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteOpeningAct(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await OpeningAct.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "OpeningAct Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
