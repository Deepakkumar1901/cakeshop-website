const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
const userData = require("./module/auth");
const authOrder = require("./module/authdata");
const userFile = require("./module/authfile");
const multer = require("multer");
const router = express.Router();
const userControler = require("../back-end/controller/userControler");
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:3000", // allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow cookies to be sent
  })
);
app.use(express.json());

const JWT_SECRET = "klasjflk3kkj3o090932iofjo!@iop2jiojj";
//

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const file = new File({
//       name: req.file.originalname,
//       path: req.file.path,
//       size: req.file.size,
//       type: req.file.mimetype,
//     });
//     await file.save();

//     res.status(200).json({ message: 'File uploaded successfully' });
//   } catch (error) {
//     console.error('File upload failed:', error);
//     res.status(500).json({ message: 'File upload failed', error: error.message });
//   }
// });

//
app.post("/order", async (req, res) => {
  try {
    const { name, email, mobileNo, date, decorated, address } = req.body;
    await authOrder.create({ name, email, mobileNo, date, decorated, address });
    return res.json({ message: "order placed successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingdata = await userData.findOne({ email });

    if (existingdata) {
      const isPasswordValid = await bcrypt.compare(
        password,
        existingdata.password
      );
      if (isPasswordValid) {
        const token = jwt.sign({ id: existingdata._id }, JWT_SECRET, {
          expiresIn: "1h",
        });
        return res.json({ message: "User logged in successfully", token });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
app.post("/register", async (req, res) => {
  try {
    const { name, email, mobileNo, password } = req.body;
    const existingdataemail = await userData.findOne({ email: email });
    const existingdataName = await userData.findOne({ name: name });
    const existingdataMobile = await userData.findOne({ mobileNo: mobileNo });

    if (existingdataemail) {
      return res.json({ message: "Email already exists" });
    } else if (existingdataName) {
      return res.json({ message: "Name already exists" });
    } else if (existingdataMobile) {
      return res.json({ message: "Mobile number already exists" });
    } else {
      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      await userData.create({
        name,
        email,
        mobileNo,
        password: hashedPassword,
      });
      console.log(name, email); // VS Code display
      return res.json({ message: "User registered successfully" });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
