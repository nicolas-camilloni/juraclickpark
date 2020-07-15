<?php
    if ( isset($_POST["deco"])) {
        session_destroy();
        header("Location: index.php");
    }
?>


<header>
<header class="shadow-sm">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="titleHeader alpanaBlue" href="#">Alpana Ventures</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav headerNavText">
                <a id="pageIndex" class="nav-item nav-link" href="index.php">Accueil<span class="sr-only">(current)</span></a>
                <a id="pageEquipe" class="nav-item nav-link" href="equipe.php">Équipe</a>
                <a id="pageEntreprise" class="nav-item nav-link" href="entreprises.php">Entreprises</a>
                <a id="pageActualites" class="nav-item nav-link" href="actualites.php">Actualités</a>
                <a id="pageContact" class="nav-item nav-link" href="contact.php">Contact</a>
            </div>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav rightMargNav">
                <?php
                if (!isset($_SESSION["login"]) ) {
                ?>
                    <a class="nav-item nav-link" href="inscription-form.php">Inscription</a>
                    <a class="nav-item nav-link" href="connexion-form.php">Connexion</a>
                <?php
                }
                else {
                    if ( $_SESSION["rank"] == "3" ) {
                    ?>

                        <a id="pageAdministration" class="nav-item nav-link" href="admin.php">Administration</a>
                    <?php
                    }
                    ?>

                    <a id="pageMoncompte" class="nav-item nav-link" href="profil.php">Mon compte</a>
                    <form method="post" action="#">
                        <input class="btnDisconnect nav-item nav-link" type="submit" name="deco" value="Se déconnecter" />
                    </form>
                <?php
                } 
                ?>
            </div>
        </div>
    </nav>
</header>