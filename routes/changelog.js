const express = require('express');
const router = express.Router();

const changelog = [
  {
    _id: 104,
    date: "July 2024 Pt.3",
    changes: [
      "Drop Adaptive Sound Engine",
      "Apply wakelock for notification sound",
      "Optimize notification scaling/rendering",
      "Never enable dual tone on landscape battery styles",
      "Fix crash after dismissing a split screen pair",
      "Integrate Google Lens into Screenshot UI",
      "Correctly monet theme the new volume panel"
    ]
  },
  {
    _id: 103,
    date: "July 2024 Pt.2",
    changes: [
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
    ]
  },
  {
    _id: 102,
    date: "July 2024",
    changes: [
      "Merge A14 QPR3 July Security Patch",
      "Drop Ambient Customizations",
      "Drop depth Wallpaper feature"
    ]
  },
  {
    _id: 101,
    date: "June 2024",
    changes: [
      "Merge A14 QPR2 Mei Security Patch",
      "Redesign Settings Ui & OrionSpace Dashboard",
      "Add Ambient Customizations",
      "Add Wakelock Blocker",
      "Add Alarms Blocker",
      "Introduce Smart 5G service",
      "Added more custom battery styles",
      "Add Ignore window secure flags",
      "Add Clock bg chip styles",
      "Introduce Adaptive Sound Engine",
      "Lockscreen: add Lockscreen Clock Styles",
      "Lockscreen: Introduce lockscreen widgets",
      "Lockscreen: Add more LockScreen Clock Style",
      "Implement Volume Styles",
      "Hide IME Space Option",
      "Implement Split notification shade changes",
      "Import more IconShapes from Iconify",
      "Add tunings for status bar paddings",
      "Max notification icons settings",
      "Add QS colored icons Option",
      "Add Toggle Enable LTE CA",
      "LS widgets: Add Bt, Wifi, Data, Ringer toggle widgets",
      "Add Depth Wallpaper feature",
      "Add toggle for volume percent",
      "Implement User Switcher in Lockscreen",
      "Add Media player mode toggle",
      "Introduce X-reality display engine mode",
      "Implement keyguard user switcher",
      "Add notch bar killer",
      "Introduce Healthy charge service",
      "Redesign UDFPS and lock icons",
      "Introduce Adaptive sound engine service",
      "and more"
    ]
  }
]

// get all data
router.get("/changelog", (req, res) => {
  res.send(changelog)
});

module.exports = router;
