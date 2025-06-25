import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsUsuario from "../interfaces/CommandsUsuario";
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default class UsuarioRepository implements CommandsUsuario<Usuario>{
    login(usuario: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    loginUCE(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve,reject)=>{
            conexao.query(`INSERT INTO usuario nome_usu,cpf_usu`)
        });
    }
    Listar(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
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