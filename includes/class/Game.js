class Game {

    constructor() {
        this.player = new Player;
    }

    initGame() {
        var isNewPlayer = localStorage.getItem('isNewPlayer');
        if (isNewPlayer == null) {

            // CLICKER PERKS

            var DinoPunch = { fullname: "DinoPunch", name: "DinoPunch", price: 5, bonus: 1, priceExpo: 0.26, bonusExpo: 0.20, totalbonus: 1, unlocked: false, needWorld: 1 };

            // IDLE PERKS

            var CoupDeMassue = { fullname: "CoupDeMassue", name: "Coup de massue", price: 5, bonus: 1, priceExpo: 0.26, bonusExpo: 0.20, totalbonus: 1, unlocked: false, needWorld: 1 };

            var perksClicker = { DinoPunch: DinoPunch, CoupDeMassue: CoupDeMassue};
            var perksClicker = JSON.stringify(perksClicker);

            var perksIdle = { perksOne: DinoPunch, perksTwo: CoupDeMassue };
            var perksIdle = JSON.stringify(perksIdle);

            localStorage.setItem("isNewPlayer", "no");
            localStorage.setItem("dinocoins", "0");
            localStorage.setItem("characterLevel", "1");
            localStorage.setItem("bestWorld", "1");
            localStorage.setItem("currentWorld", "1");
            localStorage.setItem("clickEarning", "10");
            localStorage.setItem("idleEarning", "0");
            localStorage.setItem("perksClicker", perksClicker);
            localStorage.setItem("perksIdle", perksIdle);
            this.player = new Player;
        }
        this.dinosaur = new Dinosaur(this.player);
        this.shop = new Shop();
        var player = this.player;
        var dinosaur = this.dinosaur;
        var shop = this.shop;
        var test = shop.generateShop("clicker");
        // console.log(player.characterLevel);
        // console.log(dinosaur.currentDino);
        this.dinoWalk("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player, true);
        this.charWalk("template/img/sprites/char" + player.characterLevel + "/", player);
        this.displayMyGold();
        return player, dinosaur;
    }

    displayMyGold(player = this.player) {
        var myGold = this.shop.prettify(parseInt(player.dinocoins));
        $("#displayMyGold").html(myGold);
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
        var coinsEarned = this.shop.prettify(player.clickEarning);
        
        $("main").append(`
            <div class=" coinsEarning ${randomNumber}">
                <p>+${coinsEarned} </p>
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
        var y = 1;
        var idle = setInterval( () => {
            if (i < 5) {
                $("#character").attr("src", path + "Idle" + i + ".png");
            }
            if (i == 5) {
                i = 1;
            }
            else {
                i++;
            }
            if ( y == 15) {
                y = 1;
                clearInterval(idle);
                this.charAttack("template/img/sprites/char" + player.characterLevel + "/", player);
            }
            else {
                y++;
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
        }, 75);
    }

}