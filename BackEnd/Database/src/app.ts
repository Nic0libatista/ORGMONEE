import  express  from "express";
import cors from "cors"
import UsuarioService from "./services/UsuarioService";

const app= express()
app.use(express.json())
app.use(cors())

const us = new UsuarioService()

// ################################## Usuário ##################################
app.get("/api/v1/usuario/listar",(req,res)=>{
    us.listarUsuarios(req,res)
})

app.post("/api/v1/usuario/cadastro",(req,res)=>{
    us.cadastrarUsuario(req,res)
})

app.listen(5000, ()=>{
    console.log(`Servidor Online`)
})