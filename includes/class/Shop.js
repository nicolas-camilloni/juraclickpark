class Shop {
    constructor() {
        this.perksClicker = localStorage.getItem("perksClicker");
        this.perksIdle = localStorage.getItem("perksIdle");
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
        else if (whichPanel == "idle") {
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
    }

    getNextUpgradeInfo(bonus, level) {

        var newBonus = Math.round(bonus * level);

        return newBonus;
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