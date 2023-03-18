var APP_DATA = {
  "scenes": [
    {
      "id": "0-main",
      "name": "Main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6289113573035756,
        "pitch": 0.0016813298471305416,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.6289113573035756,
          "pitch": 0.0016813298471305416,
          "rotation": 4.71238898038469,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5801942535364066,
        "pitch": 0.02021777393552071,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.5801942535364066,
          "pitch": 0.02021777393552071,
          "rotation": 0,
          "target": "0-main"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
