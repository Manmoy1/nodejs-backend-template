const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  res.send("Backend server running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");

const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});