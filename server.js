const express = require("express");
const app = express();

const port = process.env.PORT || 3001; // Note: using a different port to normal

app.use(express.static("./client/build"));
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ result: "success" });
});

app.get("*", (req, res) => {
  res.setHeader("content-type", "text/html");
  fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});