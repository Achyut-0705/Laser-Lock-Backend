const app = require("./app");
const teamRoute = require("./routes/teamsRoute");
const authRoute = require("./routes/authRoute");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

app.use("/api/v1", teamRoute);
app.use("/api/v1", authRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
