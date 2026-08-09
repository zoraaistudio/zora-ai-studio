function startApp() {
  window.location.href = "chat.html";
}


// 🌐 LANGUAGE

const languageSelect =
  document.getElementById("language");


// 🔤 TEXT STYLE

const fontStyleSelect =
  document.getElementById("fontStyle");


// Save language

languageSelect.addEventListener("change", function(){

  localStorage.setItem(
    "zoraLanguage",
    this.value
  );

  applyLanguage(this.value);

});


// Save font

fontStyleSelect.addEventListener("change", function(){

  localStorage.setItem(
    "zoraFontStyle",
    this.value
  );

  applyFontStyle(this.value);

});


// Load saved settings

const savedLanguage =
  localStorage.getItem("zoraLanguage") || "en";

const savedFontStyle =
  localStorage.getItem("zoraFontStyle") || "inter";


// Apply language

function applyLanguage(language){

  const title =
    document.querySelector(".start-screen h1");

  const welcome =
    document.querySelector(".start-screen p");

  const startButton =
    document.getElementById("startBtn");


  if(language === "hi"){

    title.innerText =
      "🚀 ज़ोरा AI स्टूडियो";

    welcome.innerText =
      "AI के भविष्य में आपका स्वागत है।";

    startButton.innerText =
      "शुरू करें";

  }

  else if(language === "hinglish"){

    title.innerText =
      "🚀 Zora AI Studio";

    welcome.innerText =
      "AI ke future mein aapka swagat hai.";

    startButton.innerText =
      "Start";

  }

  else{

    title.innerText =
      "🚀 Zora AI Studio";

    welcome.innerText =
      "Welcome to the future of AI.";

    startButton.innerText =
      "Start";

  }

}


// 🔤 Apply font

function applyFontStyle(style){

  const fonts = {

    inter: "Inter, sans-serif",

    poppins: "Poppins, sans-serif",

    roboto: "Roboto, sans-serif",

    "open-sans": "'Open Sans', sans-serif",

    montserrat: "Montserrat, sans-serif",

    oswald: "Oswald, sans-serif",

    raleway: "Raleway, sans-serif",

    nunito: "Nunito, sans-serif",

    ubuntu: "Ubuntu, sans-serif",

    lato: "Lato, sans-serif",

    merriweather: "Merriweather, serif",

    playfair: "'Playfair Display', serif",

    "roboto-mono": "'Roboto Mono', monospace",

    jetbrains: "'JetBrains Mono', monospace",

    "space-mono": "'Space Mono', monospace",

    orbitron: "Orbitron, sans-serif",

    audiowide: "Audiowide, sans-serif",

    comfortaa: "Comfortaa, sans-serif",

    quicksand: "Quicksand, sans-serif",

    outfit: "Outfit, sans-serif",

    manrope: "Manrope, sans-serif",

    "dm-sans": "'DM Sans', sans-serif",

    jakarta: "'Plus Jakarta Sans', sans-serif",

    "fira-sans": "'Fira Sans', sans-serif",

    "source-code": "'Source Code Pro', monospace"

  };


  if(fonts[style]){

    document.body.style.fontFamily =
      fonts[style];

  }

}


// Apply saved settings

languageSelect.value =
  savedLanguage;

fontStyleSelect.value =
  savedFontStyle;


applyLanguage(savedLanguage);

applyFontStyle(savedFontStyle);
