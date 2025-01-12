const express = require('express');
const router = express.Router();

const source = [
  {
    _id: 104,
    android_version: 14.0,
    img: "https://i.ibb.co.com/9w0CgyH/photo-2025-01-09-17-49-05.jpg",
    codename: "DarkMatter",
    slug: "dark-matter",
    date: "November 2024",
    description: "Dark matter is a mysterious, invisible substance that makes up about 27% of the universe, influencing gravity and the motion of galaxies but emitting no light or energy.",
    changes: [
      "Merge November 2024 Security patch",
      "Bump version to DarkMatter",
      "Contributor release"
    ],
    screenshot: []
  },
  {
    _id: 103,
    android_version: 14.0,
    img: "https://i.ibb.co.com/7JFD2Cz/photo-2025-01-09-17-42-12.jpg",
    codename: "Andromeda",
    date: "September 2024",
    slug: "andromeda",
    description: "Centauri refers to a star system in the constellation Centaurus, best known for Alpha Centauri, the closest star system to Earth, which includes three stars: Alpha Centauri A, Alpha Centauri B, and Proxima Centauri. Proxima Centauri is the nearest known star to the Sun and hosts a potentially habitable exoplanet, Proxima b.",
    changes: [
      "Merge September 2024 Security patch",
      "Bump version to Andromeda",
      "More improvements for three finger swipe",
      "BrightnessController: Prevent possible memory leak",
      "PixelPropsUtils: update to latest komodo beta",
      "SystemUI: BatteryController: Fix build of Car SystemUI",
      "BatteryMeterView: Battery icon available by default",
      "BatteryStyles: Handle visibility from controller only",
      "Launcher3: Fix keyboard disappear on empty search",
      "Launcher3: Quickspace: Rewrite for now playing",
      "Improve the use of pointer",
      "GameSpace: Introduce QuickStart App in Freeform",
      "Etc"
    ],
    screenshot: [
      { image: "https://i.ibb.co.com/fY7cMpn/photo-2024-10-08-20-25-38.jpg" },
      { image: "https://i.ibb.co.com/59ZhdPv/photo-2024-10-08-20-25-40.jpg" },
      { image: "https://i.ibb.co.com/WzkyRG7/photo-2024-10-08-20-25-47.jpg" },
      { image: "https://i.ibb.co.com/0r7WkJ9/photo-2024-10-08-20-25-42.jpg" },
      { image: "https://i.ibb.co.com/sJ22C4g/photo-2024-10-08-20-25-34.jpg" },
      { image: "https://i.ibb.co.com/Fz0nYGV/photo-2024-10-08-20-25-31.jpg" },
      { image: "https://i.ibb.co.com/P91zYWq/photo-2024-10-08-20-25-28.jpg" }
    ]
  },
  {
    _id: 102,
    android_version: 14.0,
    img: "https://i.ibb.co.com/c6ffNWG/photo-2025-01-09-17-36-25.jpg",
    codename: "Centauri",
    slug: "centauri",
    date: "August 2024",
    description: "Centauri refers to a star system in the constellation Centaurus, best known for Alpha Centauri, the closest star system to Earth, which includes three stars: Alpha Centauri A, Alpha Centauri B, and Proxima Centauri. Proxima Centauri is the nearest known star to the Sun and hosts a potentially habitable exoplanet, Proxima b.",
    changes: [
      "Bump version to Centauri",
      "Merge August 2024 Security Patch",
      "OrionSpaces: Integrate into new design of interface menu",
      "OrionSpaces: Improvements for cardview shape aspect ratio",
      "Drop Alarm Blocker & Wakelock Blocker",
      "Optimize notification scaling/rendering",
      "Apply wakelock for notification sound",
      "SystemUI: Remove composite alpha from additional scrim on lockscreen",
      "SystemUI: Hide face unlock recognition animation on UDFPS devices",
      "SystemUI: adjustments default staturbar padding",
      "SystemUI: Fix crash when click rotation button on keyguard",
      "SystemUI: Fix crash when switching QS view parents",
      "base: Improve height CollapsingToolbarBar",
      "PixelPropUtils: Add support for JSON based (PIF) spoofing",
      "PixelPropUtils: Implement json-based game spoofing",
      "PixelPropUtils: Switch fingerprint to akita",
      "SystemUI: Show island notification on landscape",
      "SystemUI: Allow setting QS rows",
      "Remove three finger swipe to screenshot",
      "Add three fingers swipe actions",
    ],
    screenshot: [
      { image: "https://i.ibb.co.com/S5L4x7G/photo-2024-08-26-12-33-44.jpg" },
      { image: "https://i.ibb.co.com/SsV2y7X/photo-2024-08-26-12-33-42.jpg" },
      { image: "https://i.ibb.co.com/QF9KV32/photo-2024-08-26-12-33-40.jpg" },
      { image: "https://i.ibb.co.com/fFjCrqP/photo-2024-08-26-12-33-38.jpg" },
      { image: "https://i.ibb.co.com/SfkrX3f/photo-2024-08-26-12-33-37.jpg" },
      { image: "https://i.ibb.co.com/s6SDp3Q/photo-2024-08-26-12-33-35.jpg" },
      { image: "https://i.ibb.co.com/Z6c6Tdr/photo-2024-08-26-12-33-31.jpg" },
      { image: "https://i.ibb.co.com/N9J3cf6/photo-2024-08-26-12-33-29.jpg" },
      { image: "https://i.ibb.co.com/jg6yqXK/photo-2024-08-26-12-33-28.jpg" },
      { image: "https://i.ibb.co.com/5GsdTCb/photo-2024-08-26-12-33-26.jpg" },
      { image: "https://i.ibb.co.com/KxR1vbw/photo-2024-08-26-12-33-24.jpg" },
      { image: "https://i.ibb.co.com/XX3B3zT/photo-2024-08-26-12-33-22.jpg" },
      { image: "https://i.ibb.co.com/mcbtM2X/photo-2024-08-26-12-33-19.jpg" },
      { image: "https://i.ibb.co.com/ncZSxXf/photo-2024-08-26-12-33-16.jpg" },
      { image: "https://i.ibb.co.com/L9mj4CT/photo-2024-08-26-12-33-14.jpg" },
      { image: "https://i.ibb.co.com/cY3FmMV/photo-2024-08-26-12-33-10.jpg" },
    ]
  },
  {
    _id: 101,
    android_version: 14.0,
    img: "https://i.ibb.co.com/XWRL9Nd/photo-2025-01-09-17-26-33.jpg",
    codename: "Cosmic",
    slug: "cosmic",
    date: "July 2024",
    description: "Cosmic is a term that refers to anything related to the universe beyond Earth's atmosphere, including celestial phenomena such as stars, galaxies, black holes, and the vast structures that define the cosmos.",
    changes: [
      "Merge A14 QPR3 July Security Patch",
      "Drop Ambient Customizations",
      "Drop depth Wallpaper feature",
      "Redesign Icon OrionSpace Dashboard",
      "Settings: Change Icon colors background",
      "Redesign Homepage Settings Icons",
      "Redesign about phone section",
      "Add back depth wallpaper features",
      "Import xdroid-OSS collapsing toolbar layout",
      "Implement glass blur effect",
      "Fix Udfps animation positioning logic",
      "SystemUI: Improve per-app volume feature",
      "SystemUI: Simplify volume percent checks",
      "Add Poppins font",
      "Add Udfps Icon",
      "Hide screen off udfps, if udfps animations/icons are not installed",
      "Improved Performance"
    ],
    screenshot: [
      { image: "https://i.ibb.co.com/CbS97Yk/Screenshot-20240711-061124-Settings.png" },
      { image: "https://i.ibb.co.com/DpxjcPZ/Screenshot-20240711-060916-Settings.png" },
      { image: "https://i.ibb.co.com/SPjsN3s/Screenshot-20240711-060918-Settings.png" },
      { image: "https://i.ibb.co.com/LP6Dk31/Screenshot-20240711-060908-Settings.png" },
      { image: "https://i.ibb.co.com/R4FgFQV/Screenshot-20240711-060841-Orion-OS-Home.png" },
      { image: "https://i.ibb.co.com/gZ3KLTD/Screenshot-20240711-060856-Orion-OS-Home.png" },
      { image: "https://i.ibb.co.com/RzS33v7/Screenshot-20240711-060845-Orion-OS-Home.png" },
      { image: "https://i.ibb.co.com/q7DdWPC/Screenshot-20240711-060931-Settings.png" },
      { image: "https://i.ibb.co.com/CMFtDsB/Screenshot-20240711-060946-Settings.png" },
      { image: "https://i.ibb.co.com/M92Gfxf/Screenshot-20240711-061549-Settings.png" },
      { image: "https://i.ibb.co.com/ZKbDfy1/Screenshot-20240711-061113-Settings.png" },
      { image: "https://i.ibb.co.com/q1z1tPx/Screenshot-20240711-061004-Settings.png" },
      { image: "https://i.ibb.co.com/KVSt5rd/Screenshot-20240711-061001-Settings.png" },
      { image: "https://i.ibb.co.com/v4XNMsc/Screenshot-20240711-061019-Settings.png" },
      { image: "https://i.ibb.co.com/M92Gfxf/Screenshot-20240711-061549-Settings.png" }
    ]
  }
]

// get all data
router.get("/source", (req, res) => {
  res.send(source)
});

// get data by slug
router.get("/source/:slug", (req, res) => {
  const slug = req.params.slug;
  const result = source.find(item => item.slug === slug);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: "Source not found" });
  }
});

module.exports = router;
