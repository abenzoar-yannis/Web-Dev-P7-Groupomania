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
  // céation d'une nouvelle instance de l'objet Post en lui passant un objet JS
  const post = new Post({
    // on utlise l'opérateur spread ... pour faire une copie de tous les élements req.body
    ...postObject,
  });

  // Vérification de l'authentification de l'utilisateur avant enregistrement de la nouvelle sauce dans la base de donnée
  if (post.userId === req.auth.userId) {
  } else {
    res.status(401).json({ error: "Création non autorisée !" });
  }

  post
    .save()
    .then((post) => res.status(201).json({ message: "Post enregistrée!" }))
    .catch((error) => res.status(403).json({ error }));
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

/* modification d'un post */
exports.modifyPost = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    // stockage des modification du post
    const postObject = { ...req.body };

    // Vérifi si l'userId du post modifiée est le même que l'userId du post avant modification
    if (postObject.userId && postObject.userId !== post.userId) {
      res.status(401).json({ error: "Modification non autorisée !" });
    }

    if (!post) {
      return res.status(404).json({ error: "Post non trouvée !" });
    }

    // modification du post
    Post.updateOne(
      // 1er argument : le post à modifier
      // 2ème argument : la version modifié du post, celle envoyée dans la requête
      { _id: req.params.id },
      { ...postObject, _id: req.params.id }
    )
      .then((post) => res.status(200).json({ message: "Post bien modifiée !" }))
      .catch((error) => res.status(400).json(error));
  });
};

/* like et dislike un post */
exports.likeAPost = (req, res, next) => {
  // Cherche le post dans la base des données
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      // Récupérer les valeurs de likes et dislikes
      const userStatus = {
        usersLiked: post.usersLiked,
        usersDisliked: post.usersDisliked,
        likes: 0,
        dislikes: 0,
      };

      // Gestion des cas selon la valeur de "like"
      switch (req.body.like) {
        // si req.body.like = 1, l'utilisateur aime le post
        case 1:
          // ...et qu'il n'a pas encore liké
          if (!userStatus.usersLiked.includes(req.body.userId)) {
            userStatus.usersLiked.push(req.body.userId); // ajouter dans le tableau "userLiked"
          } else {
            // ...et qu'il a déjà liké
            throw new Error("Un seul like possible !");
          }
          // ... et qu'il a déjà disliké
          if (userStatus.usersDisliked.includes(req.body.userId)) {
            throw new Error("Merci d'annuler votre dislike avant de liker !");
          }
          break;

        // si req.body.like = -1, l'utilisateur n'aime pas le post
        case -1:
          // ...et qu'il n'a pas encore disliké
          if (!userStatus.usersDisliked.includes(req.body.userId)) {
            userStatus.usersDisliked.push(req.body.userId); // ajouter dans le tableau "userDisliked"
          } else {
            // ...et qu'il a déjà disliké
            throw new Error("Un seul dislike possible !");
          }
          // ...et qu'il a déjà liké
          if (userStatus.usersLiked.includes(req.body.userId)) {
            throw new Error("Merci d'annuler votre like avant de disliker !");
          }
          break;

        // si req.body.like = 0, l'utilisateur annule son like ou dislike ou neutre
        case 0:
          // si l'utilisateur a déjà liké, retirer-le du tableau "userLiked"
          if (userStatus.usersLiked.includes(req.body.userId)) {
            let indexLiked = userStatus.usersLiked.indexOf(req.body.userId); // indexer l'userID
            userStatus.usersLiked.splice(indexLiked, 1); // supprimer 1 élément à partir de l'index "index"
          } else if (userStatus.usersDisliked.includes(req.body.userId)) {
            // si l'utilise a déjà disliké, retirer-le du tableau "userDisliked"
            let indexDisliked = userStatus.usersDisliked.indexOf(
              req.body.userId
            );
            userStatus.usersDisliked.splice(indexDisliked, 1);
          }
          break;

        default:
          throw error;
      }

      // calculer le nombre total de likes et dislikes
      userStatus.likes = userStatus.usersLiked.length;
      userStatus.dislikes = userStatus.usersDisliked.length;

      // mettre à jour le post avec les nouveaux status
      Post.updateOne({ _id: req.params.id }, userStatus)
        .then((post) => res.status(200).json({ message: "Post bien notée!" }))
        .catch((error) => res.status(400).json({ error: error.message }));
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};
