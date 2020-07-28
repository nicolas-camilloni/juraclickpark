class Dinosaur {
    constructor(player) {
        if ( player.currentWorld == "1")  {
            var dinoChoice = ["dinostart"];
            // console.log("ok");
        }
        else if ( player.currentWorld == "2" ) {
            var dinoChoice = ["dinostart", "dimetrodon"];
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