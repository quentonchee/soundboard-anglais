(function () {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const stopAllBtn = document.getElementById("stop-all");

  // Couleurs des boutons, attribuées en tournant dans cette liste
  const PALETTE = [
    "#7c5cff", "#ff5c7a", "#2ec4b6", "#ffb703",
    "#3a86ff", "#fb5607", "#8ac926", "#ff006e",
    "#00b4d8", "#9b5de5", "#f15bb5", "#06d6a0",
  ];

  // Lecteurs en cours, pour pouvoir tout arrêter
  const active = new Set();

  function stopAll() {
    active.forEach(({ audio, btn }) => {
      audio.pause();
      audio.currentTime = 0;
      btn.classList.remove("playing");
    });
    active.clear();
  }

  function play(sound, btn) {
    // Un nouveau lecteur à chaque clic : on peut superposer plusieurs sons
    const audio = new Audio(sound.file);
    const entry = { audio, btn };
    active.add(entry);
    btn.classList.add("playing");

    const done = () => {
      active.delete(entry);
      if (![...active].some((e) => e.btn === btn)) {
        btn.classList.remove("playing");
      }
    };
    audio.addEventListener("ended", done);
    audio.addEventListener("error", () => {
      done();
      btn.classList.remove("playing");
      alert("Impossible de lire : " + sound.file);
    });

    audio.play().catch((err) => {
      console.error(err);
      done();
    });
  }

  function render(sounds) {
    grid.innerHTML = "";
    empty.hidden = sounds.length > 0;

    sounds.forEach((sound, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sound-btn";
      btn.style.setProperty("--color", PALETTE[i % PALETTE.length]);

      const label = document.createElement("span");
      label.textContent = sound.name;
      btn.appendChild(label);

      btn.addEventListener("click", () => play(sound, btn));
      grid.appendChild(btn);
    });
  }

  stopAllBtn.addEventListener("click", stopAll);

  render(typeof SOUNDS !== "undefined" ? SOUNDS : []);
})();
