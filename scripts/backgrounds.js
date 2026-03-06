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

  drawLevel1(ctx, cameraX, canvasWidth, canvasHeight) {
    // TEST VISUEL OBLIGATOIRE
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#00ff00";
    ctx.fillRect(-(cameraX * 0.2) % canvasWidth, 40, canvasWidth, 80);

    ctx.fillStyle = "#0000ff";
    ctx.fillRect(-(cameraX * 0.5) % canvasWidth, 140, canvasWidth, 80);

    ctx.fillStyle = "#ffff00";
    ctx.fillRect(-(cameraX * 0.8) % canvasWidth, 240, canvasWidth, 80);

    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    ctx.fillText("TEST BACKGROUNDS OK", 20, 30);
  }
};
