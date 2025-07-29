import express from "express";
import cors from "cors";
import UsuarioService from "./services/UsuarioService";
import PetService from "./services/PetService";
import OngService from "./services/OngService";

const app = express();
app.use(express.json());
app.use(cors());

const us = new UsuarioService();
const pte = new PetService();
const ong = new OngService();

// ################################## Usuário ##################################
app.get("/api/v1/usuario/listar", (req, res) => {
    us.listarUsuarios(req, res);
});

app.post("/api/v1/usuario/cadastro", (req, res) => {
    us.cadastrarUsuario(req, res);
});

// Salvar quiz
app.post("/api/v1/quiz/salvar", (req, res) => {""
    us.salvarQuiz(req, res);
});

// Solicitar adoção
app.post("/api/v1/adocao/solicitar", (req, res) => {
    us.solicitarAdocao(req, res);
});

// ################################## Pet ##################################
app.get("/api/v1/pet/listar", (req, res) => {
    pte.listarPets(req, res);
});

// Cadastrar Pet
app.post("/api/v1/pet/cadastro", (req, res) => {
    pte.cadastrarPet(req, res);
});

// Atualizar Pet
app.put("/api/v1/pet/:id", (req, res) => {
    pte.atualizarPet(req, res);
});

// Deletar Pet
app.delete("/api/v1/pet/:id", (req, res) => {
    pte.deletarPet(req, res);
});

// Listar pets recomendados para o usuário
app.get("/api/v1/pets/recomendados/:userId", (req, res) => {
    pte.listarPetsRecomendados(req, res);
});

// ################################## ONG ##################################
app.post("/api/v1/ong/cadastro", (req, res) => {
    ong.cadastrarOng(req, res);
});

app.listen(3000, () => {
    console.log(`Servidor Online 10.26.45.39:3000`);
});
