document.addEventListener("keypress", (evento) => {
  mostrarColorBody(evento.key);
});

const mostrarColorBody = (teclaPresionada) => {
  if (teclaPresionada === "a") {
    document.body.style.backgroundColor = "#0a9396";
  } else if (teclaPresionada === "b") {
    document.body.style.backgroundColor = "#ee9b00";
  } else if (teclaPresionada === "c") {
    document.body.style.backgroundColor = "#ae2012";
  } else if (teclaPresionada === "d") {
    document.body.style.backgroundColor = "#90dbf4";
  } else if (teclaPresionada === "e") {
    document.body.style.backgroundColor = "#f72585";
  } else if (teclaPresionada === "f") {
    document.body.style.backgroundColor = "#7209b7";
  } else if (teclaPresionada === "g") {
    document.body.style.backgroundColor = "#6fffe9";
  } else if (teclaPresionada === "h") {
    document.body.style.backgroundColor = "#8a5a44";
  } else if (teclaPresionada === "i") {
    document.body.style.backgroundColor = "#ff5d8f";
  } else if (teclaPresionada === "j") {
    document.body.style.backgroundColor = "#03045e";
  } else if (teclaPresionada === "k") {
    document.body.style.backgroundColor = "#5e548e";
  } else if (teclaPresionada === "l") {
    document.body.style.backgroundColor = "#080708";
  } else if (teclaPresionada === "m") {
    document.body.style.backgroundColor = "#3772FF";
  } else if (teclaPresionada === "n") {
    document.body.style.backgroundColor = "#76520e";
  } else if (teclaPresionada === "ñ") {
    document.body.style.backgroundColor = "#efca08";
  } else if (teclaPresionada === "o") {
    document.body.style.backgroundColor = "#f37748";
  } else if (teclaPresionada === "p") {
    document.body.style.backgroundColor = "#3c1642";
  } else if (teclaPresionada === "q") {
    document.body.style.backgroundColor = "#ee7674";
  } else if (teclaPresionada === "r") {
    document.body.style.backgroundColor = "#42bfdd";
  } else if (teclaPresionada === "s") {
    document.body.style.backgroundColor = "#df2935";
  } else if (teclaPresionada === "t") {
    document.body.style.backgroundColor = "#09bc8a";
  } else if (teclaPresionada === "u") {
    document.body.style.backgroundColor = "#3f37c9";
  } else if (teclaPresionada === "v") {
    document.body.style.backgroundColor = "#99582a";
  } else if (teclaPresionada === "w") {
    document.body.style.backgroundColor = "#f20089";
  } else if (teclaPresionada === "x") {
    document.body.style.backgroundColor = "#548c2f";
  } else if (teclaPresionada === "y") {
    document.body.style.backgroundColor = "#e6e8e6";
  } else if (teclaPresionada === "z") {
    document.body.style.backgroundColor = "#084b83";
  }
};
