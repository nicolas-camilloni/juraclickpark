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
                    var nextUpgrade = back.getNextUpgradeInfo(this["name"], this["bonus"], this["bonusExpo"]);
                    nextUpgrade = back.prettify(nextUpgrade);
                    console.log(this);
                    var price = back.prettify(this["price"]);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);
                    
                    $(".woodPanel").append(`
                        <div class="perksClicker shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perksOne.png" width=44 height=44 alt="Dinopunch" />
                                </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                    <p class="perksType">${totalbonus}/click</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnBuyPerks"><p>LVL UP</p><div>${price}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                    <p class="perksEarning">+${nextUpgrade}/click</p>
                                </div>
                            </div>
                        </div>
                    `);
                }
                else {
                    var price = back.prettify(this["price"]);
                    var bonus = back.prettify(this["bonus"]);
                    var totalbonus = back.prettify(this["totalbonus"]);
                    $(".woodPanel").append(`
                        <div class="perksIdle shadow">
                            <div class="cPerksInfos">
                                <div class="perksImg">
                                    <img class="img-fluid" src="template/img/perksOne.png" width=44 height=44 alt="Dinopunch" />
                                    </div>
                                <div class="perksDesc">
                                    <p class="perksName">${this["name"]}</p>
                                    <p class="perksType">${totalbonus}/click</p>
                                </div>
                                <div class="perksBuy">
                                    <button id="${this["fullname"]}" class="btnUnlockPerks"><p>DEBLOQUER</p><div>${price}<img src="template/img/dinocoins.png" alt="dinocoins" /></div></button>
                                </div>
                            </div>
                        </div>
                    `);
                }
            });
        }
    }

    getNextUpgradeInfo(name, bonus, bonusExpo) {
        var perksToUpgrade = JSON.parse(this.perksClicker);

        // NEW BONUS 020
        if (Math.round(bonus * Math.exp(bonusExpo)) == bonus) {
            var newBonus = Math.round(bonus * Math.exp(bonusExpo)) + 1;
        }
        else {
            var newBonus = Math.round(bonus * Math.exp(bonusExpo)) + 1;
        }

        return newBonus;
    }
    
    upgradePerksClicker(name, price, bonus, priceExpo, bonusExpo, isUnlock = true) {

        if ( price <= parseInt(localStorage.getItem("dinocoins")) ) {
            
            var perksToUpgrade = JSON.parse(this.perksClicker);
            
            // NEW PRICE 026
            if ( Math.round(price * Math.exp(priceExpo)) == price ) {
                var newPrice = Math.round(price * Math.exp(priceExpo)) + 1;
            }
            else {
                var newPrice = Math.round(price * Math.exp(priceExpo)) + 1;
            }
            
            // NEW BONUS 020
            if (Math.round(bonus * Math.exp(bonusExpo)) == bonus) {
                var newBonus = Math.round(bonus * Math.exp(bonusExpo)) + 1;
            }
            else {
                var newBonus = Math.round(bonus * Math.exp(bonusExpo)) + 1;
            }
            
            var lostCoin = parseInt(localStorage.getItem("dinocoins")) - parseInt(perksToUpgrade[name]["price"]);
            localStorage.setItem("dinocoins", lostCoin);

            
            perksToUpgrade[name]["price"] = newPrice;
            perksToUpgrade[name]["totalbonus"] += newBonus;
            perksToUpgrade[name]["bonus"] = newBonus;
            if ( isUnlock == false ) {
                perksToUpgrade[name]["unlocked"] = true;
            }
            
            var clickEarning = parseInt(localStorage.getItem("clickEarning")) + parseInt(perksToUpgrade[name]["bonus"]);

            perksToUpgrade = JSON.stringify(perksToUpgrade);
            localStorage.setItem("clickEarning", clickEarning);
            localStorage.setItem("perksClicker", perksToUpgrade);
            
            // localStorage.getItem("price")
        }
            
    }

}