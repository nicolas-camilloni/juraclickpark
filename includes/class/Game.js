class Game {

    constructor() {
        this.player = new Player;
    }

    initGame() {
        var isNewPlayer = localStorage.getItem('isNewPlayer');
        if (isNewPlayer == null) {

            var cDinoPunch = { name: "DinoPunch", rank1: { bonus: 10, price: 100 }, rank2: { bonus: 20, price: 200 }, rank3: { bonus: 30, price: 300 }, rank4: { bonus: 40, price: 500 }, rank5: { bonus: 50, price: 700 }, rank6: { bonus: 60, price: 1000 }, rank7: { bonus: 70, price: 1400 }, rank8: { bonus: 80, price: 2000 }, rank9: { bonus: 90, price: 3000 }, rank10: { bonus: 100, price: 5000 }, currentRank: "", unlocked: false, needWorld: 1 };

            var iCoupDeMassue = { name: "Coup de massue", rank1: { bonus: 10, price: 100 }, rank2: { bonus: 20, price: 200 }, rank3: { bonus: 30, price: 300 }, rank4: { bonus: 40, price: 500 }, rank5: { bonus: 50, price: 700 }, rank6: { bonus: 60, price: 1000 }, rank7: { bonus: 70, price: 1400 }, rank8: { bonus: 80, price: 2000 }, rank9: { bonus: 90, price: 3000 }, rank10: { bonus: 100, price: 5000 }, currentRank: "", unlocked: false, needWorld: 1 };

            var perks = { perksOne: cDinoPunch, perksTwo: iCoupDeMassue};
            var perks = JSON.stringify(perks);

            localStorage.setItem("isNewPlayer", "no");
            localStorage.setItem("dinocoins", "0");
            localStorage.setItem("characterLevel", "1");
            localStorage.setItem("bestWorld", "1");
            localStorage.setItem("currentWorld", "1");
            localStorage.setItem("clickEarning", "10");
            localStorage.setItem("idleEarning", "0");
            localStorage.setItem("perks", perks);
            this.player = new Player;
        }
        this.dinosaur = new Dinosaur(this.player);
        var player = this.player;
        var dinosaur = this.dinosaur;
        // console.log(player.characterLevel);
        // console.log(dinosaur.currentDino);
        this.dinoWalk("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player, true);
        this.charWalk("template/img/sprites/char" + player.characterLevel + "/", player);
        this.displayMyGold();
        return player, dinosaur;
    }

    displayMyGold(player = this.player) {
        $("#displayMyGold").html(player.dinocoins);
    }

    newDino(dinosaur, player) {
        this.dinoWalk("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
    }

    // PLAYER CLICK
    playerClicked(dinosaur, player = this.player) {
        dinosaur.dinoHealth -=20;
        dinosaur.updateHealthBar();
        document.addEventListener("click", this.detectClickPosition(event));
        player.updateMyCoins(player.clickEarning);
        console.log(player);
        this.displayMyGold();
    }

    detectClickPosition(event, player = this.player) {
        var randomNumber = Math.floor(Math.random() * Math.floor(2000));
        console.log(player);
        $("main").append(`
            <div class=" coinsEarning ${randomNumber}">
                <p>+${player.clickEarning} </p>
                <img src="template/img/dinocoins.png" alt="dinocoins">
            </div>
        `);

        $("."+randomNumber).css("marginLeft", event.clientX-60);
        $("."+randomNumber).css("marginTop", event.clientY-28);
        setTimeout(() => {
            $("."+randomNumber).remove();
        }, 500);
    }

    // DINO FUNCTIONS

    dinoWalk(path, dinosaur, player, firstime = false) {
        var i = 1;
        if ( firstime == true ) {
            $("#dino").animate({
                marginLeft: "0vw",
            }, 3400, () => {
                clearInterval(walk);
                this.dinoIdle("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
            })
            var walk = setInterval(function () {
                $("#dino").attr("src", path + "Walk" + i + ".png");
                if (i == 5) {
                    i = 1;
                }
                else {
                    i++;
                }
            }, 250);
        }
        else {
            $("#dino").animate({
                marginLeft: "0vw",
            }, 800, () => {
                clearInterval(walk);
                $(".cHealthBar").show();
                $(".cHealthBarInner").show();
                this.dinoIdle("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
            })
            var walk = setInterval(function () {
                $("#dino").attr("src", path + "Walk" + i + ".png");
                if (i == 5) {
                    i = 1;
                }
                else {
                    i++;
                }
            }, 250);
        }
    }

    dinoIdle(path, dinosaur, player) {
        var i = 1;
        var idle = setInterval( () => {
            if ( dinosaur.dinoHealth > 0) {
                $("#dino").attr("src", path + "Idle" + i + ".png");
                if (i == 5) {
                    i = 1;
                }
                else {
                    i++;
                }
                // console.log(dinosaur.dinoHealth);
            }
            else {
                clearInterval(idle);
                this.dinoDead("template/img/sprites/" + dinosaur.currentDino + "/", player);
            }
        }, 150);
    }

    dinoDead(path, player) {
        var i = 1;
        var die = setInterval( () => {
            $("#dino").attr("src", path + "Dead" + i + ".png");
            $(".cHealthBar").hide();
            $(".cHealthBarInner").hide();
            if (i == 6) {
                clearInterval(die);
                $("#dino").attr("src", "template/img/sprites/emptydino.png");
                $("#dino").css("marginLeft", "60vw");
                this.dinosaur = new Dinosaur(player);
                this.newDino(this.dinosaur, player);
            }
            else {
                i++;
            }
        }, 100);
    }

    // CHAR FUNCTIONS

    charWalk(path, player) {
        var i = 1;
        $("#character").animate({
            marginLeft: "0vw",
        }, 3400, () => {
            clearInterval(walk);
            $("#character").attr("src", path + "Idle1.png");
                this.charIdle("template/img/sprites/char" + player.characterLevel + "/", player);
        })
        var walk = setInterval(function () {
            $("#character").attr("src", path + "Walk" + i + ".png");
            if (i == 5) {
                i = 1;
            }
            else {
                i++;
            }
        }, 250);
    }

    charIdle(path, player) {
        var i = 1;
        var idle = setInterval( () => {
            if (i < 5) {
                $("#character").attr("src", path + "Idle" + i + ".png");
            }
            if (i == 5) {
                i = 1;
                clearInterval(idle);
                this.charAttack("template/img/sprites/char" + player.characterLevel + "/", player);
            }
            else {
                i++;
            }
        }, 200);

    }

    charAttack(path, player) {
        var i = 1;
        var attack = setInterval( () => {
            $("#character").attr("src", path + "Attack" + i + ".png");
            if (i == 7) {
                i = 1;
                clearInterval(attack);
                this.charIdle("template/img/sprites/char" + player.characterLevel + "/", player);
            }
            else {
                i++;
            }
        }, 100);
    }

}