import express from "express";
import db from "./config/db.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/mensajes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "mensajes.html"));
});

// Rutas de la API
app.use("/api", router);  // Prefijo para las rutas de la API

// Iniciar servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

// Conectar a la base de datos
db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
    return db.sync();
  })
  .catch((error) => {
    console.error("Error al conectar la base de datos:", error);
  });
