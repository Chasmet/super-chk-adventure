window.Player = {
  create() {
    return {
      x: 80,
      y: 0,
      width: Config.player.width,
      height: Config.player.height,
      vx: 0,
      vy: 0,
      onGround: false,
      color: Config.player.color,
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
    const screenX = player.x - cameraX;
    const screenY = player.y;

    ctx.save();

    ctx.fillStyle = "#ffd7b3";
    ctx.fillRect(screenX + 8, screenY + 2, 18, 16);

    ctx.fillStyle = "#ff7a18";
    ctx.fillRect(screenX + 6, screenY + 18, 22, 16);

    ctx.fillStyle = "#2563eb";
    ctx.fillRect(screenX + 7, screenY + 34, 10, 10);
    ctx.fillRect(screenX + 17, screenY + 34, 10, 10);

    ctx.fillStyle = "#1f2937";
    ctx.fillRect(screenX + 10, screenY + 7, 3, 3);
    ctx.fillRect(screenX + 20, screenY + 7, 3, 3);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(screenX + 3, screenY + 20, 4, 12);
    ctx.fillRect(screenX + 27, screenY + 20, 4, 12);

    ctx.restore();
  }
};
