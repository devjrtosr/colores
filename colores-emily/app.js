document.addEventListener("keypress", (evento) => {
    mostrarColorBody(evento.key);
  });
  
  const mostrarColorBody = (teclaPresionada) => {
    if (teclaPresionada === "a") {
      document.body.style.backgroundColor = "#FBF8CC";
    } else if (teclaPresionada === "b") {
      document.body.style.backgroundColor = "#FDE4CF";
    } else if (teclaPresionada === "c") {
      document.body.style.backgroundColor = "#FFCFD2";
    } else if (teclaPresionada === "d") {
      document.body.style.backgroundColor = "#F1C0E8";
    } else if (teclaPresionada === "e") {
      document.body.style.backgroundColor = "#CFBAF0";
    } else if (teclaPresionada === "f") {
      document.body.style.backgroundColor = "#A3C4F3";
    } else if (teclaPresionada === "g") {
      document.body.style.backgroundColor = "#90DBF4";
    } else if (teclaPresionada === "h") {
      document.body.style.backgroundColor = "#8EECF5";
    } else if (teclaPresionada === "i") {
      document.body.style.backgroundColor = "#98F5E1";
    } else if (teclaPresionada === "j") {
      document.body.style.backgroundColor = "#B9FBC0";
    } else if (teclaPresionada === "k") {
      document.body.style.backgroundColor = "#FFADAD";
    } else if (teclaPresionada === "l") {
      document.body.style.backgroundColor = "#FFD6A5";
    } else if (teclaPresionada === "m") {
      document.body.style.backgroundColor = "#FDFFB6";
    } else if (teclaPresionada === "n") {
      document.body.style.backgroundColor = "#CAFFBF";
    } else if (teclaPresionada === "ñ") {
      document.body.style.backgroundColor = "#9BF6FF";
    } else if (teclaPresionada === "o") {
      document.body.style.backgroundColor = "#A0C4FF";
    } else if (teclaPresionada === "p") {
      document.body.style.backgroundColor = "#BDB2FF";
    } else if (teclaPresionada === "q") {
      document.body.style.backgroundColor = "#FFC6FF";
    } else if (teclaPresionada === "r") {
      document.body.style.backgroundColor = "#EAE4E9";
    } else if (teclaPresionada === "s") {
      document.body.style.backgroundColor = "#FFF1E6";
    } else if (teclaPresionada === "t") {
      document.body.style.backgroundColor = "#FDE2E4";
    } else if (teclaPresionada === "u") {
      document.body.style.backgroundColor = "#FAD2E1";
    } else if (teclaPresionada === "v") {
      document.body.style.backgroundColor = "#E2ECE9";
    } else if (teclaPresionada === "w") {
      document.body.style.backgroundColor = "#BEE1E6";
    } else if (teclaPresionada === "x") {
      document.body.style.backgroundColor = "#F0EFEB";
    } else if (teclaPresionada === "y") {
      document.body.style.backgroundColor = "#DFE7FD";
    } else if (teclaPresionada === "z") {
      document.body.style.backgroundColor = "#CDDAFD";
    }
  };
