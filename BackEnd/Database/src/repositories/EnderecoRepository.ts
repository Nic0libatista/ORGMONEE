import { resolve } from "path";
import Endereco from "../classes/Endereco";
import Commands from "../interfaces/Commands";
import { conexao } from "../database/Config";

export default class EnderecoRepository implements Commands<Endereco>{
    Cadastrar(obj: Endereco): Promise<Endereco> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO Endereco(complemento, cep, bairro, logradouro, numero) VALUES (?,?,?,?,?)",[
                obj.bairro,
                obj.cep,
                obj.complemento,
                obj.logradouro,
                obj.numero
            ],
            (erro, end:any)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(obj)
                }
            })
        });
    }
    Listar(): Promise<Endereco[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from Endereco", (erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Endereco [])
                }
            })
        });
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Endereco): Promise<Endereco> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Endereco> {
        throw new Error("Method not implemented.");
    }

}