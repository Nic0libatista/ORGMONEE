import UsuarioRepository from "../repositories/UsuarioRepository";
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import Usuario from "../classes/Usuario";
import { error } from "console";
import {sign,verify} from "jsonwebtoken";

export default class UsuarioService{
    usuarioRepo = new UsuarioRepository()

    async criptografarSenha(senha:string){
        let rs= await bcrypt.hash(senha,12)
        return rs
    }


    async cadastrarUsuarioCompleto(req:Request, res:Response){
        
        let nome_usu = req.body.nome_usu;
        let senha = (await this.criptografarSenha(req.body.senha)).toString();
        let foto_usu = req.body.foto_usu;
        let cpf_usu = req.body.cpf_usu;
        let data_nascimento = req.body.data_nascimento;
        let endereco = req.body.endereco;
        let contato = req.body.contato;
        let preferencia = req.body.preferencia;
        let complemento = req.body.complemento;
        let cep = req.body.cep;
        let bairro = req.body.bairro;
        let logradouro = req.body.logradouro;
        let numero = req.body.numero;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let telefone_celular = req.body.telefone_celular;
        let telefone_comercial = req.body.telefone_comercial;
        let telefone_residencial = req.body.telefone_residencial;
        let email = req.body.email;


        let obj = {
            nome_usu,
            senha,
            foto_usu,
            cpf_usu,
            data_nascimento,
            endereco,
            contato,
            preferencia,
            complemento,
            cep,
            bairro,
            logradouro,
            numero,
            cidade,
            estado,
            telefone_celular,
            telefone_comercial,
            telefone_residencial,
            email
        }


        try{
            const rs = await this.usuarioRepo.CadastrarUsuario(obj)
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }





    async cadastrarUsuario(req:Request, res:Response){
        let us = new Usuario()
        us.nome_usu = req.body.nome_usu;
        us.senha = (await this.criptografarSenha(req.body.senha)).toString();
        us.foto_usu = req.body.foto_usu;
        us.cpf_usu = req.body.cpf_usu;
        us.data_nascimento = req.body.data_nascimento;
        us.endereco = req.body.endereco;
        us.contato = req.body.contato;
        us.preferencia = req.body.preferencia;

        try{
            const rs = await this.usuarioRepo.Cadastrar(us)
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async listarUsuarios(req:Request, res:Response){
        try{
            const rs = await this.usuarioRepo.Listar()
            return res.status(200).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async loginUsuario(req:Request, res:Response){
        let us = req.body.usuario;
        let sh = req.body.senha;

        try{
            const rs:any = await this.usuarioRepo.login(us,sh)
            if(rs==null){
                return res.status(401).json({msg:`Usuário ou senha inválidos`})
            }
            bcrypt.compare(sh,rs[0].senha,(erro,igual)=>{
                if(!igual){
                    return res.status(401).json({msg:`Usuário ou senha inválidos`});
                }
                let usuario={
                    id:rs[0].id_usuario,
                    nome_usu:rs[0].nome_usu,
                    fotousuario:rs[0].fotousuario,
                }
                
                const token=sign(usuario,"P@$$w0rd",{expiresIn:"2d"})

                return res.status(200).json({msg:`Logado`,payload:usuario, token:token})
            })
        }

        catch(error){
            res.status(500).json({msg:`Erro ao tentar logar ${error}`});
        }
    }

    
}