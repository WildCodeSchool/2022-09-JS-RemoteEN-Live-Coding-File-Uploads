import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors({origin: "http://localhost:5173"}))

const fileUploadMiddleware = multer({
  dest: "uploads/",
});

app.post("/uploadSingle", fileUploadMiddleware.single("fileToUpload"), (req, res) => {
  const file = req.file;
  console.log(file.originalname);
  res.sendStatus(201);
});

app.listen(8080, () =>
  console.log("Express listening on http://localhost:8080")
);
