import { Request, Response } from "express";
import Contato from "../classes/Contato";
import ContatoRepository from "../repositories/ContatoRepository";
import EnderecoRepository from "../repositories/EnderecoRepository";
import Endereco from "../classes/Endereco";

export default class EnderecoService{
    endeRepo=new EnderecoRepository()
    async cadastroEndereco(req:Request, res:Response){
        const endco:Endereco = new Endereco()

        endco.complemento = req.body.complemento;
        endco.cep = req.body.cep;
        endco.bairro = req.body.bairro;
        endco.logradouro = req.body.logradouro;
        endco.numero = req.body.numero;
        endco.cidade = req.body.cidade;
        endco.estado = req.body.estado;


        try {
            const rs = await this.endeRepo.Cadastrar(endco);
            return res.status(201).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    async listarEnderecos(req:Request, res:Response){
        try {
            const rs = await this.endeRepo.Listar()
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}