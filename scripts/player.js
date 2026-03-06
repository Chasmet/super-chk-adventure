window.Player = {
  create() {
    return {
      x: 80,
      y: 0,
      width: 34,
      height: 50,
      vx: 0,
      vy: 0,
      onGround: false,
      facing: 1
    };
  },

  update(player, delta) {
    const moveSpeed = Config.player.moveSpeed;
    const jumpForce = Config.player.jumpForce;

    player.vx = 0;

    if (State.input.left) {
      player.vx = -moveSpeed;
      player.facing = -1;
    }

    if (State.input.right) {
      player.vx = moveSpeed;
      player.facing = 1;
    }

    if (State.input.jump && player.onGround) {
      player.vy = jumpForce;
      player.onGround = false;
    }

    player.vy += Config.gravity;
    player.x += player.vx;
    player.y += player.vy;

    this.handlePlatformCollisions(player);

    if (player.x < 0) player.x = 0;
    if (player.x + player.width > Config.worldWidth) {
      player.x = Config.worldWidth - player.width;
    }

    if (player.y > Config.gameHeight + 200) {
      window.Game.resetLevel();
    }
  },

  handlePlatformCollisions(player) {
    player.onGround = false;

    for (const platform of State.platforms) {
      const wasAbove = player.y + player.height - player.vy <= platform.y;
      const overlapsX =
        player.x + player.width > platform.x &&
        player.x < platform.x + platform.width;
      const overlapsY =
        player.y + player.height >= platform.y &&
        player.y + player.height <= platform.y + platform.height + 20;

      if (overlapsX && overlapsY && wasAbove && player.vy >= 0) {
        player.y = platform.y - player.height;
        player.vy = 0;
        player.onGround = true;
      }
    }
  },

  draw(ctx, player, cameraX) {
    const x = player.x - cameraX;
    const y = player.y;
    const bob = player.onGround && Math.abs(player.vx) > 0 ? Math.sin(Date.now() * 0.02) * 1.5 : 0;

    ctx.save();

    if (player.facing === -1) {
      ctx.translate(x + player.width / 2, 0);
      ctx.scale(-1, 1);
      ctx.translate(-(x + player.width / 2), 0);
    }

    const drawX = x;
    const drawY = y + bob;

    // tête
    ctx.fillStyle = "#6b4428";
    ctx.fillRect(drawX + 8, drawY + 2, 18, 16);

    // cheveux
    ctx.fillStyle = "#111111";
    ctx.fillRect(drawX + 7, drawY + 1, 20, 6);

    // barbe
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(drawX + 10, drawY + 12, 14, 4);

    // yeux
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(drawX + 11, drawY + 7, 3, 3);
    ctx.fillRect(drawX + 20, drawY + 7, 3, 3);

    ctx.fillStyle = "#111111";
    ctx.fillRect(drawX + 12, drawY + 8, 1, 1);
    ctx.fillRect(drawX + 21, drawY + 8, 1, 1);

    // torse nu
    ctx.fillStyle = "#8a5a38";
    ctx.fillRect(drawX + 8, drawY + 18, 18, 14);

    // bras
    ctx.fillStyle = "#6b4428";
    ctx.fillRect(drawX + 4, drawY + 20, 4, 12);
    ctx.fillRect(drawX + 26, drawY + 20, 4, 12);

    // pantalon noir
    ctx.fillStyle = "#111111";
    ctx.fillRect(drawX + 8, drawY + 32, 18, 12);

    // jambes
    ctx.fillStyle = "#111111";
    ctx.fillRect(drawX + 9, drawY + 44, 6, 6);
    ctx.fillRect(drawX + 19, drawY + 44, 6, 6);

    // baskets blanches
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(drawX + 7, drawY + 48, 8, 2);
    ctx.fillRect(drawX + 19, drawY + 48, 8, 2);

    ctx.restore();
  }
};
