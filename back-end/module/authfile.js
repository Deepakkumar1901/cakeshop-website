const mongoose=require("mongoose")

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
  });

  
  const File = mongoose.model("fileImage", fileSchema);

module.exports=File