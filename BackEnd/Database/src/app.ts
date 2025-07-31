import  express  from "express";
import cors from "cors"
import UsuarioService from "./services/UsuarioService";
import PetService from "./services/PetService";
import UsuOngService from "./services/UsuarioOngServices";
import ContatoService from "./services/ContatoService";
import EnderecoService from "./services/EnderecoServices";

const app= express()
app.use(express.json())
app.use(cors())

const us = new UsuarioService()
const pte = new PetService()
const usuong = new UsuOngService()
const cnto = new ContatoService()
const endco = new EnderecoService()

// ################################## Usuário ##################################
app.get("/api/v1/usuario/listar",(req,res)=>{
    us.listarUsuarios(req,res)
})

app.post("/api/v1/usuario/cadastro",(req,res)=>{
    us.cadastrarUsuario(req,res)
})

app.post("/api/v1/usuario/login",(req,res)=>{
    us.loginUsuario(req,res)
})

// ################################## Pet ##################################
app.get("/api/v1/pet/listar",(req,res)=>{
    pte.listarPets(req,res)
})

app.post("/api/v1/pet/cadastro",(req,res)=>{
    pte.cadastroPet(req,res)
})


// ################################## User Ong ##################################
app.get("/api/v1/ong/listar",(req,res)=>{
    usuong.listarOngs(req,res)
})

app.post("/api/v1/ong/cadastro",(req,res)=>{
    usuong.cadastroOng(req,res)
})

// ################################## Contato ##################################
app.get("/api/v1/contato/listar",(req,res)=>{
    cnto.listarContatos(req,res)
})

app.post("/api/v1/contato/cadastro",(req,res)=>{
    cnto.cadastroContato
})

// ################################## Endereço ##################################
app.get("/api/v1/endereco/listar",(req,res)=>{
    endco.listarEnderecos(req,res)
})

app.post("/api/v1/endereco/cadastro",(req,res)=>{
    endco.cadastroEndereco
})

app.listen(3000, ()=>{
    console.log(`Servidor Online 10.26.45.39:3000`)
})