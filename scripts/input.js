window.Input = {
  init() {
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const jumpBtn = document.getElementById("jumpBtn");
    const actionBtn = document.getElementById("actionBtn");

    const press = (key) => {
      State.input[key] = true;
    };

    const release = (key) => {
      State.input[key] = false;
    };

    const bindTouchButton = (element, key) => {
      element.addEventListener("touchstart", (e) => {
        e.preventDefault();
        press(key);
      }, { passive: false });

      element.addEventListener("touchend", (e) => {
        e.preventDefault();
        release(key);
      }, { passive: false });

      element.addEventListener("touchcancel", (e) => {
        e.preventDefault();
        release(key);
      }, { passive: false });

      element.addEventListener("mousedown", (e) => {
        e.preventDefault();
        press(key);
      });

      element.addEventListener("mouseup", (e) => {
        e.preventDefault();
        release(key);
      });

      element.addEventListener("mouseleave", () => {
        release(key);
      });
    };

    bindTouchButton(leftBtn, "left");
    bindTouchButton(rightBtn, "right");
    bindTouchButton(jumpBtn, "jump");
    bindTouchButton(actionBtn, "action");

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") press("left");
      if (e.key === "ArrowRight") press("right");
      if (e.key === "ArrowUp" || e.key === " ") press("jump");
      if (e.key === "Shift") press("action");
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") release("left");
      if (e.key === "ArrowRight") release("right");
      if (e.key === "ArrowUp" || e.key === " ") release("jump");
      if (e.key === "Shift") release("action");
    });
  }
};
