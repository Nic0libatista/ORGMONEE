import { Request, Response } from "express";
import Contato from "../classes/Contato";
import ContatoRepository from "../repositories/ContatoRepository";

export default class ContatoService{
    contRepo=new ContatoRepository()
    async cadastroContato(req:Request, res:Response){
        const cnto:Contato = new Contato()

        cnto.telefone_celular = req.body.telefone_celular;
        cnto.telefone_comercial = req.body.telefone_comercial;
        cnto.telefone_residencial = req.body.telefone_residencial;
        cnto.email = req.body.email;

        try {
            const rs = await this.contRepo.Cadastrar(cnto);
            return res.status(201).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async listarContatos(req:Request, res:Response){
        try {
            const rs = await this.contRepo.Listar()
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}