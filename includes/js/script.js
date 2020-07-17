$( document ).ready(function() {

  var game = new Game;
  game.initGame();

  $("body").click(function () {
    if (!$(event.target).closest('.leftMenu').length) {
      if (!$(event.target).closest('.btnUnlockPerks').length && !$(event.target).closest('.btnBuyPerks').length) {
        game.playerClicked(game.dinosaur);
      }
    }
  })

  $(document).on("click", ".btnUnlockPerks", function() {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksClicker);
    console.log(perksToUpgrade);
    game.shop.upgradePerksClicker(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["priceExpo"], perksToUpgrade[id]["bonusExpo"], false);
    game.shop = new Shop();
    game.shop.generateShop("clicker");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  $(document).on("click", ".btnBuyPerks", function () {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksClicker);
    console.log(perksToUpgrade);
    game.shop.upgradePerksClicker(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["priceExpo"], perksToUpgrade[id]["bonusExpo"], false);
    game.shop = new Shop();
    game.shop.generateShop("clicker");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  // localStorage.removeItem("dinocoins");
  // localStorage.removeItem("monde");
  // localStorage.removeItem("isNewPlayer");
  // localStorage.removeItem("characterLevel");

  // dinoIdle("template/img/sprites/dinostart/");
  // dinoDead("template/img/sprites/dinostart/");

  // CANCEL IMAGE DRAG

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


})