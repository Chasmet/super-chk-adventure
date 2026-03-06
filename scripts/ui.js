window.UI = {
  init() {
    this.levelLabel = document.getElementById("levelLabel");
    this.difficultyLabel = document.getElementById("difficultyLabel");
    this.scoreLabel = document.getElementById("scoreLabel");
    this.timeLabel = document.getElementById("timeLabel");
    this.menuOverlay = document.getElementById("menuOverlay");
    this.easyBtn = document.getElementById("easyBtn");
    this.normalBtn = document.getElementById("normalBtn");
    this.startBtn = document.getElementById("startBtn");
  },

  bindMenuEvents() {
    this.easyBtn.addEventListener("click", () => {
      State.selectedDifficulty = "easy";
      this.refreshDifficultyButtons();
      this.updateHUD();
    });

    this.normalBtn.addEventListener("click", () => {
      State.selectedDifficulty = "normal";
      this.refreshDifficultyButtons();
      this.updateHUD();
    });

    this.startBtn.addEventListener("click", () => {
      if (window.Game && typeof window.Game.start === "function") {
        window.Game.start();
      }
    });
  },

  refreshDifficultyButtons() {
    this.easyBtn.classList.toggle("active", State.selectedDifficulty === "easy");
    this.normalBtn.classList.toggle("active", State.selectedDifficulty === "normal");
  },

  updateHUD() {
    const difficultyConfig = Config.difficulty[State.selectedDifficulty];

    this.levelLabel.textContent = `Niveau ${State.level}`;
    this.difficultyLabel.textContent = difficultyConfig.label;
    this.scoreLabel.textContent = `Score: ${State.score}`;
    this.timeLabel.textContent = `Temps: ${Math.max(0, Math.ceil(State.timeLeft))}`;
  },

  hideMenu() {
    this.menuOverlay.classList.add("hidden");
  },

  showMenu() {
    this.menuOverlay.classList.remove("hidden");
  }
};
