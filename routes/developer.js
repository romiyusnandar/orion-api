const express = require('express');
const router = express.Router();

const developerData = [
  {
    _id: 101,
    image: "https://i.ibb.co.com/X3wQXyb/hiro.jpg",
    name: "Hirokixd",
    slug: "hirokixd",
    role: "Founder",
    bio: "Hi! I'am Founder of OrionOS. I love to develop custom ROMs. I am a student and I am passionate about technology. I am a big fan of open-source projects.",
    device_name: ["Redmi Note 8/8T"],
    device_codename: ["Ginkgo/Willow"],
    social: {
      github: "https://github.com/Wrdn28",
      telegram: "https://t.me/Hirokixd28",
      donate: "https://saweria.co/Hirokixd"
    },
  },
  {
    _id: 102,
    image: "https://i.ibb.co.com/7ytJ7Mw/romiz.jpg",
    name: "romi.yusna",
    slug: "romi.yusna",
    role: "Co-Founder",
    bio: "Hi! I'am Co-Founder of OrionOS. I love to develop custom ROMs. I am a student and I am passionate about technology. I am a big fan of open-source projects.",
    device_name: ["Redmi Note 10 Pro", "Xiaomi Mi A1"],
    device_codename: ["Sweet", "Tissot"],
    social: {
      github: "https://github.com/romiyusnandar",
      telegram: "https://t.me/romiyusna",
      donate: ""
    },
  },
  {
    _id: 103,
    image: "https://i.ibb.co.com/vYnMZrw/onlee.jpg",
    name: "Onle",
    slug: "onle",
    role: "Core Developer",
    bio: "Hi! I'am Core Developer of OrionOS. I love to develop custom ROMs. I am a student and I am passionate about technology. I am a big fan of open-source projects.",
    device_name: [],
    device_codename: [],
    social: {
      github: "https://github.com/michionle",
      telegram: "https://t.me/michionlee",
      donate: ""
    },
  },
  {
    _id: 104,
    image: "https://i.ibb.co.com/gdqDq5y/ivzz.jpg",
    name: "Iverz",
    slug: "iverz",
    role: "UI/UX Design",
    bio: "Koniciwa! Iverz desu. I'am UI/UX Designer in OrionOS Project. I am passionate about UI/UX design, especially in mobile app. This is my hobby and if you are interested in working with me, contact me at the contact below.",
    device_name: ["Redmi 10C/10 Power"],
    device_codename: ["Fog/Wind/Rain"],
    social: {
      github: "https://github.com/asterixiverz",
      telegram: "https://t.me/iverzasterix",
      donate: "https://t.me/JustVerz/6"
    },
  },
  {
    _id: 105,
    image: "https://i.ibb.co.com/HhTdXRx/smokey.jpg",
    name: "Smokey ツ",
    slug: "smokey",
    role: "Group Support",
    bio: "Hi! I'am Group Support of OrionOS. I love to develop custom ROMs. I am a student and I am passionate about technology. I am a big fan of open-source projects.",
    device_name: [],
    device_codename: [],
    social: {
      github: "/teams",
      telegram: "https://t.me/rynothingspecial",
      donate: ""
    },
  },
  {
    _id: 106,
    image: "https://i.ibb.co.com/mG6hYwy/drenz.jpg",
    name: "Drenzzz.",
    slug: "drenzzz",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco X6 / Redmi Note 13 Pro"],
    device_codename: ["Garnet"],
    social: {
      github: "https://github.com/drenzzz",
      telegram: "https://t.me/realdrenzzz",
      donate: ""
    },
  },
  {
    _id: 107,
    image: "https://i.ibb.co.com/tXyMMYk/photo-2024-07-15-18-53-49.jpg",
    name: "Skyy丨アラタ",
    slug: "skyy",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco X3 NFC"],
    device_codename: ["Surya"],
    social: {
      github: "https://github.com/HinohArata",
      telegram: "https://t.me/HinohArata",
      donate: ""
    },
  },
  {
    _id: 108,
    image: "https://i.ibb.co.com/9GJrbc1/nextworks.jpg",
    name: "NextWorks",
    slug: "nextworks",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco F5 Pro / Redmi K60"],
    device_codename: ["Mondrian"],
    social: {
      github: "https://github.com/NextWork123",
      telegram: "https://t.me/NextWorksGFX",
      donate: ""
    },
  },
  {
    _id: 109,
    image: "https://i.ibb.co.com/RCs70nx/AL.jpg",
    name: "AL",
    slug: "al",
    role: "Maintainer",
    bio: [],
    device_name: ["Redmi 5 Plus"],
    device_codename: ["Vince"],
    social: {
      github: "https://github.com/k4ngcaribug",
      telegram: "https://t.me/animelopers",
      donate: "https://t.me/exy3zed"
    },
  },
  {
    _id: 110,
    image: "https://i.ibb.co.com/zFHVTrz/jp.jpg",
    name: "ぞうしろかずわ",
    slug: "kazuwa",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco X3 Pro"],
    device_codename: ["Vayu"],
    social: {
      github: "https://github.com/hirero-kazuwa",
      telegram: "https://t.me/KazuwaZoshiro",
      donate: ""
    },
  },
  {
    _id: 111,
    image: "https://i.ibb.co.com/WyRJTjP/abxxx.jpg",
    name: "AgBKartikey",
    slug: "agbkartikey",
    role: "Maintainer",
    bio: [],
    device_name: ["Nothing Phone 2"],
    device_codename: ["Pong"],
    social: {
      github: "https://github.com/AgBKartikey",
      telegram: "https://t.me/AgBKartikey",
      donate: ""
    },
  },
  {
    _id: 112,
    image: "https://i.ibb.co.com/hcQ6XBK/omar.png",
    name: "Omar",
    slug: "omar",
    role: "Maintainer",
    bio: [],
    device_name: ["Xiaomi 11T Pro"],
    device_codename: ["Vili"],
    social: {
      github: "https://github.com/0mar99",
      telegram: "https://t.me/Omar99A",
      donate: ""
    },
  },
  {
    _id: 113,
    image: "https://i.ibb.co.com/9sgz3F7/dhanus.jpg",
    name: "Dhanush",
    slug: "dhanush",
    role: "Maintainer",
    bio: [],
    device_name: ["Redmi 12 5G / Poco M6 Pro / Redmi Note 12R"],
    device_codename: ["Sky"],
    social: {
      github: "https://github.com/dhanush281",
      telegram: "https://t.me/solocaptainblaze",
      donate: ""
    },
  },
  {
    _id: 114,
    image: "https://i.ibb.co.com/Y0FDszp/rams.jpg",
    name: "ramshell688",
    slug: "ramshell688",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco F6 / Redmi Turbo 3"],
    device_codename: ["Peridot"],
    social: {
      github: "https://github.com/ramshell688",
      telegram: "https://t.me/ramshell688",
      donate: ""
    },
  },
  {
    _id: 115,
    image: "https://i.ibb.co.com/ys9kt0X/sa-sajid.jpg",
    name: "Sã Śâjjãd",
    slug: "sasajjad",
    role: "Maintainer",
    bio: [],
    device_name: ["Redmi Note 7"],
    device_codename: ["Lavender"],
    social: {
      github: "https://github.com/Snax-phycho",
      telegram: "https://t.me/sa_sajjadx",
      donate: ""
    },
  },
  {
    _id: 116,
    image: "https://i.ibb.co.com/7jLB5GN/shakib.jpg",
    name: "Shakib",
    slug: "shakib",
    role: "Maintainer",
    bio: [],
    device_name: ["Poco M5", "Redmi Note 12 Pro 4G"],
    device_codename: ["Rock", "Sweet_k6a"],
    social: {
      github: "https://github.com/shakib-BD",
      telegram: "https://t.me/Shakib_BD",
      donate: ""
    },
  },
  {
    _id: 117,
    image: "https://i.ibb.co.com/8gZgLRT/rmdn.jpg",
    name: "Byben",
    slug: "byben",
    role: "Maintainer",
    bio: [],
    device_name: ["Pixel 6 / 6 Pro"],
    device_codename: ["Raviole"],
    social: {
      github: "https://github.com/shakib-BD",
      telegram: "https://t.me/Shakib_BD",
      donate: "https://paypal.me/ramadhani99"
    },
  },
  {
    _id: 118,
    image: "https://i.ibb.co.com/s2gbJC3/rve.jpg",
    name: "Rve",
    slug: "rve",
    role: "Maintainer",
    bio: [],
    device_name: ["Pocophone F1", "Mi8937"],
    device_codename: ["Raviole", "Mi8937"],
    social: {
      github: "https://github.com/rve27",
      telegram: "https://t.me/rve27",
      donate: "https://t.me/rvegroup/33652"
    },
  },
]

// get all data
router.get("/developer", (req, res) => {
  res.send(developerData)
});

// get developers by name
router.get("/developer/:name", (req, res) => {
  const developerName = req.params.name.toLowerCase();
  const developer = developerData.find(
    (item) => item.name.toLowerCase() === developerName
  );

  if (!developer) {
    return res.status(404).json({ msg: "Developer not found" });
  }
  res.json(developer);
});

module.exports = router;