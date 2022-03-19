document.addEventListener("keypress", (e) => {
    mostrarColor(e.key);
}); 

const mostrarColor = (tecla) =>{
    if (tecla === "a") {
        document.body.style.backgroundColor = "#397367"; 
    } else if (tecla === "b") {
        document.body.style.backgroundColor = "#63ccca";
    } else if (tecla === "c") {
        document.body.style.backgroundColor = "#5da399";
    } else if (tecla === "d") {
        document.body.style.backgroundColor = "#42858c";
    } else if (tecla === "e") {
        document.body.style.backgroundColor = "#35393c";
    } else if (tecla === "f") {
        document.body.style.backgroundColor = "#00589B";
    } else if (tecla === "g") {
        document.body.style.backgroundColor = "#DA1515";
    } else if (tecla === "h") {
        document.body.style.backgroundColor = "#E2B3B3";
    } else if (tecla === "i") {
        document.body.style.backgroundColor = "#DC8EC8";                
    }

};




