const userFile = require("../module/authfile");
const upload = async (req, res) => {
  try {   
    const file = req.file;
    console.log("f",file);
    const save = await userFile.create({ File: file.filename });
    res.json({
      data: save,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const getfile = async (req, res) => {
  try {
    const fileId = req.params.id;
    const getimage = await userFile.findById(fileId);
    res.json({
      id: getimage,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const fileEdit = async (req,res) =>{
  try {
    const newFile = req.file;
    const objectId = req.params.id;
    const oldFile = await userFile.findById(objectId);
    console.log("file",oldFile)
  if(!oldFile){
   return res.json({
      message:"file not found"
    })

  }
  if(oldFile.File){
    fs.unlinkSync(`./public/userfiles/${oldFile.File}`) // npm i fs filesystem
  }
  oldFile.File = newFile.filename

  const saveFile= await oldFile.save()
  res.json({
    data:saveFile,
    message:"file updated successful"
  })

    
  } catch (error) {
    res.json({
      Error:error.message
    })
    
  }
}

const deleteFile= async(req,res) =>{
  try {
    const objectId = req.params.id;
    const oldFile = await userFile.findById(objectId)
    if(!oldFile){
      res.json({
        message:"file not found"
      })
    }
    if(oldFile.File){
      fs.unlinkSync(`./public/userfiles/${oldFile.File}`)
    }


    const deleteFile= await oldFile.deleteOne()
    res.json({
      message:"file is delete"
    })
    
  } catch (error) {
    res.json({
      Error:error.message

    })
    
  }
}

module.exports = {
  upload,
  getfile,
  fileEdit,
  deleteFile
};