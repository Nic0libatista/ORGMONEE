import { Request, Response } from "express";
import Pet from "../classes/Pet";
import Usuario_ong from "../classes/Usuario_ong";
import PetRepository from "../repositories/PetRepository";

export default class PetService{
    petRepo = new PetRepository()

    async cadastroPet(req:Request, res:Response){
        const pte:Pet = new Pet();

        pte.id_ong = req.body.id_ong;
        pte.nome_pet = req.body.nome_pet;
        pte.idade = req.body.idade;
        pte.especie = req.body.especie;
        pte.raca = req.body.raca;
        pte.sexo = req.body.sexo;
        pte.porte = req.body.porte;
        pte.cor = req.body.cor;
        pte.comportamento = req.body.comportamento;
        pte.descricao = req.body.descricao;
        pte.disponibilidade = req.body.disponibilidade;

        try {
            const rs = await this.petRepo.Cadastrar(pte);
            return res.status(201).json(rs);
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    async listarPets(req:Request, res:Response){
        try {
            const rs = await this.petRepo.Listar()
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}