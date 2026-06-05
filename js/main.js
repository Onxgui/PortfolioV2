lucide.createIcons();

/* ==========================
    THEME
========================== */

const themeBtn = document.getElementById("themeBtn");

function updateThemeIcon() {
  themeBtn.innerHTML = document.body.classList.contains("light-mode")
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  lucide.createIcons();
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

updateThemeIcon();

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-mode")
      ? "light"
      : "dark"
  );

  updateThemeIcon();

});

/* ==========================
    LANGUAGE
========================== */

const langBtn = document.getElementById("langBtn");

let currentLang = localStorage.getItem("lang") || "pt";

function setLanguage(lang){

  document.querySelectorAll("[data-i18n]")

  .forEach(element=>{

    const key = element.dataset.i18n;

    const keys = key.split(".");

    let value = translations[lang];

    keys.forEach(k=>{

    if(value){

    value = value[k];

  }

});

    element.textContent = value;

  });

  langBtn.textContent = lang.toUpperCase();

  localStorage.setItem("lang",lang);

}

setLanguage(currentLang);

langBtn.addEventListener("click",()=>{

  currentLang = currentLang === "pt"
  ? "en"
  : "pt";

  setLanguage(currentLang);

});

/* ==========================
    SHOW MORE PROJECTS
========================== */

const showMoreBtn = document.getElementById("showMoreBtn");

const moreProjects = document.getElementById("moreProjects");

let expanded = false;

showMoreBtn.addEventListener("click",()=>{

  expanded = !expanded;

  if(expanded){

    moreProjects.style.display = "block";

    showMoreBtn.textContent = currentLang === "pt"
    ? "Mostrar menos"
    : "Show less";

  }else{

    moreProjects.style.display = "none";

    showMoreBtn.textContent = currentLang === "pt"
    ? "Mostrar mais"
    : "Show more";

  }

});

/* ==========================
    PARTICLES
========================== */

tsParticles.load("particles-js", {

  background: {
    color: {
      value: "transparent"
    }
  },

  fpsLimit: 60,

  particles: {

    number: {
      value: 70
    },

    color: {
      value: "#7c4dff"
    },

    links: {

      enable: true,
      color: "#7c4dff",
      distance: 140,
      opacity: 0.2,
      width: 1

    },

    move: {

      enable: true,
      speed: 1,

      outModes: {
        default: "bounce"
      }

    },

    opacity: {
      value: 0.5
    },

    size: {
      value: {
        min: 1,
        max: 4
      }
    }

  },

  interactivity: {

    events: {

      onHover: {
        enable: true,
        mode: "grab"
      }

    },

    modes: {

      grab: {

        distance: 180,

        links: {
          opacity: 0.5
        }

      }

    }

  },

  detectRetina: true

});