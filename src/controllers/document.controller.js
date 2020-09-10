
import Document from "../models/Document";


export async function getDocuments(req, res) {
  try {
    const documents = await Document.findAll({
      attributes: ["id", "name", "type","formId","src","status","createDate"],
    });
    res.json({
      documents: documents,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getDocument(req, res) {
  const { id } = req.params;
  try {
    const document = await Document.findOne(
      {
        where: {
          id,
        },
      }
    );
    res.json({
      document: document,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function getDocumentForm(req, res) {
  const { id } = req.params;
  try {
    const documents = await Document.findAll(
      {
        where: {
          formId: id
        },
      }
    );
    res.json({
      documents: documents,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createDocument(req, res) {
  const { name, type, formId, src, status, createDate } = req.body;
  try {
    let newDocument = await Document.create(
      {
        name,
        type,
        formId,
        src,
        status,
        createDate
      },
      {
        fields: ["name", "type","formId","src","status","createDate"],
      }
    );
    if (newDocument) {
      return res.json({
        message: "Document Created",
        document: newDocument,
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

export async function updateDocument(req, res) {
  const { id } = req.params;
  const { name, type, formId, src, status, createDate} = req.body;

  try {
    const documents = await Document.findAll({
      attributes: ["id", "name","type","formId","src","status","createDate"],
      where: {
        id,
      },
    });
    if (documents.length > 0) {
      documents.forEach(async (document) => {
        await document.update({
          name,
          type,
          formId,
          src,
          status,
          createDate
        });
      });
    }

    return res.json({
      message: "Document Updated Succesfully",
      document: documents,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteDocument(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Document.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Document Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}


/* export async function uploadFile(req, res) {
  try {
    let newDocument = await Document.create(
      {
        type: req.file.mimetype,
        name: req.file.originalname,
        data: req.file.buffer,
      },
      {
        fields: ["name", "type", "data"],
      }
    );
    if (newDocument) {
      return res.json({
        message: "Document Created",
        data: newDocument.name,
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

export async function downloadDocument(req, res) {
  try {
    const document = await Document.findByPk(req.params.id);
    if (document) {
      var fileContents = Buffer.from(document.data, "base64");
      var readStream = new stream.PassThrough();
      readStream.end(fileContents);

      res.set("Content-disposition", "attachment; filename=" + document.name);
      res.set("Content-Type", document.type);

      readStream.pipe(res);
    }
  } catch (error) {
    res.status(500).json({ 
      message: "Something goes wrong",  
    });
    console.log(error);
    
  }
} 
 */