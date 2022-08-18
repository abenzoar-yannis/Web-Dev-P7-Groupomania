/* --- IMPORT des PACKAGES --- */
/* package 'express' */
const express = require("express");
/* package 'mongoose */
const mongoose = require("mongoose");
/* package de 'dotenv' et charge les variables d'environnement stockées dans le fichier '.env' */
require("dotenv").config({ path: ".env" });

/* chargement des fonctions d'express */
const app = express();

/* --- MIDDLEWARE --- */
app.use(express.json());

/* --- DATABASE --- */
/* Connection à la base de donnée MongoDB Atlas */
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

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
