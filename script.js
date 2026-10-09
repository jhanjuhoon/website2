(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const form = document.querySelector("#film-form");
  const result = document.querySelector("#result");
  const resultTitle = document.querySelector("#result-title");
  const resultCopy = document.querySelector("#result-copy");

  const films = {
    "day-color-soft": {
      title: "Kodak Portra 400",
      copy: "Daylight, gentle skin, and colors that do not shout. This is the roll I load when the walk is the point.",
    },
    "day-color-punch": {
      title: "Kodak Ektar 100",
      copy: "Fine grain and loud reds. Best when the sun is high and you want the brick and sky to look extra sure of themselves.",
    },
    "day-color-grit": {
      title: "Cinestill 400D",
      copy: "A little halo, a little motion, still usable in open sun. Good when you want color without looking too tidy.",
    },
    "day-bw-soft": {
      title: "Ilford FP4 Plus 125",
      copy: "Smooth, classic, and unhurried. Pair it with a yellow filter if you want clouds that actually show up.",
    },
    "day-bw-punch": {
      title: "Kodak Tri-X 400",
      copy: "Contrast you can feel. Street corners, hard shadows, and the look people mean when they say “film.”",
    },
    "day-bw-grit": {
      title: "Ilford HP5 Plus 400",
      copy: "Push it if you must. It still looks like a photograph instead of a texture pack.",
    },
    "gold-color-soft": {
      title: "Kodak Portra 160",
      copy: "Late light loves this emulsion. Warm, quiet, and kind to faces on the way home.",
    },
    "gold-color-punch": {
      title: "Kodak Gold 200",
      copy: "Cheap in the best way. Grocery-store gold hour. The scans always look like a memory even if the afternoon was ordinary.",
    },
    "gold-color-grit": {
      title: "Fujifilm Superia 400",
      copy: "A little green in the shadows, a little surprise in the highlights. Perfect for a last walk before dinner.",
    },
    "gold-bw-soft": {
      title: "Ilford Delta 400",
      copy: "Silky enough for portraits in leftover sun, still fast enough if the light drops.",
    },
    "gold-bw-punch": {
      title: "Kodak Tri-X 400",
      copy: "Side light plus Tri-X is almost cheating. Let the shadows go black.",
    },
    "gold-bw-grit": {
      title: "Fomapan 400",
      copy: "Uneven, inexpensive, and oddly charming at dusk. Develop it yourself if you like surprises.",
    },
    "night-color-soft": {
      title: "Cinestill 800T",
      copy: "Tungsten-balanced with those red halos around lamps. Night walks, shop windows, bus interiors.",
    },
    "night-color-punch": {
      title: "Cinestill 800T (pushed)",
      copy: "Rate it at 1600 if the street is mostly neon. Grain will show up; that is the point.",
    },
    "night-color-grit": {
      title: "Kodak Portra 800",
      copy: "Less halo, more usable skin under mixed light. A safer night roll if you still want color.",
    },
    "night-bw-soft": {
      title: "Ilford Delta 3200",
      copy: "Fast and dreamy. Handheld under street lamps without turning the whole frame into sand.",
    },
    "night-bw-punch": {
      title: "Ilford HP5 Plus pushed to 1600",
      copy: "Deep blacks, bright signs, and grain that earns its keep. My default after the sun is gone.",
    },
    "night-bw-grit": {
      title: "Kentmere 400 pushed to 1600",
      copy: "Rough, cheap, and honest. If the night is messy, let the film be messy too.",
    },
  };

  navToggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const key = [data.get("light"), data.get("color"), data.get("mood")].join("-");
    const pick = films[key];

    if (!pick) {
      return;
    }

    result.hidden = false;
    resultTitle.textContent = pick.title;
    resultCopy.textContent = pick.copy;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  form.addEventListener("reset", function () {
    result.hidden = true;
    resultTitle.textContent = "";
    resultCopy.textContent = "";
  });
})();
