<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="includes/css/bootstrap.min.css" />
    <link rel="stylesheet" href="template/css/style.css">
    <link rel="stylesheet" href="template/css/header.css">
    <link rel="stylesheet" href="template/css/footer.css">
    <title>Juraclick Park</title>
</head>
<body>
    <main>
        <div class="topInterface">
            <div class="gold-panel">
                <img src="template/img/gold-panel.png" alt="gold-panel" />
                <div class="myGold">
                    <p id="displayMyGold"></p>
                    <img class="img-fluid" src="template/img/dinocoins.png" alt="dinocoins" />
                </div>
            </div>
        </div>
        <div class="cGame">
            <div class="cleftMenu">
                <div class="leftMenu">
                    <div class="woodPanel">
                    </div>
                </div>
            </div>
            <div class="cRight">
                <img id="character" class="img-fluid" src="template/img/sprites/char1/Walk1.png" alt="Premier personnage" />
                <img id="dino" class="img-fluid" src="template/img/sprites/dinostart/Walk1.png" alt="Premier dinosaure" />
                <div class="cHealthBar">
                    <img class="img-fluid" src="template/img/health.png" alt="coeur">
                </div>
                <div class="cHealthBarInner">
                </div>
            </div>
        </div>
    </main>

    <script src="includes/js/jquery-3.5.1.min.js"></script>
    <script src="includes/js/bootstrap.min.js"></script>
    <script src="includes/class/Player.js"></script>
    <script src="includes/class/Dinosaur.js"></script>
    <script src="includes/class/Shop.js"></script>
    <script src="includes/class/Game.js"></script>
    <script src="includes/js/script.js"></script>
</body>
</html>