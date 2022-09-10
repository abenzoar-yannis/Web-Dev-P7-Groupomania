/* Ce fichier contient la logique des routes posts. */

/* --- IMPORT --- */
/* package 'express' */
const express = require("express");
/* chargement de la fonction router d'express */
const router = express.Router();
/* controllers posts */
const postCtrl = require("../controllers/post");
/* middleware d'authentification */
const auth = require("../middleware/auth");

/* --- Logique des ROUTES --- */
/* récupérer toutes les posts */
router.get("/", auth, postCtrl.getAllPosts);
/* récupérer une post par son id */
router.get("/:id", auth, postCtrl.getOnePost);
/* Création d'un nouveau post */
router.post("/", auth, postCtrl.createPost);
/* supprimer un post */
router.delete("/:id", auth, postCtrl.deletePost);

/* EXPORT des routes */
module.exports = router;
