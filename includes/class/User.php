<?php

class User {

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

    /**
     * Récupération d'un utilisateur par son ID
     * 
     * @return array 
     */
    public function getById($id) {
        $requete = $this->pdo->prepare('SELECT * FROM utilisateurs WHERE id = :id');
        $requete->execute(["id" => $id]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Récupération d'un utilisateur par son login
     * 
     * @return array 
     */
    public function getByLogin($login) {
        $requete = $this->pdo->prepare('SELECT * FROM utilisateurs WHERE login = :login');
        $requete->execute(["login" => $login]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Récupération d'un utilisateur par son mail
     * 
     * @return array 
     */
    public function getByMail($mail) {
        $requete = $this->pdo->prepare('SELECT * FROM utilisateurs WHERE email = :mail');
        $requete->execute(["mail" => $mail]);

        $resultat = $requete->fetchAll();

        return $resultat;
    }

    /**
     * Update les infos d'un utilisateur
     * 
     * 
     */
    public function updateProfile($id, $login, $status, $email, $tel) {
        $requete = $this->pdo->prepare("UPDATE utilisateurs SET login = :login, status = :status, email = :email, tel = :tel WHERE id = :id");
        $requete->execute([
            "id" => $id,
            "login" => $login,
            "status" => $status,
            "email" => $email,
            "tel" => $tel
        ]);
    }

    /**
     * Update le mot de passe d'un utilisateur
     * 
     * 
     */
    public function updatePassword($id, $password) {
        $requete = $this->pdo->prepare("UPDATE utilisateurs SET mdp = :password WHERE id = :id");
        $requete->execute([
            "id" => $id,
            "password" => $password
        ]);
    }

}

?>