const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/orlando-time", (req, res) => {
  try {
    const now = new Date();
    const options = {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const time = now.toLocaleTimeString("en-US", options).slice(0, 5);
    res.json({ time });
  } catch (error) {
    console.error("Time error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

