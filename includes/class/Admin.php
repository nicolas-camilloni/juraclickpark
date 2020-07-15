<?php

class Admin {

    protected $pdo;

    public function __construct() {
        $this->pdo = Database::getPdo();
    }

    /**
     * Récupération de tous les utilisateurs
     * 
     * @return array 
     */
    public function getAll() {
        $requete = $this->pdo->prepare('SELECT * FROM utilisateurs');
        $requete->execute();

        $resultat = $requete->fetchAll();

        return $resultat;
    }

?>