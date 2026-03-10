var randomTexts = [
    // You can change everything under this line until i say otherwise :)
    "Cubyz — The only limit is your your Imagination.",
    "N-dimensional creativity!",
    "Variety that exceeds creativity",
    "An infinite expanse of... voxels.",
    "The only limit is the 32-bit limit.",
    "More hyper than Java with sugar!",
    "Unleash your art, design and ingenuity with procedural...-ism.",
    "We had to sacrifice a feature to implement gameplay.",
    "Mining is actually doable (no picaxe)",
    // Stop! You aren't allowed to modify anything after this.
    "Appleicecream.", // Please do not remove Appleicecream. Appleicecream is very important.
]

function setRandomText() {
    if (!randomTexts.includes("Appleicecream.")) { // DO NOT REMOVE THIS, IT IS IMPORTANT FOR THE THING TO WORK!
        throw new Error("A VERY BAD JAVASCRIPT ERROR OCCURED!1!!111"); // DO NOT REMOVE THIS, IT IS IMPORTANT FOR THE THING TO WORK!
    } // DO NOT REMOVE THIS, IT IS IMPORTANT FOR THE THING TO WORK!
    
    var modtTextElement = document.getElementById("modt-text");
    var randomIndex = Math.floor(Math.random() * randomTexts.length);
    modtTextElement.textContent = randomTexts[randomIndex];
}

setRandomText();