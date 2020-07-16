class Dinosaur {
    constructor(player) {
        if ( player.currentWorld == "1")  {
            var dinoChoice = ["dinostart"];
            // console.log("ok");
        }
        else if ( player.currentWorld == "2" ) {
            var dinoChoice = ["dinostart", "dimetrodon"];
        }
        const randomDino = dinoChoice[Math.floor(Math.random() * dinoChoice.length)];

        $(".cHealthBarInner").css("width", "22vw");
        

        this.currentDino = randomDino;
        this.dinoHealth = 100;
        this.dinoMaxHealth = 100;
    }

    updateHealthBar() {
        var newVW = this.dinoHealth * 22 / this.dinoMaxHealth;
        $(".cHealthBarInner").css("width", newVW+"vw");
    }
}