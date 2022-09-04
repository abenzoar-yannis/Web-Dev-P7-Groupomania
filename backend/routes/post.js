/* Ce fichier contient la logique des routes posts. */

/* --- IMPORT --- */
/* package 'express' */
const express = require("express");
/* chargement de la fonction router d'express */
const router = express.Router();
/* controllers posts */
const postCtrl = require("../controllers/post");

/* --- Logique des ROUTES --- */
/* récupérer toutes les posts */
router.get("/", postCtrl.getAllPosts);
/* récupérer une post par son id */
router.get("/:id", postCtrl.getOnePost);
/* Création d'un nouveau post */
router.post("/", postCtrl.createPost);
/* supprimer un post */
router.delete("/:id", postCtrl.deletePost);

/* EXPORT des routes */
module.exports = router;
