window.Config = {
  gameWidth: 400,
  gameHeight: 360,
  worldWidth: 2400,
  gravity: 0.75,

  player: {
    width: 34,
    height: 44,
    moveSpeed: 4.2,
    jumpForce: -12.5,
    color: "#ff7a18"
  },

  difficulty: {
    easy: {
      label: "Facile",
      enemySpeed: 1.2,
      enemyCountMultiplier: 0.8,
      timeLimit: 60
    },
    normal: {
      label: "Normal",
      enemySpeed: 1.8,
      enemyCountMultiplier: 1,
      timeLimit: 60
    }
  },

  colors: {
    sky: "#69c9ff",
    ground: "#6cc04a",
    dirt: "#9b5d2f",
    platform: "#d97706",
    platformTop: "#f59e0b",
    bush: "#22c55e",
    hill: "#16a34a",
    coin: "#ffd60a"
  }
};
