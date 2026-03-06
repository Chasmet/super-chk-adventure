window.Game = {
  init() {
    State.canvas = document.getElementById("gameCanvas");
    State.ctx = State.canvas.getContext("2d");

    UI.init();
    UI.bindMenuEvents();
    UI.refreshDifficultyButtons();
    UI.updateHUD();

    Input.init();
    Backgrounds.init();

    this.resetLevel();
    this.render();
  },

  start() {
    State.started = true;
    const difficulty = Config.difficulty[State.selectedDifficulty];
    State.timeLeft = difficulty.timeLimit;
    State.lastTime = performance.now();
    State.timeAccumulator = 0;
    UI.hideMenu();
    requestAnimationFrame(this.loop.bind(this));
  },

  resetLevel() {
    const levelData = Levels.get(State.level);

    Config.worldWidth = levelData.width;
    State.cameraX = 0;
    State.player = Player.create();
    State.platforms = levelData.platforms.map(platform => ({ ...platform }));
    State.enemies = Enemies.createSet();
    State.timeLeft = Config.difficulty[State.selectedDifficulty].timeLimit;
    State.score = State.score || 0;

    this.placeEntitiesOnGround();
    UI.updateHUD();
  },

  placeEntitiesOnGround() {
    const placeOnPlatform = (entity) => {
      for (const platform of State.platforms) {
        const fits =
          entity.x + entity.width > platform.x &&
          entity.x < platform.x + platform.width;

        if (fits) {
          entity.y = platform.y - entity.height;
          entity.vy = 0;
          return;
        }
      }
      entity.y = 200;
    };

    placeOnPlatform(State.player);

    for (const enemy of State.enemies) {
      enemy.vy = 0;
      enemy.alive = true;
      placeOnPlatform(enemy);
    }
  },

  loop(timestamp) {
    if (!State.started) return;

    const delta = timestamp - State.lastTime;
    State.lastTime = timestamp;

    State.timeAccumulator += delta;
    if (State.timeAccumulator >= 1000) {
      State.timeAccumulator -= 1000;
      State.timeLeft -= 1;
      UI.updateHUD();

      if (State.timeLeft <= 0) {
        alert("Temps écoulé");
        State.score = 0;
        State.level = 1;
        this.resetLevel();
        UI.showMenu();
        State.started = false;
        this.render();
        return;
      }
    }

    this.update(delta);
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  },

  update(delta) {
    Player.update(State.player, delta);
    Enemies.updateAll(delta);
    this.updateCamera();
    this.checkEnemyCollisions();
    this.checkGoal();
    UI.updateHUD();
  },

  updateCamera() {
    const targetX = State.player.x - Config.gameWidth * 0.35;
    State.cameraX = Math.max(0, Math.min(targetX, Config.worldWidth - Config.gameWidth));
  },

  checkEnemyCollisions() {
    for (const enemy of State.enemies) {
      if (!enemy.alive) continue;

      const overlapX =
        State.player.x < enemy.x + enemy.width &&
        State.player.x + State.player.width > enemy.x;

      const overlapY =
        State.player.y < enemy.y + enemy.height &&
        State.player.y + State.player.height > enemy.y;

      if (!overlapX || !overlapY) continue;

      const playerBottom = State.player.y + State.player.height;
      const enemyTop = enemy.y;

      const stomp =
        State.player.vy > 0 &&
        playerBottom <= enemyTop + 16;

      if (stomp) {
        enemy.alive = false;
        enemy.x = -9999;
        enemy.y = -9999;
        enemy.vx = 0;
        enemy.vy = 0;

        State.player.vy = -9;
        State.score += 100;
        UI.updateHUD();
      } else {
        alert("Touché par un ennemi");
        State.score = 0;
        State.level = 1;
        this.resetLevel();
        UI.showMenu();
        State.started = false;
        this.render();
        return;
      }
    }
  },

  checkGoal() {
    const levelData = Levels.get(State.level);

    if (State.player.x >= levelData.goalX) {
      if (State.level < 10) {
        alert(`Niveau ${State.level} terminé !`);
        State.level += 1;
        this.resetLevel();
      } else {
        alert("Bravo ! Tu as terminé les 10 niveaux !");
        State.score = 0;
        State.level = 1;
        this.resetLevel();
        UI.showMenu();
        State.started = false;
      }
    }
  },

  drawBackground() {
    if (State.level === 1) {
      Backgrounds.drawLevel1(State.ctx, State.cameraX, Config.gameWidth, Config.gameHeight);
      return;
    }

    State.ctx.fillStyle = "#87ceeb";
    State.ctx.fillRect(0, 0, Config.gameWidth, Config.gameHeight);
  },

  drawPlatforms() {
    const ctx = State.ctx;
    const levelData = Levels.get(State.level);

    for (const platform of State.platforms) {
      const x = platform.x - State.cameraX;
      const y = platform.y;

      if (x + platform.width < 0 || x > Config.gameWidth) continue;

      if (platform.type === "ground" || platform.type === "goal") {
        ctx.fillStyle = Config.colors.ground;
        ctx.fillRect(x, y, platform.width, platform.height);

        ctx.fillStyle = Config.colors.dirt;
        ctx.fillRect(x, y + 14, platform.width, platform.height - 14);

        ctx.fillStyle = "#3f9c35";
        for (let i = 0; i < platform.width; i += 28) {
          ctx.fillRect(x + i, y + 8, 10, 6);
        }
      } else {
        ctx.fillStyle = Config.colors.platformTop;
        ctx.fillRect(x, y, platform.width, 8);

        ctx.fillStyle = Config.colors.platform;
        ctx.fillRect(x, y + 8, platform.width, platform.height - 8);
      }
    }

    const goalX = levelData.goalX - State.cameraX;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(goalX, 180, 8, 128);
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(goalX + 8, 180, 34, 24);
  },

  render() {
    const ctx = State.ctx;
    ctx.clearRect(0, 0, Config.gameWidth, Config.gameHeight);

    this.drawBackground();
    this.drawPlatforms();
    Enemies.drawAll(ctx, State.cameraX);
    Player.draw(ctx, State.player, State.cameraX);
  }
};
