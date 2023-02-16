// Comment réussir a appliquer un letterSpacing sur une ligne spécifique sans avoir de retour a la ligne ?


let cache = document.querySelector("ragged-text").textContent;

// Fonction pour extraire chaque lignes, et les mots
function extractLines(){

    let source = document.querySelector("ragged-text").firstChild;
    let range = document.createRange();
    let lines = [];
    
    // Crér un tableaux "lines" et stocke les caractère de chaque lignes
    // Fonction a mieux comprendre!
    Array.from(source.textContent).forEach((char, i) => {

        range.setStart(source, 0);
        range.setEnd(source, i + 1);
        let lineIndex = range.getClientRects().length - 1;
        lines[lineIndex] = lines[lineIndex] || [];
        lines[lineIndex].push(source.textContent[i]);

    })

    // Je récupère tout les caractères de ma lignes et je crée un tableaux avec chaque lines
    // Ensuite je .join pour l'injecter dans mon DOM

    let splitToLines = lines.map(l =>`<line class="line">${l.join("")}</line>`).join("");
    myText.innerHTML = splitToLines;


    // Même methode mais pour séparer les mots
    let lineDOM = document.querySelectorAll("line");
     lineDOM.forEach(line => {

        let myLines = line.innerHTML.split(" ").map(word => `<word>${word}</word>`).join(" ");
        line.innerHTML = myLines;

    });


};

// Run the Function On Resize and and OnLoad
let WindowEvent = window.addEventListener('resize',()=>{myText.innerHTML=cache;extractLines();});
let loadEvent = window.addEventListener('load',()=>{myText.innerHTML=cache;extractLines();});
let resizeEvent = new ResizeObserver(() => {myText.innerHTML=cache;extractLines()});resizeEvent.observe(myText);





