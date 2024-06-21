const express = require('express');
const router = express.Router();

const developerData = [
  {
    _id: 101,
    image: "https://i.ibb.co.com/Zgm3k32/Hirokixd.jpg",
    name: "Hirokixd",
    role: "Founder",
    device_name: ["Redmi Note 8/8T"],
    device_codename: ["Ginkgo/Willow"],
    social: {
      github: "https://github.com/Wrdn28",
      telegram: "https://t.me/Hirokixd28"
    },
  },
  {
    _id: 102,
    image: "https://i.ibb.co.com/k96p2fC/romi.jpg",
    name: "Romi Yusnandar",
    role: "Co-Founder",
    device_name: ["Redmi Note 10 Pro"],
    device_codename: ["Tissot", "Sweet"],
    social: {
      github: "https://github.com/romiyusnandar",
      telegram: "https://t.me/romiyusna"
    },
  },
  {
    _id: 103,
    image: "https://i.ibb.co.com/YfXsptS/onle.jpg",
    name: "Onle",
    role: "Core Developer",
    device_name: ["Redmi Note 7", "Poco M5"],
    device_codename: ["Lavender", "Rock"],
    social: {
      github: "https://github.com/michionle",
      telegram: "https://t.me/michionlee"
    },
  },
  {
    _id: 104,
    image: "https://i.ibb.co.com/b39Y9mx/ivz.jpg",
    name: "Iverzasterix",
    role: "Core Dev | UI/UX Design",
    device_name: ["-"],
    device_codename: ["-"],
    social: {
      github: "https://github.com/asterixiverz",
      telegram: "https://t.me/iverzasterix"
    },
  },
  {
    _id: 105,
    image: "https://i.ibb.co.com/pfYpkYC/Rey-afk.jpg",
    name: "Reyy ツ [ • AFK • ]",
    role: "Group Support",
    device_name: ["-"],
    device_codename: ["-"],
    social: {
      github: "/teams",
      telegram: "https://t.me/rynothingspecial"
    },
  },
]

// get all data
router.get("/developer", (req, res) => {
  res.send(developerData)
});

// get singgle data
router.get("/developer/:id", (req, res) => {
  const developerId = parseInt(req.params.id)
  const singgleDeveloper = developerData.find((item) => item._id === developerId)

  if (!developerId) {
    return res.status(404).json({msg: "Developer not found"})
  }
  res.json(singgleDeveloper)
});

module.exports = router;