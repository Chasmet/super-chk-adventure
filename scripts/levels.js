window.Levels = {
  createLevel1() {
    return {
      width: Config.worldWidth,
      platforms: [
        { x: 0, y: 308, width: 520, height: 52, type: "ground" },
        { x: 560, y: 292, width: 220, height: 68, type: "ground" },
        { x: 840, y: 272, width: 180, height: 88, type: "ground" },
        { x: 1080, y: 308, width: 300, height: 52, type: "ground" },
        { x: 1440, y: 284, width: 220, height: 76, type: "ground" },
        { x: 1710, y: 308, width: 360, height: 52, type: "ground" },
        { x: 2110, y: 286, width: 290, height: 74, type: "goal" },

        { x: 250, y: 240, width: 90, height: 16, type: "platform" },
        { x: 690, y: 220, width: 90, height: 16, type: "platform" },
        { x: 960, y: 190, width: 90, height: 16, type: "platform" },
        { x: 1540, y: 210, width: 100, height: 16, type: "platform" }
      ],
      goalX: 2310
    };
  }
};
