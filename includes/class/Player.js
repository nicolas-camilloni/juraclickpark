class Player {
    constructor() {
        this.currentWorld = localStorage.getItem("currentWorld");
        this.bestWorld = localStorage.getItem("bestWorld");
        this.characterLevel = localStorage.getItem("characterLevel");
        this.dinocoins = localStorage.getItem("dinocoins");
        this.clickEarning = localStorage.getItem("clickEarning");
        this.idleEarning = localStorage.getItem("idleEarning");
        // console.log(this);
    }

    updateMyCoins(amount) {
        var newAmount = parseInt(localStorage.getItem("dinocoins")) + parseInt(amount);
        localStorage.setItem("dinocoins", newAmount);
        this.dinocoins = localStorage.getItem("dinocoins");
    }
}