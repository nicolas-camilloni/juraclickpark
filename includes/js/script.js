$( document ).ready(function() {

  var game = new Game;
  game.initGame();

  $(".cModalMap").css("display", "none");


  $("body").click(function () {
    if (!$(event.target).closest('.leftMenu').length) {
      if (!$(event.target).closest('.btnUnlockPerks').length && !$(event.target).closest('.btnBuyPerks').length) {
        game.playerClicked(game.dinosaur);
      }
    }
  })

  $(document).on("click", ".btnUnlockPerksClicker", function() {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksClicker);
    console.log(perksToUpgrade);
    game.shop.upgradePerksClicker(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["rateGrowth"], perksToUpgrade[id]["level"], false);
    game.shop = new Shop();
    game.shop.generateShop("clicker");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  $(document).on("click", ".btnUnlockPerksIdle", function () {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksIdle);
    console.log(perksToUpgrade);
    game.shop.upgradePerksIdle(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["rateGrowth"], perksToUpgrade[id]["level"], false);
    game.shop = new Shop();
    game.shop.generateShop("idle");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  $(document).on("click", ".btnBuyPerksClicker", function () {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksClicker);
    console.log(perksToUpgrade);
    game.shop.upgradePerksClicker(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["rateGrowth"], perksToUpgrade[id]["level"]);
    game.shop = new Shop();
    game.shop.generateShop("clicker");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  $(document).on("click", ".btnBuyPerksIdle", function () {
    console.log(this["id"]);
    var id = this["id"];
    var perksToUpgrade = JSON.parse(game.shop.perksIdle);
    console.log(perksToUpgrade);
    game.shop.upgradePerksIdle(this["id"], perksToUpgrade[id]["price"], perksToUpgrade[id]["bonus"], perksToUpgrade[id]["rateGrowth"], perksToUpgrade[id]["level"]);
    game.shop = new Shop();
    game.shop.generateShop("idle");
    game.player = new Player();
    game.displayMyGold(game.player);
  })

  $(document).on("click", ".ongletClicker", function () {
    $(".leftMenu").css("backgroundImage", "url(template/img/wood-panel-clicker.png)");
    game.shop.generateShop("clicker");
  })

  $(document).on("click", ".ongletIdle", function () {
    $(".leftMenu").css("backgroundImage", "url(template/img/wood-panel-idle.png)");
    game.shop.generateShop("idle");
  })

  $(document).on("click", ".ongletSkin", function () {
    $(".leftMenu").css("backgroundImage", "url(template/img/wood-panel-skin.png)");
    game.shop.generateShop("skin");
  })

  $(document).on("click", ".ongletMap", function () {
    $(".leftMenu").css("backgroundImage", "url(template/img/wood-panel-map.png)");
    game.shop.generateShop("map");
  })

  $(".map-btn").click(function() {
    if ( game.done == true ) {
      game.player = new Player();
      game.generateMap(game.player);
    }
  })

  $(document).on("click", "#map1Selector", function() {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 1);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map2Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 2);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map3Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 3);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map4Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 4);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map5Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 5);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map6Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 6);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map7Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 7);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map8Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 8);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map9Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 9);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", "#map10Selector", function () {
    $("#dino").css("marginLeft", "160vw");
    $("#character").css("marginLeft", "-80vw");
    localStorage.setItem("currentWorld", 10);
    game.player = new Player();
    game.initGame();
    $(".cModalMap").hide();
  })

  $(document).on("click", ".closebtn", function() {
    $(".cModalMap").hide();
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

  // UNLOCK MAP
  $(document).on("click", ".btnUnlockMap", function() {
    var id = this["id"];
    if ( id == "btnMap2" ) {
      var price = 5000;
    }
    else if ( id == "btnMap3" ) {
      var price = 10000;
    }
    else if ( id == "btnMap4" ) {
      var price = 20000;
    }
    else if ( id == "btnMap5" ) {
      var price = 30000;
    }
    else if ( id == "btnMap6" ) {
      var price = 40000;
    }
    else if ( id == "btnMap7" ) {
      var price = 50000;
    }
    else if ( id == "btnMap8" ) {
      var price = 60000;
    }
    else if ( id == "btnMap9" ) {
      var price = 70000;
    }
    else if ( id == "btnMap10" ) {
      var price = 80000;
    }
    game.shop.unlockMap(id, price);
    game.shop = new Shop();
    game.shop.generateShop("map");
    game.player = new Player();
    game.displayMyGold(game.player);
  })


})