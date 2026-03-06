window.Backgrounds = {
  images: {},

  init() {
    const files = [
      "level1_back_1.png",
      "level1_back_2.png",
      "level1_mid_1.png",
      "level1_mid_2.png",
      "level1_front_1.png",
      "level1_front_2.png"
    ];

    for (const file of files) {
      const img = new Image();
      img.src = `assets/backgrounds/${file}`;
      this.images[file] = img;
    }
  },

  drawLayer(ctx, fileNames, speed, cameraX, canvasWidth, canvasHeight) {
    const offset = cameraX * speed;
    const tileWidth = canvasWidth;
    const startX = -(offset % tileWidth) - tileWidth;

    for (let i = 0; i < 4; i++) {
      const fileName = fileNames[i % fileNames.length];
      const img = this.images[fileName];
      const x = startX + i * tileWidth;

      if (img && img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, x, 0, tileWidth, canvasHeight);
      }
    }
  },

  drawLevel1(ctx, cameraX, canvasWidth, canvasHeight) {
    ctx.fillStyle = "#7fd3ff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    this.drawLayer(
      ctx,
      ["level1_back_1.png", "level1_back_2.png"],
      0.2,
      cameraX,
      canvasWidth,
      canvasHeight
    );

    this.drawLayer(
      ctx,
      ["level1_mid_1.png", "level1_mid_2.png"],
      0.45,
      cameraX,
      canvasWidth,
      canvasHeight
    );

    this.drawLayer(
      ctx,
      ["level1_front_1.png", "level1_front_2.png"],
      0.7,
      cameraX,
      canvasWidth,
      canvasHeight
    );
  }
};
