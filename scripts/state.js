window.State = {
  started: false,
  selectedDifficulty: "easy",
  level: 1,
  score: 0,
  timeLeft: 60,
  cameraX: 0,
  lastTime: 0,
  timeAccumulator: 0,
  canvas: null,
  ctx: null,
  player: null,
  platforms: [],
  enemies: [],
  input: {
    left: false,
    right: false,
    jump: false,
    action: false
  }
};
