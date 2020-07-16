$( document ).ready(function() {

  var game = new Game;
  game.initGame();

  $("body").click(function () {
    // console.log(game.dinosaur.dinoHealth);
    game.playerClicked(game.dinosaur);
  })

  // localStorage.removeItem("dinocoins");
  // localStorage.removeItem("monde");
  // localStorage.removeItem("isNewPlayer");
  // localStorage.removeItem("characterLevel");

  // dinoIdle("template/img/sprites/dinostart/");
  // dinoDead("template/img/sprites/dinostart/");
  console.log(JSON.parse(localStorage.getItem("perks")));

})