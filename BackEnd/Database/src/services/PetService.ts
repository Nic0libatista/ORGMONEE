import { Request, Response } from "express";
import Pet from "../classes/Pet";
import Usuario_ong from "../classes/Usuario_ong";
import PetRepository from "../repositories/PetRepository";

export default class PetService{
    petRepo = new PetRepository()

    async cadastroPet(req:Request, res:Response){
        const pte:Pet = new Pet();

        pte.descricao = req.body.descricao
        pte.disponibilidade = req.body.disponibilidade
        pte.especie = req.body.especie
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