const express = require('express');
const router = express.Router();

const deviceData = [
  // {
  //   _id: 105,
  //   slug: "tissot",
  //   device_image: "https://i.ibb.co.com/Yd7f6HV/tissot.jpg",
  //   device_name: "Mi A1",
  //   device_codename: "Tissot",
  //   device_brand: "xiaomi",
  //   device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/tissot.md",
  //   maintainer_name: "RomiYusnandar",
  //   build_status: "Stable",
  //   official_status: "• Active Maintained",
  //   android_version: "14.0",
  //   download_link: "/",
  //   release_frequency: "Monthly",
  //   require_custom_recovery: "Yes"
  // },
  {
    _id: 101,
    slug: "rock",
    device_image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-87043382/xiaomi_xiaomi_poco_m5_full31_mnso77ok.jpg",
    device_name: "Poco M5",
    device_codename: "Rock",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/rock.md",
    maintainer_name: "Onle",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/rock",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
  },
  {
    _id: 107,
    slug: "surya",
    device_image: "https://wiki.lineageos.org/images/devices/surya.png",
    device_name: "Poco X3 NFC",
    device_codename: "Surya",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/surya.md",
    maintainer_name: "Skyy丨アラタ",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/surya",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
  },
  {
    _id: 106,
    slug: "garnet",
    device_image: "https://i.ibb.co.com/F0gJVc6/garnet.png",
    device_name: "Poco X6/Redmi Note 13 Pro",
    device_codename: "Garnet",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/garnet.md",
    maintainer_name: "rmdn.",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/garnet",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
  },
  // {
  //   _id: 102,
  //   slug: "lavender",
  //   device_image: "https://i.ibb.co.com/gzCk4S1/lavender.png",
  //   device_name: "Redmi Note 7",
  //   device_codename: "Lavender",
  //   device_brand: "xiaomi",
  //   device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/lavender.md",
  //   maintainer_name: "Onle",
  //   build_status: "Stable",
  //   official_status: "• Active Maintained",
  //   android_version: "14.0",
  //   download_link: "/",
  //   release_frequency: "Monthly",
  //   require_custom_recovery: "Yes"
  // },
  {
    _id: 108,
    slug: "fog",
    device_image: "https://i.ibb.co.com/bHphyP8/redmi-10-c.jpg",
    device_name: "Redmi 10C/10 Power",
    device_codename: "Fog/Wind/Rain",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/fog.md",
    maintainer_name: "Iverzasterix",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/fog",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
  },
  {
    _id: 103,
    slug: "ginkgo",
    device_image: "https://wiki.lineageos.org/images/devices/ginkgo.png",
    device_name: "Redmi Note 8/8T",
    device_codename: "Ginkgo",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/ginkgo.md",
    maintainer_name: "Hirokixd",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/ginkgo",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
  },
  {
    _id: 104,
    slug: "sweet",
    device_image: "https://wiki.lineageos.org/images/devices/sweet.png",
    device_name: "Redmi Note 10 Pro",
    device_codename: "Sweet",
    device_brand: "xiaomi",
    device_changelog: "https://raw.githubusercontent.com/OrionOS-prjkt/android_vendor_OrionOTA/14.0/changelogs/sweet.md",
    maintainer_name: "RomiYusnandar",
    build_status: "Stable",
    official_status: "• Active Maintained",
    android_version: "14.0",
    download_link: "https://sourceforge.net/projects/orionos/files/A14/sweet",
    release_frequency: "Monthly",
    require_custom_recovery: "Yes"
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