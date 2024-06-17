const express = require('express');
const router = express.Router();

const deviceData = [
  {
    _id: 101,
    slug: "rock",
    device_image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-87043382/xiaomi_xiaomi_poco_m5_full31_mnso77ok.jpg",
    device_name: "Poco M5",
    device_codename: "Rock",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/rock.md",
    maintainer_name: "Onle",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "/",
    release_frequncy: "Monthly",
    require_custom_recovery: "Yes With Ofox Recomended"
  },
  {
    _id: 102,
    slug: "lavender",
    device_image: "https://i.ibb.co.com/gzCk4S1/lavender.png",
    device_name: "Redmi Note 7",
    device_codename: "Lavender",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/lavender.md",
    maintainer_name: "Onle",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "/",
    release_frequncy: "Monthly",
    require_custom_recovery: "Yes With Ofox Recomended"
  },
  {
    _id: 103,
    slug: "ginkgo",
    device_image: "https://wiki.lineageos.org/images/devices/ginkgo.png",
    device_name: "Redmi Note 8/8T",
    device_codename: "Ginkgo",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/ginkgo.md",
    maintainer_name: "Hiroki",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "/",
    release_frequncy: "Monthly",
    require_custom_recovery: "Yes With Ofox Recomended"
  },
  {
    _id: 104,
    slug: "sweet",
    device_image: "https://wiki.lineageos.org/images/devices/sweet.png",
    device_name: "Redmi Note 10 Pro",
    device_codename: "Sweet",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/sweet.md",
    maintainer_name: "Romiyusna",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "/",
    release_frequncy: "Monthly",
    require_custom_recovery: "Yes With Ofox Recomended"
  },
]

// get all data
router.get("/device", (req, res) => {
  res.send(deviceData)
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


module.exports = router;