const express = require('express');
const router = express.Router();

const deviceData = [
  {
    _id: 112,
    slug: "pong",
    device_image: "https://i.ibb.co.com/gb0MQ8F/nothing-2.jpg",
    device_name: "Nothing Phone 2",
    device_codename: "Pong",
    device_brand: "nothing-phone",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/Pong.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/pong",
          vanilla: null,
        },
        maintainer_name: "AgBKartikey",
      }
    ],
  },
  {
    _id: 119,
    slug: "byben",
    device_image: "https://i.ibb.co.com/2YgkM45/pixel6.jpg",
    device_name: "Pixel 6 / 6 Pro",
    device_codename: "Raviole",
    device_brand: "google",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/byben.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/byben",
          vanilla: null,
        },
        maintainer_name: "Byben",
      }
    ],
  },
  {
    _id: 105,
    slug: "tissot",
    device_image: "https://i.ibb.co.com/Yd7f6HV/tissot.jpg",
    device_name: "Mi A1",
    device_codename: "Tissot",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/tissot.md",
        download_links: {
          gapps: null,
          vanilla: "https://sourceforge.net/projects/orionos/files/A14/tissot",
        },
        maintainer_name: "romi.yusna",
      },
    ],
  },
  {
    _id: 101,
    slug: "rock",
    device_image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-87043382/xiaomi_xiaomi_poco_m5_full31_mnso77ok.jpg",
    device_name: "Poco M5",
    device_codename: "Rock",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/rock.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/rock",
          vanilla: null,
        },
        maintainer_name: "Shakib",
      }
    ],
  },
  {
    _id: 107,
    slug: "surya",
    device_image: "https://wiki.lineageos.org/images/devices/surya.png",
    device_name: "Poco X3 NFC",
    device_codename: "Surya",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/surya.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/surya",
          vanilla: null,
        },
        maintainer_name: "Skyy丨アラタ",
      }
    ],
  },
  {
    _id: 111,
    slug: "vayu",
    device_image: "https://wiki.lineageos.org/images/devices/vayu.png",
    device_name: "Poco X3 Pro",
    device_codename: "Vayu",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/vayu.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/vayu",
          vanilla: null
        },
        maintainer_name: "ぞうしろかずわ",
      }
    ],
  },
  {
    _id: 106,
    slug: "garnet",
    device_image: "https://i.ibb.co.com/3rtfGZb/garnettt.png",
    device_name: "Poco X6 / Redmi Note 13 Pro",
    device_codename: "Garnet",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/garnet.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/garnet",
          vanilla: null,
        },
        maintainer_name: "Drenzzz.",
      }
    ],
  },
  {
    _id: 109,
    slug: "mondrian",
    device_image: "https://i.ibb.co.com/KN8qnPQ/Xiaomi-mondrian.png",
    device_name: "Poco F5 Pro / Redmi K60",
    device_codename: "Mondrian",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/mondrian.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/mondrian",
          vanilla: null,
        },
        maintainer_name: "NextWorks",
      }
    ],
  },
  {
    _id: 115,
    slug: "peridot",
    device_image: "https://i.ibb.co.com/ydnKsy6/peridott.png",
    device_name: "Poco F6 / Redmi Turbo 3",
    device_codename: "Peridot",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/peridot.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/peridot",
          vanilla: null,
        },
        maintainer_name: "ramshell688",
      }
    ],
  },
  {
    _id: 113,
    slug: "vili",
    device_image: "https://i.ibb.co.com/q9gv4PZ/vili.jpg",
    device_name: "Xiaomi 11T Pro",
    device_codename: "Vili",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/vili.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/vili",
          vanilla: null,
        },
        maintainer_name: "Omar",
      },
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/vili.txt",
        download_links: {
          gapps: null,
          vanilla: "https://sourceforge.net/projects/orionos/files/A15/vili",
        },
        maintainer_name: "Omar",
      }
    ],
  },
  {
    _id: 108,
    slug: "fog",
    device_image: "https://i.ibb.co.com/bHphyP8/redmi-10-c.jpg",
    device_name: "Redmi 10C / 10 Power",
    device_codename: "Fog/Wind/Rain",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/fog.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/fog",
          vanilla: null,
        },
        maintainer_name: "Iverzasterix",
      },
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic-vanilla/changelogs/fog.txt",
        download_links: {
          gapps: null,
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/fog",
        },
        maintainer_name: "Ivz",
      }
    ],
  },
  {
    _id: 114,
    slug: "sky",
    device_image: "https://i.ibb.co.com/frTrB3h/sky.png",
    device_name: "Redmi 12 5G / Poco M6 Pro / Redmi Note 12R",
    device_codename: "Sky",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/sky.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/sky",
          vanilla: null
        },
        maintainer_name: "Dhanush",
      }
    ],
  },
  {
    _id: 110,
    slug: "ysl",
    device_image: "https://i.ibb.co.com/10V5NjG/redmi-s2.jpg",
    device_name: "Redmi S2",
    device_codename: "Ysl",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/ysl.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/ysl",
          vanilla: null
        },
        maintainer_name: "AL",
      }
    ],
  },
  {
    _id: 102,
    slug: "lavender",
    device_image: "https://i.ibb.co.com/gzCk4S1/lavender.png",
    device_name: "Redmi Note 7",
    device_codename: "Lavender",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/lavender.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/lavender",
          vanilla: null
        },
        maintainer_name: "Sã Śâjjãd",
      }
    ],
  },
  {
    _id: 103,
    slug: "ginkgo",
    device_image: "https://wiki.lineageos.org/images/devices/ginkgo.png",
    device_name: "Redmi Note 8/8T",
    device_codename: "Ginkgo",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/ginkgo.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/ginkgo",
          vanilla: null
        },
        maintainer_name: "Hirokixd",
      },
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/ginkgo.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/ginkgo",
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/ginkgo",
        },
        maintainer_name: "Hirokixd",
      }
    ],
  },
  {
    _id: 116,
    slug: "sunny",
    device_image: "https://i.ibb.co.com/mcLv6z0/mojito.webp",
    device_name: "Redmi Note 10",
    device_codename: "Sunny",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/sunny.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/sunny",
          vanilla: null
        },
        maintainer_name: "mnasibzade",
      }
    ],
  },
  {
    _id: 104,
    slug: "sweet",
    device_image: "https://wiki.lineageos.org/images/devices/sweet.png",
    device_name: "Redmi Note 10 Pro",
    device_codename: "Sweet",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/sweet.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/sweet",
          vanilla: null
        },
        maintainer_name: "romi.yusna",
      },
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/sweet.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/sweet",
          vanilla: null,
        },
        maintainer_name: "romi.yusna",
      }
    ],
  },
  {
    _id: 117,
    slug: "mi8937",
    device_image: "https://i.ibb.co.com/TRdbhr6/msm8937.jpg",
    device_name: "Mi8937",
    device_codename: "Mi8937",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/Mi8937_4_19.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/Mi8937_4_19/",
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/Mi8937_4_19/",
        },
        maintainer_name: "Rve",
      }
    ],
  },
  {
    _id: 118,
    slug: "beryllium",
    device_image: "https://i.ibb.co.com/7Jbd0M6/pocophone.jpg",
    device_name: "Pocophone F1",
    device_codename: "Beryllium",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 14",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/beryllium.md",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A14/beryllium",
          vanilla: null,
        },
        maintainer_name: "Rve",
      },
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic-vanilla/changelogs/beryllium.txt",
        download_links: {
          gapps: null,
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/beryllium",
        },
        maintainer_name: "Rve",
      }
    ],
  },
  {
    _id: 120,
    slug: "s666ln",
    device_image: "https://i.ibb.co.com/ym1SfmDb/itel-rs4.jpg",
    device_name: "Itel RS4",
    device_codename: "S666LN",
    device_brand: "itel",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/S666LN.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/S666LN",
          vanilla: null,
        },
        maintainer_name: "⁡⁠HEED",
      }
    ],
  },
  {
    _id: 121,
    slug: "sweet2",
    device_image: "https://i.ibb.co.com/VYv27ny4/sweet2-1.png",
    device_name: "Redmi Note 12 Pro",
    device_codename: "sweet2",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/sweet2.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/sweet2/",
          vanilla: null,
        },
        maintainer_name: "Shakib",
      }
    ],
  },
  {
    _id: 122,
    slug: "haydn",
    device_image: "https://i.ibb.co.com/350mrtYr/234458-0-ktfqea-3.png",
    device_name: "Mi 11X Pro",
    device_codename: "Haydn",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic/changelogs/haydn.txt",
        download_links: {
          gapps: "https://sourceforge.net/projects/orionos/files/A15/haydn",
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/haydn",
        },
        maintainer_name: "Hexdare",
      }
    ],
  },
  {
    _id: 123,
    slug: "marble",
    device_image: "https://i.ibb.co.com/nqrTY7pv/download-1.jpg",
    device_name: "Poco F5 / Redmi Note 12 Turbo",
    device_codename: "Marble",
    device_brand: "xiaomi",
    device_build: [
      {
        version: "Android 15",
        device_changelog: "https://raw.githubusercontent.com/OrionOS-Project/orion_ota/vic-vanilla/changelogs/marble.txt",
        download_links: {
          gapps: null,
          vanilla: "https://sourceforge.net/projects/orionos/files/A15_vanilla/marble",
        },
        maintainer_name: "Maul's",
      }
    ],
  },
]

// get all data
router.get("/device", (req, res) => {
  res.send(deviceData)
});

router.get("/device/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ msg: "Search query is required" });
  }

  const searchResults = deviceData.filter((device) => {
    const searchTerm = query.toLowerCase();
    return (
      device.device_name.toLowerCase().includes(searchTerm) ||
      device.device_codename.toLowerCase().includes(searchTerm) ||
      device.device_brand.toLowerCase().includes(searchTerm)
    );
  });

  if (searchResults.length === 0) {
    return res.status(404).json({ msg: "No devices found matching the search query" });
  }

  res.json(searchResults);
});

// get singgle data by id or slug
router.get("/device/:param", (req, res) => {
  const param = req.params.param;
  let device;

  if (isNaN(param)) {
    device = deviceData.find((item) => item.slug === param);
  } else {
    const deviceId = parseInt(param);
    device = deviceData.find((item) => item._id === deviceId);
  }

  if (!device) {
    return res.status(404).json({msg: "Device not found"});
  }

  res.json(device);
});

// Get devices grouped by brand
router.get("/device/brand/:brand", (req, res) => {
  const brand = req.params.brand;
  const devicesByBrand = deviceData.filter((device) => device.device_brand.toLowerCase() === brand.toLowerCase());

  if (devicesByBrand.length === 0) {
    return res.status(404).json({ msg: "No devices found for this brand" });
  }

  res.json(devicesByBrand);
});


module.exports = router;
