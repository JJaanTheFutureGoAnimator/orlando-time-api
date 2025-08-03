const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/orlando-time", async (req, res) => {
  try {
    const response = await axios.get("http://worldtimeapi.org/api/timezone/America/New_York");
    const timeString = response.data.datetime.slice(11, 16); // "HH:MM"
    res.json({ time: timeString });
  } catch (error) {
    console.error("Error fetching time:", error);
    res.status(500).json({ error: "Failed to get time" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
