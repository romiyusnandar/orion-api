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
    name: "romi.yusna",
    role: "Co-Founder",
    device_name: ["Redmi Note 10 Pro"],
    device_codename: ["Sweet"],
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
    device_codename: ["Rock"],
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
    device_name: ["Redmi 10C/10 Power"],
    device_codename: ["Fog/Wind/Rain"],
    social: {
      github: "https://github.com/asterixiverz",
      telegram: "https://t.me/iverzasterix"
    },
  },
  {
    _id: 105,
    image: "https://i.ibb.co.com/pfYpkYC/Rey-afk.jpg",
    name: "Smokey ツ",
    role: "Group Support",
    device_name: [""],
    device_codename: [""],
    social: {
      github: "/teams",
      telegram: "https://t.me/rynothingspecial"
    },
  },
  {
    _id: 106,
    image: "https://i.ibb.co.com/8gZgLRT/rmdn.jpg",
    name: "rmdn.",
    role: "Maintainer",
    device_name: ["Poco X6/Redmi Note 13 Pro"],
    device_codename: ["Garnet"],
    social: {
      github: "https://github.com/ramaadni",
      telegram: "https://t.me/ramaadni"
    },
  },
  {
    _id: 107,
    image: "https://i.ibb.co.com/tXyMMYk/photo-2024-07-15-18-53-49.jpg",
    name: "Skyy丨アラタ",
    role: "Maintainer",
    device_name: ["Poco X3 NFC"],
    device_codename: ["Surya"],
    social: {
      github: "https://github.com/HinohArata",
      telegram: "https://t.me/HinohArata"
    },
  },
  {
    _id: 108,
    image: "https://i.ibb.co.com/9GJrbc1/nextworks.jpg",
    name: "NextWorks",
    role: "Maintainer",
    device_name: ["Poco F5 Pro/Redmi K60"],
    device_codename: ["Mondrian"],
    social: {
      github: "https://github.com/NextWork123",
      telegram: "https://t.me/NextWorksGFX"
    },
  },
  {
    _id: 109,
    image: "https://i.ibb.co.com/RCs70nx/AL.jpg",
    name: "AL",
    role: "Maintainer",
    device_name: ["Redmi S2"],
    device_codename: ["Ysl"],
    social: {
      github: "https://github.com/ALprjkt",
      telegram: "https://t.me/animelopers"
    },
  },
  {
    _id: 110,
    image: "https://i.ibb.co.com/zFHVTrz/jp.jpg",
    name: "ぞうしろかずわ",
    role: "Maintainer",
    device_name: ["Poco X3 Pro"],
    device_codename: ["Vayu"],
    social: {
      github: "https://github.com/hirero-kazuwa",
      telegram: "https://t.me/KazuwaZoshiro"
    },
  },
  {
    _id: 111,
    image: "https://i.ibb.co.com/WyRJTjP/abxxx.jpg",
    name: "AgBKartikey",
    role: "Maintainer",
    device_name: ["Nothing Phone 2"],
    device_codename: ["Pong"],
    social: {
      github: "https://github.com/AgBKartikey",
      telegram: "https://t.me/AgBKartikey"
    },
  },
  {
    _id: 112,
    image: "https://i.ibb.co.com/hcQ6XBK/omar.png",
    name: "Omar",
    role: "Maintainer",
    device_name: ["Xiaomi 11T Pro"],
    device_codename: ["Vili"],
    social: {
      github: "https://github.com/0mar99",
      telegram: "https://t.me/Omar99A"
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