import { error } from "console";
import Usuario_ong from "../classes/Usuario_ong";
import CommandsUsuOng from "../interfaces/CommandsUsuOng";
import { resolve } from "path";
import { conexao } from "../database/Config";
import { rejects } from "assert";

export default class UsuOngRepository implements CommandsUsuOng<Usuario_ong>{
    PesquisarOng(nome_fantasia: string): Promise<Usuario_ong> {
        return new Promise((resolve, reject)=>{
            conexao.query("Select usuario_ong.nome_fantasia ",(erro,result:any)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result)
                }
            })
        });
    }
    Cadastrar(obj: Usuario_ong): Promise<Usuario_ong> {
        return new Promise((resolve,reject)=>{
            conexao.query(`INSERT INTO Usuario_ong(nome_ong, senha, contato, id_endereco, cnpj_ong, razao_social, nome_fantasia, descricao, conexao, doc_comprovacao, adocao ) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    obj.nome_ong,
                    obj.senha,
                    obj.contato,
                    obj.endereco,
                    obj.cnpj_ong,
                    obj.razao_social,
                    obj.nome_fantasia,
                    obj.descricao,
                    obj.conexao,
                    obj.doc_comprovacao,
                    obj.adocao
                ],
                (erro, result:any)=>{
                    if (erro) {
                        return reject(erro)
                    } else {
                        return resolve(result)
                    }
                }
            )
        });
    }
    Listar(): Promise<Usuario_ong[]> {
        return new Promise((resolve, reject)=>{
            conexao.query("Select * from Usuario_ong",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Usuario_ong[])
                }
            })
        });
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Usuario_ong): Promise<Usuario_ong> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario_ong> {
        throw new Error("Method not implemented.");
    }
   
    
}