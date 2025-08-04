import PreferenciaRepository from "../repositories/PreferenciaRepository";
import { Request, Response } from "express";

export default class PreferenciaService{
    preferRepo = new PreferenciaRepository()

    async CadastrarPreferencia(req:Request, res:Response){
        
    }
}