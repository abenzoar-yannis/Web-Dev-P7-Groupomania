/* --- IMPORT des PACKAGES --- */
/* package 'express' */
const express = require("express");

/* chargement des fonctions d'express */
const app = express();

/* --- MIDDLEWARE --- */
app.use(express.json());

/* --- CORS --- */
/* Paramétrage de CORS = Cross Origin Resource Sharing  */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use((req, res) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

/* EXPORT de l'application */
module.exports = app;
