import ProcessStart from "../models/ProcessStart";
import Document from "../models/Document";

export async function getProcessStarts(req, res) {
  try {
    const processStarts = await ProcessStart.findAll();
    res.json({
      processStarts: processStarts,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProcessStart(req, res) {
  const { id } = req.params;
  try {
    const processStart = await ProcessStart.findOne({
      where: {
        id,
      },
    });
    res.json({
      processStart: processStart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getPSD(req, res) {
  const { id } = req.params;
  try {
    const processStart = await ProcessStart.findOne({
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
      processStart: processStart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createProcessStart(req, res) {
  const { category, startDate, endDate } = req.body;
  try {
    let newProcessStart = await ProcessStart.create(
      {
        category,
        startDate,
        endDate,
      },
      {
        fields: ["category", "startDate","endDate"],
      }
    );
    if (newProcessStart) {
      return res.json({
        message: "ProcessStart Created",
        processStart: newProcessStart,
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

export async function updateProcessStart(req, res) {
  const { id } = req.params;
  const { category, startDate, endDate } = req.body;

  try {
    const processStarts = await ProcessStart.findAll({
      attributes: ['id', 'category', 'startDate', 'endDate'],
      where: {
        id,
      },
    });
    if (processStarts.length > 0) {
      processStarts.forEach(async (processStart) => {
        await processStart.update({
          category,
          startDate,
          endDate
        });
      });
    }

    return res.json({
      message: "ProcessStart Updated Succesfully",
      processStart: processStarts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProcessStart(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await ProcessStart.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "ProcessStart Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
