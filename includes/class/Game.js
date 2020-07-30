class Game {

    constructor() {
        this.player = new Player;
        this.done = false;
    }

    // INITIALIZE THE GAME

    initGame() {
        this.done = false;
        var isNewPlayer = localStorage.getItem('isNewPlayer');
        if (isNewPlayer == null) {

            // CLICKER PERKS

            var DinoPunch = { img: "dinoPunch.png", type: "clicker", fullname: "DinoPunch", name: "DinoPunch", price: 5, bonus: 1, rateGrowth: 1.24, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };
            
            var CoupDeMassue = { img: "coupDeMassue.png", type: "clicker", fullname: "CoupDeMassue", name: "Coup de massue", price: 5, bonus: 1, rateGrowth: 1.24, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var silex = { img: "silex.png", type: "clicker", fullname: "silex", name: "Silex", price: 5, bonus: 1, rateGrowth: 1.38, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var lanceEnPierre = { img: "lanceEnPierre.png", type: "clicker", fullname: "lanceEnPierre", name: "Lance en pierre", price: 5, bonus: 1, rateGrowth: 1.42, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };


            // IDLE PERKS

            var pluieDeMeteore = { img: "pluieDeMeteore.png", type: "idle", fullname: "PluieDeMeteore", name: "Pluie de météore", price: 5, bonus: 1, rateGrowth: 1.24, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };
            
            var erruption = { img: "erruption.png", type: "idle", fullname: "erruption", name: "Erruption volcanique", price: 5, bonus: 1, rateGrowth: 1.28, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var sandstorm = { img: "sandstorm.png", type: "idle", fullname: "sandstorm", name: "Tempête de sable", price: 5, bonus: 1, rateGrowth: 1.34, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var feuDeCamp = { img: "feuDeCamp.png", type: "idle", fullname: "feuDeCamp", name: "Maîtrise du feu", price: 5, bonus: 1, rateGrowth: 1.38, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var flecheEnflamee = { img: "flecheEnflamee.png", type: "idle", fullname: "flecheEnflamee", name: "Flèche enflamée", price: 5, bonus: 1, rateGrowth: 1.42, level: 0, totalbonus: 1, unlocked: false, needWorld: 1 };

            var perksClicker = { DinoPunch: DinoPunch, CoupDeMassue: CoupDeMassue, silex: silex, lanceEnPierre: lanceEnPierre};
            var perksClicker = JSON.stringify(perksClicker);

            var perksIdle = { PluieDeMeteore: pluieDeMeteore, erruption: erruption, sandstorm: sandstorm, feuDeCamp: feuDeCamp, flecheEnflamee: flecheEnflamee };
            var perksIdle = JSON.stringify(perksIdle);

            localStorage.setItem("isNewPlayer", "no");
            localStorage.setItem("dinocoins", "0");
            localStorage.setItem("characterLevel", "1");
            localStorage.setItem("bestWorld", "1");
            localStorage.setItem("currentWorld", "1");
            localStorage.setItem("clickEarning", "1");
            localStorage.setItem("idleEarning", "0");
            localStorage.setItem("clickDamage", 1);
            localStorage.setItem("idleDamage", 0);
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
        this.generateWorld(player.currentWorld);
        this.idleEarning(dinosaur);
        // console.log(player.characterLevel);
        // console.log(dinosaur.currentDino);
        this.dinoWalk("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player, true);
        this.charWalk("template/img/sprites/char" + player.characterLevel + "/", player);
        this.displayMyGold();
        return player, dinosaur;
    }

    // GENERATE MAP

    generateMap(player) {
        $(".cModalMap").css("display", "flex");
        if ( player.bestWorld == 1 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 2 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 3 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 4 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 5 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 6 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map6Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 7 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map6Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map7Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 8 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-locked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map6Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map7Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map8Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 9 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-locked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map6Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map7Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map8Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map9Selector" class="divSelector"></div>`)
        }
        else if ( player.bestWorld == 10 ) {
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde1-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde2-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde3-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde4-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde5-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde6-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde7-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde8-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde9-unlocked.png" />`)
            $(".modalMap").append(`<img class="img-map" src="template/img/map/monde10-unlocked.png" />`)
            $(".modalMap").append(`<div id="map1Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map2Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map3Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map4Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map5Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map6Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map7Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map8Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map9Selector" class="divSelector"></div>`)
            $(".modalMap").append(`<div id="map10Selector" class="divSelector"></div>`)
        }
    }

    // GENERATE WORLD

    generateWorld(level) {
        if ( level == 1 ) {
            $("main").css("backgroundImage", "url('template/img/bg.png')");
        }
        else if ( level == 2 ) {
            $("main").css("backgroundImage", "url('template/img/bg2.png')");
        }
        else if (level == 3) {
            $("main").css("backgroundImage", "url('template/img/bg3.png')");
        }
        else if (level == 4) {
            $("main").css("backgroundImage", "url('template/img/bg4.png')");
        }
        else if (level == 5) {
            $("main").css("backgroundImage", "url('template/img/bg5.png')");
        }
        else if (level == 6) {
            $("main").css("backgroundImage", "url('template/img/bg6.png')");
        }
        else if (level == 7) {
            $("main").css("backgroundImage", "url('template/img/bg7.png')");
        }
        else if (level == 8) {
            $("main").css("backgroundImage", "url('template/img/bg8.png')");
        }
        else if (level == 9) {
            $("main").css("backgroundImage", "url('template/img/bg9.png')");
        }
        else if (level == 10) {
            $("main").css("backgroundImage", "url('template/img/bg10.png')");
        }
    }

    // DISPLAY GOLD ON TOP OF SCREEN

    displayMyGold(player = this.player) {
        var myGold = this.shop.prettify(parseInt(player.dinocoins));
        $("#displayMyGold").html(myGold);
    }

    // CREATE NEW DINO

    newDino(dinosaur, player) {
        this.dinoWalk("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
    }

    // PLAYER CLICK
    playerClicked(dinosaur, player = this.player) {
        if ( parseInt(dinosaur.dinoHealth) > 0 ) {        
            dinosaur.dinoHealth -= parseInt(player.clickEarning);
        }
        dinosaur.updateHealthBar();
        document.addEventListener("click", this.detectClickPosition(event));
        player.updateMyCoins(player.clickEarning);
        this.displayMyGold();
    }

    detectClickPosition(event, player = this.player) {
        var randomNumber = Math.floor(Math.random() * Math.floor(2000));
        console.log(player);
        var coinsEarned = this.shop.prettify(parseInt(player.clickEarning));
        
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
                clearInterval(walkdino);
                this.dinoIdle("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
                this.done = true;
            })
            var walkdino = setInterval(function () {
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
                clearInterval(walkdino);
                $(".cHealthBar").show();
                $(".cHealthBarInner").show();
                this.dinoIdle("template/img/sprites/" + dinosaur.currentDino + "/", dinosaur, player);
                this.done = true;
            })
            var walkdino = setInterval(function () {
                $("#dino").attr("src", path + "Walk" + i + ".png");
                if (i == 5) {
                    i = 1;
                }
                else {
                    i++;
                }
            }, 250);
        }
        $(document).on("click", ".divSelector", function () {
            clearInterval(walkdino);
        })
    }

    dinoIdle(path, dinosaur, player) {
        var i = 1;
        var idledino = setInterval( () => {
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
                clearInterval(idledino);
                this.dinoDead("template/img/sprites/" + dinosaur.currentDino + "/", player);
            }
        }, 150);
        $(document).on("click", ".divSelector", function () {
            clearInterval(idledino);
        })
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
        $(document).on("click", ".divSelector", function () {
            clearInterval(die);
        })
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
        $(document).on("click", ".divSelector", function () {
            clearInterval(walk);
        })
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
        $(document).on("click", ".divSelector", function () {
            clearInterval(idle);
        })
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
        $(document).on("click", ".divSelector", function () {
            clearInterval(attack);
        })
    }

    // IDLE EARNING

    idleEarning(dinosaur, player = this.player) {
        var timingIdle = setInterval(() => {
            if ( parseInt(dinosaur.dinoHealth) > 0 ) {        
                dinosaur.dinoHealth -= parseInt(player.idleEarning);
                clearInterval(timingIdle);
                this.idleEarning(this.dinosaur);
                dinosaur.updateHealthBar();
            }
            else {
                clearInterval(timingIdle);
                this.idleEarning(this.dinosaur);
            }
            console.log(dinosaur.dinoHealth);
            var currCoin = parseInt(localStorage.getItem("dinocoins"));
            var idleCoin = parseInt(localStorage.getItem("idleEarning"));
            var earning = currCoin + idleCoin;
            localStorage.setItem("dinocoins", earning);
            this.player = new Player();
            this.displayMyGold();
        }, 1000);
        $(document).on("click", ".divSelector", function () {
            clearInterval(timingIdle);
        })
    }

}