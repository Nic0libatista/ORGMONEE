import { Request, Response } from "express";
import bcrypt from "bcrypt"
import Usuario_ong from "../classes/Usuario_ong";
import UsuOngRepository from "../repositories/UsuOngRepository";

export default class UsuOngService{
    usuongRepo=new UsuOngRepository()


    async criptografarSenha(senha:string){
        let rs= await bcrypt.hash(senha,12)
        return rs
    }

    async cadastroOng(req:Request, res:Response){
        let usuong =  new Usuario_ong()
        usuong.nome_ong = req.body.nome_ong;
        usuong.senha = (await this.criptografarSenha(req.body.senha)).toString();
        usuong.contato = req.body.contato;
        usuong.endereco =  req.body.endereco;
        usuong.cnpj_ong = req.body.cnpj_ong;
        usuong.razao_social = req.body.razao_social;
        usuong.nome_fantasia = req.body.nome_fantasia;
        usuong.descricao = req.body.descricao;
        usuong.conexao = req.body.conexao;
        usuong.doc_comprovacao = req.body.doc_comprovacao
        usuong.adocao = req.body.adocao

        try {
            let rs = await this.usuongRepo.Cadastrar(usuong)
            return res.status(201).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async listarOngs(req:Request, res:Response){
        try {
            const rs = await this.usuongRepo.Listar()
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}