import Document from "../models/Document";

const path = require("path");
const fs = require("fs");
const {response} = require('express');

export function uploadFile(req, res, next) {
  var id = req.params.id;
  // tipos de colecciones
  if (!req.files) {
    return res.status(400).json({
      ok: false,
      message: "No selecciono ningun archivo",
      errors: "Debe de seleccionar un archivo",
    });
  }
  // Obtener nombre del archivo
  var fil = req.files.sfile;
  var nFile = fil.name;
  var shortName = fil.name.split(".");
  var ext = shortName[(shortName = 1)];
  // solo se aceptaran estas extensiones
  var validExt = ["pdf", "doc", "docx", "xls", "xlsx", "zip", "rar", "png", "jpeg"];
  if (validExt.indexOf(ext) < 0) {
    return res.status(400).json({
      ok: false,
      mensaje: "Extensión no válida",
      errors: "Las extensiones validas son: " + validExt.join(", "),
    });
  }

  // Nombre de archivo personalizado
  var nameFile = `${id}-${new Date().getMilliseconds()}.${ext}`;

  //Mover el archivo temporal al un path
  const path = `./uploads/${nameFile}`;

  fil.mv(path, (err) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "Error al mover archivo 1",
        errors: err,
      });
    }
    uploadDocument(id, nameFile,nFile,ext, res);
  });
}

const deleteOldPath = ( path ) => {
  if ( fs.existsSync( path ) ) {
      // borrar la imagen anterior
      fs.unlinkSync( path );
  }
}

async function uploadDocument(id, nameFile,nFile,ext, res) {
  let oldPath = '';
  try {
    const document = await Document.findByPk(id);
    if (document) {
      oldPath = `./uploads/${document.src}`;
      deleteOldPath(oldPath);
      document.update({type: ext,src: nameFile,fileName:nFile});
      res.json({
        message: "Document OK",
        document: document,
      });
    }
    
  } catch (error) {
    res.status(500).json({ 
      message: "Something goes wrong",  
    });
    console.log(error);
  }
  
}

export const getFile = (req, res = response) => {
  
    const sfile =  req.params.src;
    const pathImg = path.join(__dirname, `../../uploads/${ sfile }` );
    var pathFile = path.resolve(__dirname, `../../uploads/${ sfile }` );
    if (fs.existsSync(pathImg)) {
      res.sendFile(pathImg);
    }
    if (fs.existsSync(pathFile)) {
      res.sendFile(pathFile);
    }
    else{
      res.status(500).json({ 
        message: "Something goes wrong", 
        path: pathImg, 
        pathF: pathFile,
        
      });
      

    }
  

    	

}

