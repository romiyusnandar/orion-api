# API for get all information about OrionOS
For now u just can get /device and /developer

# Instalation

- Run in your terminal

```sh
git clone https://github.com/romiyusnandar/orion-api.git

cd orion-api

npm install

npm start
```

- Server akan berjalan di http://localhost:7000

# Routes

| Endpoint  | Params | Description                                                 |
| --------- | ------ | ----------------------------------------------------------- |
| /device   |        | To get all device data                                      |

### Example request

```js
(async () => {
  const response = await fetch("http://localhost:7000/device");
  const result = await response.json();

  console.log(result);
})();
```

### Example Response
```json
{
  "_id": 101,
  "slug": "rock",
  "device_image": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-87043382/xiaomi_xiaomi_poco_m5_full31_mnso77ok.jpg",
  "device_name": "Poco M5",
  "device_codename": "Rock",
  "device_changelog": "/",
  "maintainer_name": "Onle",
  "build_status": "Stable",
  "official_status": "• Active Maintained",
  "android_version": "14.0",
  "download_link": "/",
  "release_frequncy": "Monthly",
  "require_custom_recovery": "Yes With Ofox Recomended"
}
```

# Another guide is [here](https://orion-apiv1.vercel.app/)