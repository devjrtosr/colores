document.addEventListener("keypress", (e) => {
  colorearBody(e.key);
});

const colorearBody = (tecla) => {
  switch (tecla) {
    case "A":
    case "a":
      document.body.style.background = "#001219";
      break;
    case "B":
    case "b":
      document.body.style.background = "#005f73";
      break;
    case "C":
    case "c":
      document.body.style.background = "#0a9396";
      break;
    case "D":
    case "d":
      document.body.style.background = "#94d2bd";
      break;
    case "E":
    case "e":
      document.body.style.background = "#d8f3dc";
      break;
    case "F":
    case "f":
      document.body.style.background = "#e9d8a6";
      break;
    case "G":
    case "g":
      document.body.style.background = "#ee9b00";
      break;
    case "H":
    case "h":
      document.body.style.background = "#ca6702";
      break;
    case "I":
    case "i":
      document.body.style.background = "#ae2012";
      break;
    case "J":
    case "j":
      document.body.style.background = "#9b2226";
      break;
    case "K":
    case "k":
      document.body.style.background = "#fbf8cc";
      break;
    case "L":
    case "l":
      document.body.style.background = "#fde4cf";
      break;
    case "M":
    case "m":
      document.body.style.background = "#cfbaf0";
      break;
    case "N":
    case "n":
      document.body.style.background = "#90dbf4";
      break;
    case "O":
    case "o":
      document.body.style.background = "#b9fbc0";
      break;
    case "P":
    case "p":
      document.body.style.background = "#98f5e1";
      break;
    case "Q":
    case "q":
      document.body.style.background = "#03045e";
      break;
    case "R":
    case "r":
      document.body.style.background = "#ade8f4";
      break;
    case "S":
    case "s":
      document.body.style.background = "#f72585";
      break;
    case "T":
    case "t":
      document.body.style.background = "#333d29";
      break;
    case "O":
    case "o":
      document.body.style.background = "#fca311";
      break;
    case "W":
    case "w":
      document.body.style.background = "#98f5e1";
      break;
    case "U":
    case "u":
      document.body.style.background = "#6d6875";
      break;
    case "V":
    case "v":
      document.body.style.background = "#fdfcdc";
      break;
    case "X":
    case "x":
      document.body.style.background = "#c9184a";
      break;
    case "Y":
    case "y":
      document.body.style.background = "#800f2f";
      break;
    case "Z":
    case "z":
      document.body.style.background = "#ffb3c1";
      break;
  }
};
