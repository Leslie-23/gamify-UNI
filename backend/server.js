// server.js
const app = require("./app");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "running",
      version: "0.0.1",
      port: `${PORT}`,
      createdBy: "leslie paul ajayi (PAL tech)",
    });
});

app.listen(PORT, () => {
  console.log(`\n Server running on port: ${PORT}`);
});
