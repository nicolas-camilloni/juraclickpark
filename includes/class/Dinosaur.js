class Dinosaur {
    constructor(player) {
        if ( player.currentWorld == "1")  {
            var dinoChoice = ["dinostart"];
            // console.log("ok");
        }
        else if ( player.currentWorld == "2" ) {
            var dinoChoice = ["dinostart", "dimetrodon"];
        }
        else if (player.currentWorld == "3") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3"];
        }
        else if (player.currentWorld == "4") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4"];
        }
        else if (player.currentWorld == "5") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5"];
        }
        else if (player.currentWorld == "6") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5", "dino6"];
        }
        else if (player.currentWorld == "7") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5", "dino6", "dino7"];
        }
        else if (player.currentWorld == "8") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5", "dino6", "dino7", "dino8"];
        }
        else if (player.currentWorld == "9") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5", "dino6", "dino7", "dino8", "dino9"];
        }
        else if (player.currentWorld == "10") {
            var dinoChoice = ["dinostart", "dimetrodon", "dino3", "dino4", "dino5", "dino6", "dino7", "dino8", "dino9", "dino10"];
        }
        else {
            var dinoChoice = ["dinostart"];
        }
        const randomDino = dinoChoice[Math.floor(Math.random() * dinoChoice.length)];

        $(".cHealthBarInner").css("width", "22vw");
        console.log(player);
        var dinoCalcHealth = 50000;

        this.currentDino = randomDino;
        this.dinoHealth = dinoCalcHealth;
        this.dinoMaxHealth = dinoCalcHealth;
    }

    updateHealthBar() {
        var newVW = this.dinoHealth * 22 / this.dinoMaxHealth;
        $(".cHealthBarInner").css("width", newVW+"vw");
    }
}