const express = require('express');
const router = express.Router();

const changelog = [
    {
    _id: 105,
    date: "August 2024",
    changes: [
      "Bump version to Centauri"
      "Merge August 2024 Security Patch"
      "OrionSpaces: Integrate into new design of interface menu"
      "OrionSpaces: Improvements for cardview shape aspect ratio"
      "Drop Alarm Blocker & Wakelock Blocker"
      "Optimize notification scaling/rendering"
      "Apply wakelock for notification sound"
      "SystemUI: Remove composite alpha from additional scrim on lockscreen"
      "SystemUI: Hide face unlock recognition animation on UDFPS devices"
      "SystemUI: adjustments default staturbar padding"
      "SystemUI: Fix crash when click rotation button on keyguard"
      "SystemUI: Fix crash when switching QS view parents"
      "base: Improve height CollapsingToolbarBar"
      "PixelPropUtils: Add support for JSON based (PIF) spoofing"
      "PixelPropUtils: Implement json-based game spoofing"
      "PixelPropUtils: Switch fingerprint to akita"
      "SystemUI: Show island notification on landscape"
      "SystemUI: Allow setting QS rows"
      "Remove three finger swipe to screenshot"
      "Add three fingers swipe actions"
      "Improvements for three fingers swipe actions"
      "PixelPropUtils: Do not spoof mainline models to google photos"
      "SystemUI: Drop SystemUIClocks-NumOverlap"
      "Settings: add preference for Build Status information"
      "Settings: Update the battery saver scheduler minimum level"
      "Settings: Hide app feature"
      "Launcher3: Implement long press nav bar to search gesture"
      "Launcher3: Enable freeform shortcut when desktop mode is disabled"
      "And more"
    ]
  },
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
      "Correctly monet theme the new volume panel",
      "Fix Notification Sound After Reboot"
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
