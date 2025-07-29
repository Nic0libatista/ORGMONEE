import UsuarioRepository from "../repositories/UsuarioRepository";
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import Usuario from "../classes/Usuario";

export default class UsuarioService{
    usarioRepo = new UsuarioRepository()

    async criptografarSenha(senha:string){
        let rs= await bcrypt.hash(senha,12)
        return rs
    }

    async cadastrarUsuario(req:Request, res:Response){
        let us = new Usuario()
        us.nome_usu = req.body.nome_usu
        us.senha = (await this.criptografarSenha(req.body.senha)).toString()
        us.foto_usu = req.body.foto_usu
        try{
            let rs = await this.usarioRepo.Cadastrar(us)
            return res.status(201).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async listarUsuarios(req:Request, res:Response){
        try{
            const rs = await this.usarioRepo.Listar()
            return res.status(200).json(rs)
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    // Salvar respostas do quiz (preferências do usuário)
async salvarQuiz(req: any, res: any) {
    try {
        const dados = req.body;
        const quiz = await this.usarioRepo.salvarQuiz(dados);
        return res.status(201).json({ message: "Quiz salvo com sucesso", quiz });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao salvar quiz", error });
    }
}

// Solicitar adoção de um pet
async solicitarAdocao(req: any, res: any) {
    try {
        const dados = req.body;
        const adocao = await this.usarioRepo.solicitarAdocao(dados);
        return res.status(201).json({ message: "Solicitação de adoção enviada com sucesso", adocao });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao solicitar adoção", error });
    }
}
}