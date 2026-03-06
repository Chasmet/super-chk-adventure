window.Enemies = {
  createSet() {
    const difficulty = Config.difficulty[State.selectedDifficulty];
    const speed = difficulty.enemySpeed;

    return [
      {
        type: "turtle",
        x: 620,
        y: 0,
        width: 34,
        height: 28,
        vx: -speed,
        minX: 560,
        maxX: 760,
        color: "#2f9e44"
      },
      {
        type: "frog",
        x: 1180,
        y: 0,
        width: 30,
        height: 26,
        vx: speed * 0.8,
        minX: 1120,
        maxX: 1280,
        color: "#38b000",
        jumpTimer: 0
      },
      {
        type: "hedgehog",
        x: 1720,
        y: 0,
        width: 30,
        height: 24,
        vx: -speed * 1.1,
        minX: 1660,
        maxX: 1840,
        color: "#8d5524"
      }
    ];
  },

  updateAll(delta) {
    for (const enemy of State.enemies) {
      if (enemy.type === "frog") {
        enemy.jumpTimer += delta;
        if (enemy.jumpTimer > 1200) {
          enemy.jumpTimer = 0;
          enemy.vy = -8;
        }
      }

      enemy.vy = (enemy.vy || 0) + Config.gravity * 0.55;
      enemy.x += enemy.vx;
      enemy.y += enemy.vy;

      if (enemy.x < enemy.minX || enemy.x + enemy.width > enemy.maxX) {
        enemy.vx *= -1;
      }

      for (const platform of State.platforms) {
        const wasAbove = enemy.y + enemy.height - enemy.vy <= platform.y;
        const overlapsX =
          enemy.x + enemy.width > platform.x &&
          enemy.x < platform.x + platform.width;
        const overlapsY =
          enemy.y + enemy.height >= platform.y &&
          enemy.y + enemy.height <= platform.y + platform.height + 20;

        if (overlapsX && overlapsY && wasAbove && enemy.vy >= 0) {
          enemy.y = platform.y - enemy.height;
          enemy.vy = 0;
        }
      }
    }
  },

  drawAll(ctx, cameraX) {
    for (const enemy of State.enemies) {
      const x = enemy.x - cameraX;
      const y = enemy.y;

      if (enemy.type === "turtle") {
        ctx.fillStyle = "#2f9e44";
        ctx.fillRect(x + 4, y + 6, 26, 18);
        ctx.fillStyle = "#1b5e20";
        ctx.fillRect(x + 8, y, 18, 10);
      } else if (enemy.type === "frog") {
        ctx.fillStyle = "#38b000";
        ctx.fillRect(x + 2, y + 8, 26, 14);
        ctx.fillStyle = "#70e000";
        ctx.fillRect(x + 6, y, 6, 8);
        ctx.fillRect(x + 18, y, 6, 8);
      } else if (enemy.type === "hedgehog") {
        ctx.fillStyle = "#8d5524";
        ctx.fillRect(x + 3, y + 10, 24, 12);
        ctx.fillStyle = "#5c3b1e";
        ctx.beginPath();
        ctx.moveTo(x + 4, y + 10);
        ctx.lineTo(x + 10, y);
        ctx.lineTo(x + 16, y + 10);
        ctx.lineTo(x + 22, y);
        ctx.lineTo(x + 27, y + 10);
        ctx.fill();
      }
    }
  }
};
