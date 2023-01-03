import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fileSystem from "fs";
import mime from "mime-types";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

const uploadsFolder = "uploads/";

const fileUploadMiddleware = multer({
  dest: uploadsFolder,
});

// uid -> unique ID
app.get("/media/:uid", (req, res) => {
  const { uid } = req.params;
  var filePath = path.join(uploadsFolder, uid);
  var stat = fileSystem.statSync(filePath);

  res.writeHead(200, {
    // This is the MIME type which defines what kind of data we are working with
    // TODO: dynamically determine MIME type
    "Content-Type": "image/jpeg",
    "Content-Length": stat.size,
  });

  var readStream = fileSystem.createReadStream(filePath);
  readStream.pipe(res);
});

app.post("/media", fileUploadMiddleware.single("fileToUpload"), (req, res) => {
  const file = req.file;
  console.log(file.originalname);
  res.sendStatus(201);
});

app.listen(8080, () =>
  console.log("Express listening on http://localhost:8080")
);
