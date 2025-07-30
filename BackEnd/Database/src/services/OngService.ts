import { Request, Response } from "express";
import OngRepository from "../repositories/OngRepository";

export default class OngService {
    private repo = new OngRepository();

    async cadastrarOng(req: Request, res: Response) {
        try {
            const dados = req.body;
            const ong = await this.repo.cadastrarOng(dados);
            return res.status(201).json({ message: "ONG cadastrada com sucesso", ong });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao cadastrar ONG", error });
        }
    }
}
