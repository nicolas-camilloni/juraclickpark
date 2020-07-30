class Shop {
    constructor() {
        this.perksClicker = localStorage.getItem("perksClicker");
        this.perksIdle = localStorage.getItem("perksIdle");
        this.bestWorld = localStorage.getItem("bestWorld");
    }
    
    prettify(input) {
        var temp = 0;
        if (input >= 1e60) {
            temp = input / 1e60;
            temp = +temp.toFixed(2);
            return temp + "ND";
        } else if (input >= 1e57) {
            temp = input / 1e57;
            temp = +temp.toFixed(2);
            return temp + "OD";
        } else if (input >= 1e54) {
            temp = input / 1e54;
            temp = +temp.toFixed(2);
            return temp + "SD";
        } else if (input >= 1e51) {
            temp = input / 1e51;
            temp = +temp.toFixed(2);
            return temp + "sD";
        } else if (input >= 1e48) {
            temp = input / 1e48;
            temp = +temp.toFixed(2);
            return temp + "QD";
        } else if (input >= 1e45) {
            temp = input / 1e45;
            temp = +temp.toFixed(2);
            return temp + "qD";
        } else if (input >= 1e42) {
            temp = input / 1e42;
            temp = +temp.toFixed(2);
            return temp + "TD";
        } else if (input >= 1e39) {
            temp = input / 1e39;
            temp = +temp.toFixed(2);
            return temp + "DD"; //Huehue, double D
        } else if (input >= 1e36) {
            temp = input / 1e36;
            temp = +temp.toFixed(2);
            return temp + "UD";
        } else if (input >= 1e33) {
            temp = input / 1e33;
            temp = +temp.toFixed(2);
            return temp + "D";
        } else if (input >= 1e30) {
            temp = input / 1e30;
            temp = +temp.toFixed(2);
            return temp + "N";
        } else if (input >= 1e27) {
            temp = input / 1e27;
            temp = +temp.toFixed(2);
            return temp + "O";
        } else if (input >= 1e24) {
            temp = input / 1e24;
            temp = +temp.toFixed(2);
            return temp + "S";
        } else if (input >= 1e21) {
            temp = input / 1e21;
            temp = +temp.toFixed(2);
            return temp + "s";
        } else if (input >= 1e18) {
            temp = input / 1e18;
            temp = +temp.toFixed(2);
            return temp + "Q";
        } else if (input >= 1e15) {
            temp = input / 1e15;
            temp = +temp.toFixed(2);
            return temp + "q";
        } else if (input >= 1e12) {
            temp = input / 1e12;
            temp = +temp.toFixed(2);
            return temp + "T";
        } else if (input >= 1e9) {
            temp = input / 1e9;
            temp = +temp.toFixed(2);
            return temp + "B";
        } else if (input >= 1e6) {
            temp = input / 1e6;
            temp = +temp.toFixed(2);
            return temp + "M";
        } else if (input >= 1e3) {
            temp = input / 1e3;
            temp = +temp.toFixed(2);
            return temp + "K";
        } else {
            temp = input;
            return +temp.toFixed(2);
        }
    }

    generateShop(whichPanel) {
        $(".woodPanel").empty();
        if ( whichPanel == "clicker" ) {
            var back = this;
            // console.log(JSON.parse(this.perksClicker));
            var myClickerPerks = JSON.parse(this.perksClicker);
            // console.log(myClickerPerks["perksOne"]["price"]);
            $.each(myClickerPerks, function () {
                // console.log(this);
                if (this["unlocked"] == true) {
                    var nextUpgrade = back.getNextUpgradeInfo(this["bonus"], this["level"]);
                    nextUpgrade = back.prettify(nextUpgrade);
                    var price = parseInt(this["price"]);
                    if (Math.round(price * (this["rateGrowth"]) ** this["level"] == price)) {
                        var costNext = costNext + 1;
                    }
                    else {
                        var costNext = Math.round(price * (this["rateGrowth"]) ** this["level"]);
                    }
                    var nextPrice = back.prettify(costNext);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);
                    
                    $(".woodPanel").append(`
                        <div class="perksClicker shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perks/${this["img"]}" width=44 height=44 alt="perkClicker" />
                                </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                    <p class="perksType">${totalbonus}/click</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnBuyPerks btnBuyPerksClicker"><p>LVL UP</p><div>${nextPrice}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                    <p class="perksEarning">+${nextUpgrade}/click</p>
                                </div>
                            </div>
                        </div>
                    `);
                }
                else {
                    var price = parseInt(this["price"]);
                    var costNext = Math.round(price * (this["rateGrowth"]) ** this["level"]);
                    var nextPrice = back.prettify(costNext);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);
                    $(".woodPanel").append(`
                        <div class="perksIdle shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perks/${this["img"]}" width=44 height=44 alt="perkClicker" />
                                    </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnUnlockPerks btnUnlockPerksClicker"><p>DEBLOQUER</p><div>${nextPrice}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                </div>
                            </div>
                        </div>
                    `);
                }
            });
        }
        else if ( whichPanel == "idle" ) {
            var back = this;
            // console.log(JSON.parse(this.perksClicker));
            var myIdlePerks = JSON.parse(this.perksIdle);
            // console.log(myClickerPerks["perksOne"]["price"]);
            $.each(myIdlePerks, function () {
                // console.log(this);
                if (this["unlocked"] == true) {
                    var nextUpgrade = back.getNextUpgradeInfo(this["bonus"], this["level"]);
                    nextUpgrade = back.prettify(nextUpgrade);
                    var price = parseInt(this["price"]);
                    if (Math.round(price * (this["rateGrowth"]) ** this["level"] == price)) {
                        var costNext = costNext + 1;
                    }
                    else {
                        var costNext = Math.round(price * (this["rateGrowth"]) ** this["level"]);
                    }
                    var nextPrice = back.prettify(costNext);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);

                    if ( this["type"] == "clicker" ) {
                    $(".woodPanel").append(`
                        <div class="perksClicker shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perks/${this["img"]}" width=44 height=44 alt="perkIdle" />
                                </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                    <p class="perksType">${totalbonus}/click</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnBuyPerks btnBuyPerksIdle"><p>LVL UP</p><div>${nextPrice}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                    <p class="perksEarning">+${nextUpgrade}/click</p>
                                </div>
                            </div>
                        </div>
                        `);
                    }
                    else if ( this["type"] == "idle" ) {
                        $(".woodPanel").append(`
                        <div class="perksClicker shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perks/${this["img"]}" width=44 height=44 alt="perkIdle" />
                                </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                    <p class="perksType">${totalbonus}/s</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnBuyPerks btnBuyPerksIdle"><p>LVL UP</p><div>${nextPrice}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                    <p class="perksEarning">+${nextUpgrade}/s</p>
                                </div>
                            </div>
                        </div>
                        `);
                    }
                }
                else {
                    var price = parseInt(this["price"]);
                    var costNext = Math.round(price * (this["rateGrowth"]) ** this["level"]);
                    var nextPrice = back.prettify(costNext);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);
                    $(".woodPanel").append(`
                        <div class="perksIdle shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perks/${this["img"]}" width=44 height=44 alt="perkIdle" />
                                    </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnUnlockPerks btnUnlockPerksIdle"><p>DEBLOQUER</p><div>${nextPrice}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                </div>
                            </div>
                        </div>
                    `);
                }
            });
        }
        else if ( whichPanel == "map" ) {
            var back = this;
            var bestWorld = parseInt(this.bestWorld);
            while ( bestWorld < 10 ) {
                bestWorld++;
                if ( bestWorld == 2 ) {
                    var price = 5000;
                    var mapName = "Prairie endormie";
                }
                else if ( bestWorld == 3 ) {
                    var price = 10000;
                    var mapName = "Désert de Buhwa";
                }
                else if ( bestWorld == 4 ) {
                    var price = 20000;
                    var mapName = "Mer du vent";
                }
                else if ( bestWorld == 5 ) {
                    var price = 30000;
                    var mapName = "Chemins japonnais";
                }
                else if ( bestWorld == 6 ) {
                    var price = 40000;
                    var mapName = "Plaines enneigées";
                }
                else if ( bestWorld == 7 ) {
                    var price = 50000;
                    var mapName = "Rivère gelée";
                }
                else if ( bestWorld == 8 ) {
                    var price = 60000;
                    var mapName = "Chateau hanté";
                }
                else if ( bestWorld == 9 ) {
                    var price = 70000;
                    var mapName = "Lavaland";
                }
                else if ( bestWorld == 10 ) {
                    var price = 80000;
                    var mapName = "L'entre magmatique";
                }
                if ( bestWorld <= parseInt((this.bestWorld)) + 1 ) {
                    $(".woodPanel").append(`
                        <div class="shopWorld shadow">
                            <div class="cPerksInfos">
                                <div class="shopMapImg">
                                    <img class="img-fluid" src="template/img/bg${bestWorld}.png" width=44 height=44 alt="map${bestWorld}" />
                                    </div>
                                <div class="perksDesc">
                                    <p class="perksName">${mapName}</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="btnMap${bestWorld}" class="btnUnlockPerks btnUnlockMap"><p>DEBLOQUER</p><div>${price}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                </div>
                            </div>
                        </div>
                    `);
                }
                else {
                    $(".woodPanel").append(`
                        <div class="shopWorld shadow">
                            <div class="cPerksInfos">
                                <div class="shopMapImg">
                                    <img class="img-fluid" src="template/img/bg${bestWorld}.png" width=44 height=44 alt="map${bestWorld}" />
                                    </div>
                                <div class="perksDesc">
                                    <p class="perksName">${mapName}</p>
                                </div>
                                <div class="perksBuy">
                                    <p class="error">Vérrouiller</p>
                                </div>
                            </div>
                        </div>
                    `);
                }
            }
        }
    }

    getNextUpgradeInfo(bonus, level) {

        var newBonus = Math.round(bonus * level);

        return newBonus;
    }

    unlockMap(map, price) {
        var bestWorld = parseInt(map.substring(6));
        var newBalance = parseInt(localStorage.getItem("dinocoins")) - parseInt(price);
        localStorage.setItem("bestWorld", bestWorld);
        localStorage.setItem("dinocoins", newBalance);
    }
    
    upgradePerksClicker(name, price, bonus, rateGrowth, level, isUnlock = true ) {

        var costNext = Math.round(price * (rateGrowth) ** level);
        if ( costNext <= parseInt(localStorage.getItem("dinocoins")) ) {
            var perksToUpgrade = JSON.parse(this.perksClicker);
            
            // NEW BONUS
            var productionNext = Math.round(bonus * level);
            
            var lostCoin = parseInt(parseInt(localStorage.getItem("dinocoins")) - parseInt(costNext));
            localStorage.setItem("dinocoins", lostCoin);

            perksToUpgrade[name]["totalbonus"] += productionNext;
            if ( isUnlock == false ) {
                perksToUpgrade[name]["unlocked"] = true;
            }
            
            var clickEarning = parseInt(localStorage.getItem("clickEarning")) + parseInt(productionNext);
            var clickDamage = parseInt(localStorage.getItem("clickDamage")) + parseInt(productionNext);
            perksToUpgrade[name]["level"] += 1;

            perksToUpgrade = JSON.stringify(perksToUpgrade);
            localStorage.setItem("clickEarning", clickEarning);
            localStorage.setItem("clickDamage", clickDamage);
            localStorage.setItem("perksClicker", perksToUpgrade);            
            // localStorage.getItem("price")
            var player = new Player();
        }
            
    }

    upgradePerksIdle(name, price, bonus, rateGrowth, level, isUnlock = true ) {

        var costNext = Math.round(price * (rateGrowth) ** level);
        if (costNext <= parseInt(localStorage.getItem("dinocoins"))) {
            var perksToUpgrade = JSON.parse(this.perksIdle);

            // NEW BONUS
            if ( level == 0 ) {
                var productionNext = Math.round(bonus * 1);
            }
            else {
                var productionNext = Math.round(bonus * level);
            }

            var lostCoin = parseInt(parseInt(localStorage.getItem("dinocoins")) - parseInt(costNext));
            localStorage.setItem("dinocoins", lostCoin);

            perksToUpgrade[name]["totalbonus"] += productionNext;
            if (isUnlock == false) {
                perksToUpgrade[name]["unlocked"] = true;
            }

            var idleEarning = parseInt(localStorage.getItem("idleEarning")) + parseInt(productionNext);
            var idleDamage = parseInt(localStorage.getItem("idleDamage")) + parseInt(productionNext);
            perksToUpgrade[name]["level"] += 1;

            perksToUpgrade = JSON.stringify(perksToUpgrade);
            localStorage.setItem("idleEarning", idleEarning);
            localStorage.setItem("idleDamage", idleDamage);
            localStorage.setItem("perksIdle", perksToUpgrade);
            // localStorage.getItem("price")
            var player = new Player();
        }

    }

}