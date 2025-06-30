import  express  from "express";
import cors from "cors"
import UsuarioService from "./services/UsuarioService";
import PetService from "./services/PetService";

const app= express()
app.use(express.json())
app.use(cors())

const us = new UsuarioService()
const pte = new PetService()

// ################################## Usuário ##################################
app.get("/api/v1/usuario/listar",(req,res)=>{
    us.listarUsuarios(req,res)
})

app.post("/api/v1/usuario/cadastro",(req,res)=>{
    us.cadastrarUsuario(req,res)
})

// ################################## Pet ##################################
app.get("/api/v1/pet/listar",(req,res)=>{
    pte.listarPets(req,res)
})

app.listen(3000, ()=>{
    console.log(`Servidor Online 10.26.45.39:3000`)
})