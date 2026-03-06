window.Backgrounds = {
  images: {},

  init() {
    const paths = [
      "assets/backgrounds/level1_back_1.png",
      "assets/backgrounds/level1_back_2.png",
      "assets/backgrounds/level1_mid_1.png",
      "assets/backgrounds/level1_mid_2.png",
      "assets/backgrounds/level1_front_1.png",
      "assets/backgrounds/level1_front_2.png"
    ];

    for (const path of paths) {
      const img = new Image();
      img.src = path;
      this.images[path] = img;
    }
  },

  getLevel1Layers() {
    return {
      back: [
        this.images["assets/backgrounds/level1_back_1.png"],
        this.images["assets/backgrounds/level1_back_2.png"]
      ],
      mid: [
        this.images["assets/backgrounds/level1_mid_1.png"],
        this.images["assets/backgrounds/level1_mid_2.png"]
      ],
      front: [
        this.images["assets/backgrounds/level1_front_1.png"],
        this.images["assets/backgrounds/level1_front_2.png"]
      ]
    };
  },

  drawRepeatingLayer(ctx, images, speedFactor, cameraX, canvasWidth, canvasHeight, y = 0, h = canvasHeight) {
    if (!images || images.length === 0) return;

    const layerOffset = cameraX * speedFactor;
    const tileWidth = canvasWidth;
    const startX = - (layerOffset % tileWidth) - tileWidth;

    for (let i = 0; i < 4; i++) {
      const drawX = startX + i * tileWidth;
      const image = images[i % images.length];

      if (image && image.complete && image.naturalWidth > 0) {
        ctx.drawImage(image, drawX, y, tileWidth, h);
      }
    }
  },

  drawLevel1(ctx, cameraX, canvasWidth, canvasHeight) {
    const layers = this.getLevel1Layers();

    this.drawRepeatingLayer(ctx, layers.back, 0.2, cameraX, canvasWidth, canvasHeight, 0, canvasHeight);
    this.drawRepeatingLayer(ctx, layers.mid, 0.45, cameraX, canvasWidth, canvasHeight, 0, canvasHeight);
    this.drawRepeatingLayer(ctx, layers.front, 0.7, cameraX, canvasWidth, canvasHeight, 0, canvasHeight);
  }
};
