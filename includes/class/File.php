<?php

class File {

    protected $pdo;

    public function __construct() {
        $this->pdo = Database::getPdo();
    }

    /**
     * Récupération de tous les documents
     * 
     * @return array 
     */
    public function getAll() {
        $requete = $this->pdo->prepare('SELECT * FROM documents');
        $requete->execute();

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Récupération d'un docoment par son ID
     * 
     * @return array 
     */
    public function getById($id) {
        $requete = $this->pdo->prepare('SELECT * FROM documents WHERE id = :id');
        $requete->execute(["id" => $id]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Récupération d'un docoment par son nom
     * 
     * @return array 
     */
    public function getByPath($lien) {
        $requete = $this->pdo->prepare('SELECT * FROM documents WHERE lien = :lien');
        $requete->execute(["lien" => "uploads/docs/$lien"]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Récupération les docoments d'un utilisateur
     * 
     * @return array 
     */
    public function getByUserId($id) {
        $requete = $this->pdo->prepare('SELECT * FROM documents WHERE id_utilisateur = :id');
        $requete->execute(["id" => $id]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

}

?>