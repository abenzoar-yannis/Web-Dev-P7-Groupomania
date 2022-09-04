/* Ce fichier contient la logique métier pour les posts */

/* --- IMPORT --- */
/* model de post */
const Post = require("../models/post");

/* --- CONTROLLERS --- */

/* transmettre tout les posts */
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(404).json({ error }));
};

/* transmettre un post */
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

/* Création de post */
exports.createPost = (req, res, next) => {
  const postObject = req.body;
  delete postObject._id;
  /* céation d'une nouvelle instance de l'objet Post en lui passant un objet JS */
  const post = new Post({
    /* on utlise l'opérateur spread ... pour faire une copie de tous les élements req.body */
    ...postObject
  });

  post
    .save()
    .then((post) => res.status(201).json({ message: "Post enregistrée!" }))
    .catch((error) => res.status(403).json({ error }));

  /* Vérification de l'authentification de l'utilisateur avant enregistrement de la nouvelle sauce dans la base de donnée */
  //   if (post.userId === req.auth.userId) {
  //   } else {
  //     res.status(401).json({ error: "Création non autorisée !" });
  //   }
};

/* supprimer un post */
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post non trouvée !" });
      }
      Post.deleteOne({ _id: req.params.id })
        .then((Post) => res.status(200).json({ message: "Post supprimée !" }))
        .catch((error) => res.status(403).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};
