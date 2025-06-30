import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsUsuario from "../interfaces/CommandsUsuario";
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default class UsuarioRepository implements CommandsUsuario<Usuario>{
    login(usuario: string, senha: string) {
        ("Method not implemented.");
    }
    loginUCE(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve,reject)=>{
            conexao.query(`INSERT INTO Usuario( nome_usu,contato,cpf_usu,data_nascimento,senha,id_endereco, preferencia) VALUES (?,?,?,?,?,?,?)`,
                [
                    obj.nome_usu,
                    obj.contato,
                    obj.cpf_usu,
                    obj.data_nascimento,
                    obj.senha,
                    obj.endereco,
                    obj.preferencia
                ],
                (erro, result:any)=>{
                    if(erro){
                        return reject(erro)
                    } else{
                        return resolve(result)
                    }
                }
            )
        });
    }
    Listar(): Promise<Usuario[]> {
        return new Promise((resolve, reject)=>{
            conexao.query("Select * from Usuario",(erro, result)=>{
                if(erro){
                    return reject(erro)
                } else{
                    return resolve(result as Usuario[])
                }
            })
        });
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    
}