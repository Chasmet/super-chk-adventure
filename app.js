window.addEventListener("load", () => {
  if (window.Game && typeof window.Game.init === "function") {
    window.Game.init();
  } else {
    console.error("Game.init introuvable");
  }
});
