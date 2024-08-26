const express = require('express');
const router = express.Router();

const galleryData = [
  {
    _id: 102,
    slug: "centauri",
    version: "Centauri",
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
    slug: "cosmic",
    version: "Cosmic",
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
router.get("/gallery", (req, res) => {
  res.send(galleryData)
});

// get singgle data by id or slug
router.get("/gallery/:param", (req, res) => {
  const param = req.params.param;
  let gallery;

  if (isNaN(param)) {
    gallery = galleryData.find((item) => item.slug === param);
  } else {
    const galleryId = parseInt(param);
    gallery = galleryData.find((item) => item._id === galleryId);
  }

  if (!gallery) {
    return res.status(404).json({msg: "Device not found"});
  }

  res.json(gallery);
});

module.exports = router;