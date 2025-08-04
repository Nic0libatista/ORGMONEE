import { resolve } from "path";
import Contato from "../classes/Contato";
import Commands from "../interfaces/Commands";
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";

export default class ContatoRepository implements Commands<Contato>{
    Cadastrar(obj: Contato): Promise<Contato> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO Contato(telefone_comercial, telefone_residencial, telefone_celular, email) VALUES (?,?,?,?)",[
                obj.telefone_celular,
                obj.telefone_comercial,
                obj.telefone_residencial,
                obj.email
            ],
        (erro, end:any)=>{
            if (erro) {
                return reject(erro)
            } else {
                return resolve(end)
            }
        })
        });
    }
    Listar(): Promise<Contato[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from Contato", (erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Contato [])
                }
            })
        });
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Contato): Promise<Contato> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Contato> {
        throw new Error("Method not implemented.");
    }
    
}