window.Levels = {
  get(level) {
    const levels = {
      1: this.createLevel1(),
      2: this.createLevel2(),
      3: this.createLevel3(),
      4: this.createLevel4(),
      5: this.createLevel5(),
      6: this.createLevel6(),
      7: this.createLevel7(),
      8: this.createLevel8(),
      9: this.createLevel9(),
      10: this.createLevel10()
    };

    return levels[level] || levels[1];
  },

  createLevel1() {
    return {
      width: 2400,
      theme: "prairie",
      goalX: 2310,
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
      ]
    };
  },

  createLevel2() {
    return {
      width: 2500,
      theme: "grotte",
      goalX: 2410,
      platforms: [
        { x: 0, y: 308, width: 360, height: 52, type: "ground" },
        { x: 420, y: 280, width: 180, height: 80, type: "ground" },
        { x: 680, y: 308, width: 240, height: 52, type: "ground" },
        { x: 980, y: 286, width: 200, height: 74, type: "ground" },
        { x: 1260, y: 308, width: 220, height: 52, type: "ground" },
        { x: 1540, y: 270, width: 180, height: 90, type: "ground" },
        { x: 1810, y: 308, width: 250, height: 52, type: "ground" },
        { x: 2130, y: 286, width: 370, height: 74, type: "goal" },

        { x: 300, y: 220, width: 80, height: 16, type: "platform" },
        { x: 860, y: 230, width: 100, height: 16, type: "platform" },
        { x: 1450, y: 210, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel3() {
    return {
      width: 2550,
      theme: "foret",
      goalX: 2460,
      platforms: [
        { x: 0, y: 308, width: 460, height: 52, type: "ground" },
        { x: 520, y: 290, width: 170, height: 70, type: "ground" },
        { x: 760, y: 308, width: 230, height: 52, type: "ground" },
        { x: 1070, y: 278, width: 180, height: 82, type: "ground" },
        { x: 1330, y: 308, width: 200, height: 52, type: "ground" },
        { x: 1600, y: 286, width: 170, height: 74, type: "ground" },
        { x: 1840, y: 308, width: 220, height: 52, type: "ground" },
        { x: 2120, y: 268, width: 150, height: 92, type: "ground" },
        { x: 2320, y: 286, width: 230, height: 74, type: "goal" },

        { x: 350, y: 210, width: 90, height: 16, type: "platform" },
        { x: 900, y: 195, width: 90, height: 16, type: "platform" },
        { x: 1450, y: 220, width: 100, height: 16, type: "platform" },
        { x: 2180, y: 190, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel4() {
    return {
      width: 2600,
      theme: "desert",
      goalX: 2510,
      platforms: [
        { x: 0, y: 308, width: 320, height: 52, type: "ground" },
        { x: 390, y: 290, width: 160, height: 70, type: "ground" },
        { x: 620, y: 308, width: 220, height: 52, type: "ground" },
        { x: 910, y: 280, width: 140, height: 80, type: "ground" },
        { x: 1120, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1370, y: 270, width: 170, height: 90, type: "ground" },
        { x: 1620, y: 308, width: 180, height: 52, type: "ground" },
        { x: 1880, y: 286, width: 160, height: 74, type: "ground" },
        { x: 2100, y: 308, width: 180, height: 52, type: "ground" },
        { x: 2340, y: 284, width: 260, height: 76, type: "goal" },

        { x: 500, y: 220, width: 80, height: 16, type: "platform" },
        { x: 1000, y: 210, width: 80, height: 16, type: "platform" },
        { x: 1720, y: 205, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel5() {
    return {
      width: 2650,
      theme: "rivière",
      goalX: 2560,
      platforms: [
        { x: 0, y: 308, width: 360, height: 52, type: "ground" },
        { x: 430, y: 294, width: 140, height: 66, type: "ground" },
        { x: 650, y: 308, width: 160, height: 52, type: "ground" },
        { x: 900, y: 286, width: 150, height: 74, type: "ground" },
        { x: 1120, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1360, y: 280, width: 150, height: 80, type: "ground" },
        { x: 1590, y: 308, width: 180, height: 52, type: "ground" },
        { x: 1840, y: 286, width: 160, height: 74, type: "ground" },
        { x: 2080, y: 308, width: 180, height: 52, type: "ground" },
        { x: 2320, y: 280, width: 330, height: 80, type: "goal" },

        { x: 300, y: 220, width: 70, height: 16, type: "platform" },
        { x: 780, y: 215, width: 90, height: 16, type: "platform" },
        { x: 1470, y: 210, width: 90, height: 16, type: "platform" },
        { x: 2190, y: 205, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel6() {
    return {
      width: 2700,
      theme: "glace",
      goalX: 2610,
      platforms: [
        { x: 0, y: 308, width: 300, height: 52, type: "ground" },
        { x: 360, y: 290, width: 140, height: 70, type: "ground" },
        { x: 560, y: 308, width: 170, height: 52, type: "ground" },
        { x: 800, y: 276, width: 150, height: 84, type: "ground" },
        { x: 1020, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1260, y: 286, width: 150, height: 74, type: "ground" },
        { x: 1480, y: 308, width: 180, height: 52, type: "ground" },
        { x: 1730, y: 272, width: 150, height: 88, type: "ground" },
        { x: 1940, y: 308, width: 190, height: 52, type: "ground" },
        { x: 2200, y: 286, width: 180, height: 74, type: "ground" },
        { x: 2440, y: 280, width: 260, height: 80, type: "goal" },

        { x: 470, y: 210, width: 80, height: 16, type: "platform" },
        { x: 900, y: 200, width: 80, height: 16, type: "platform" },
        { x: 1600, y: 210, width: 90, height: 16, type: "platform" },
        { x: 2310, y: 210, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel7() {
    return {
      width: 2750,
      theme: "forteresse",
      goalX: 2660,
      platforms: [
        { x: 0, y: 308, width: 300, height: 52, type: "ground" },
        { x: 380, y: 286, width: 150, height: 74, type: "ground" },
        { x: 600, y: 308, width: 160, height: 52, type: "ground" },
        { x: 830, y: 276, width: 140, height: 84, type: "ground" },
        { x: 1040, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1280, y: 272, width: 140, height: 88, type: "ground" },
        { x: 1490, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1730, y: 278, width: 140, height: 82, type: "ground" },
        { x: 1940, y: 308, width: 180, height: 52, type: "ground" },
        { x: 2190, y: 286, width: 150, height: 74, type: "ground" },
        { x: 2410, y: 308, width: 120, height: 52, type: "ground" },
        { x: 2580, y: 280, width: 170, height: 80, type: "goal" },

        { x: 260, y: 220, width: 80, height: 16, type: "platform" },
        { x: 720, y: 210, width: 80, height: 16, type: "platform" },
        { x: 1180, y: 200, width: 80, height: 16, type: "platform" },
        { x: 1640, y: 205, width: 90, height: 16, type: "platform" },
        { x: 2290, y: 210, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel8() {
    return {
      width: 2800,
      theme: "néon",
      goalX: 2710,
      platforms: [
        { x: 0, y: 308, width: 340, height: 52, type: "ground" },
        { x: 410, y: 288, width: 150, height: 72, type: "ground" },
        { x: 640, y: 308, width: 170, height: 52, type: "ground" },
        { x: 900, y: 282, width: 160, height: 78, type: "ground" },
        { x: 1130, y: 308, width: 180, height: 52, type: "ground" },
        { x: 1380, y: 274, width: 150, height: 86, type: "ground" },
        { x: 1600, y: 308, width: 180, height: 52, type: "ground" },
        { x: 1850, y: 286, width: 170, height: 74, type: "ground" },
        { x: 2100, y: 308, width: 180, height: 52, type: "ground" },
        { x: 2360, y: 276, width: 160, height: 84, type: "ground" },
        { x: 2580, y: 286, width: 220, height: 74, type: "goal" },

        { x: 300, y: 215, width: 90, height: 16, type: "platform" },
        { x: 790, y: 205, width: 90, height: 16, type: "platform" },
        { x: 1460, y: 200, width: 90, height: 16, type: "platform" },
        { x: 2010, y: 210, width: 90, height: 16, type: "platform" },
        { x: 2460, y: 205, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel9() {
    return {
      width: 2850,
      theme: "volcan",
      goalX: 2760,
      platforms: [
        { x: 0, y: 308, width: 300, height: 52, type: "ground" },
        { x: 360, y: 290, width: 140, height: 70, type: "ground" },
        { x: 570, y: 308, width: 150, height: 52, type: "ground" },
        { x: 790, y: 280, width: 140, height: 80, type: "ground" },
        { x: 1010, y: 308, width: 160, height: 52, type: "ground" },
        { x: 1240, y: 272, width: 140, height: 88, type: "ground" },
        { x: 1460, y: 308, width: 170, height: 52, type: "ground" },
        { x: 1710, y: 278, width: 150, height: 82, type: "ground" },
        { x: 1940, y: 308, width: 160, height: 52, type: "ground" },
        { x: 2180, y: 274, width: 150, height: 86, type: "ground" },
        { x: 2400, y: 308, width: 170, height: 52, type: "ground" },
        { x: 2640, y: 284, width: 210, height: 76, type: "goal" },

        { x: 260, y: 215, width: 80, height: 16, type: "platform" },
        { x: 710, y: 205, width: 80, height: 16, type: "platform" },
        { x: 1360, y: 200, width: 90, height: 16, type: "platform" },
        { x: 2090, y: 205, width: 90, height: 16, type: "platform" }
      ]
    };
  },

  createLevel10() {
    return {
      width: 3000,
      theme: "château",
      goalX: 2910,
      platforms: [
        { x: 0, y: 308, width: 280, height: 52, type: "ground" },
        { x: 340, y: 286, width: 130, height: 74, type: "ground" },
        { x: 540, y: 308, width: 140, height: 52, type: "ground" },
        { x: 760, y: 280, width: 120, height: 80, type: "ground" },
        { x: 950, y: 308, width: 150, height: 52, type: "ground" },
        { x: 1180, y: 272, width: 130, height: 88, type: "ground" },
        { x: 1390, y: 308, width: 150, height: 52, type: "ground" },
        { x: 1620, y: 278, width: 130, height: 82, type: "ground" },
        { x: 1830, y: 308, width: 150, height: 52, type: "ground" },
        { x: 2060, y: 272, width: 130, height: 88, type: "ground" },
        { x: 2270, y: 308, width: 160, height: 52, type: "ground" },
        { x: 2510, y: 278, width: 140, height: 82, type: "ground" },
        { x: 2720, y: 308, width: 120, height: 52, type: "ground" },
        { x: 2880, y: 280, width: 120, height: 80, type: "goal" },

        { x: 240, y: 210, width: 80, height: 16, type: "platform" },
        { x: 650, y: 200, width: 80, height: 16, type: "platform" },
        { x: 1080, y: 195, width: 80, height: 16, type: "platform" },
        { x: 1530, y: 200, width: 80, height: 16, type: "platform" },
        { x: 1980, y: 195, width: 80, height: 16, type: "platform" },
        { x: 2440, y: 205, width: 80, height: 16, type: "platform" }
      ]
    };
  }
};
