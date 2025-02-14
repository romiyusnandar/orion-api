const express = require('express');
const router = express.Router();

const galleryData = [
  {
    _id: 104,
    slug: "hydroxide",
    version: "Hydroxide",
    screenshot: [
      { image: "https://i.ibb.co.com/zVYYt1nx/photo-6159137657318392047-w.jpg" },
      { image: "https://i.ibb.co.com/fVG4r9wG/photo-6159137657318392048-w.jpg" },
      { image: "https://i.ibb.co.com/9kT7nfbQ/photo-6158981110055421395-w.jpg" },
      { image: "https://i.ibb.co.com/XxLPyM6Z/photo-6158981110055421396-w.jpg" },
      { image: "https://i.ibb.co.com/C5CXvgNC/photo-6159137657318392049-w.jpg" },
      { image: "https://i.ibb.co.com/v6zbdRFS/photo-6159137657318392050-w.jpg" },
      { image: "https://i.ibb.co.com/VYF6W3mT/photo-6159137657318392051-w.jpg" },
      { image: "https://i.ibb.co.com/PZq06rXc/photo-6159137657318392052-w.jpg" }
    ]
  },
  {
    _id: 103,
    slug: "andromeda",
    version: "Andromeda",
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

// Get all gallery data
router.get("/gallery", (req, res) => {
  res.json({
    status: true,
    message: "Success",
    data: galleryData
  });
});

// Get single gallery data by id or slug
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
    return res.status(404).json({
      status: false,
      message: "Gallery not found"
    });
  }

  res.json({
    status: true,
    message: "Success",
    data: gallery
  });
});

module.exports = router;