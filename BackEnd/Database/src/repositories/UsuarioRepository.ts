import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsUsuario from "../interfaces/CommandsUsuario";
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";

export default class UsuarioRepository implements CommandsUsuario<Usuario>{
    login(usuario: string, senha: string) {
       return new Promise((resolve, reject)=>{
        conexao.query(`SELECT * from Usuario WHERE nome_usu=?`,
            [
                usuario
            ],
            (erro, result:any)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result)
                }
            }
        )
       })
    }
    loginUCE(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve,reject)=>{
            conexao.query(`INSERT INTO Usuario( nome_usu, cpf_usu,data_nascimento,senha,id_endereco, contato, preferencia) VALUES (?,?,?,?,?,?,?)`,
                [
                    obj.nome_usu,
                    obj.cpf_usu,
                    obj.data_nascimento,
                    obj.senha,
                    obj.endereco,
                    obj.contato,
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

    CadastrarUsuario(obj: any): Promise<any> {
        return new Promise((resolve, reject) => {
            // 1. Inserir Endereco
            conexao.query(
                "INSERT INTO Endereco(complemento, cep, bairro, logradouro, numero, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [obj.complemento, obj.cep, obj.bairro, obj.logradouro, obj.numero, obj.cidade, obj.estado],
                (erroEndereco, resEndereco: any) => {
                    if (erroEndereco) return reject(erroEndereco);
    
                    const id_endereco = resEndereco.insertId;
    
                    // 2. Inserir Contato
                    conexao.query(
                        "INSERT INTO Contato(telefone_comercial, telefone_residencial, telefone_celular, email) VALUES (?, ?, ?, ?)",
                        [obj.telefone_comercial, obj.telefone_residencial, obj.telefone_celular, obj.email],
                        (erroContato, resContato: any) => {
                            if (erroContato) return reject(erroContato);
    
                            const id_contato = resContato.insertId;
    
                            // 3. Inserir Usuário com os IDs obtidos
                            conexao.query(
                                "INSERT INTO Usuario(nome_usu, cpf_usu, data_nascimento, senha, id_endereco, contato, preferencia, tipo_usu, foto_usu) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                                [
                                    obj.nome_usu,
                                    obj.cpf_usu,
                                    obj.data_nascimento,
                                    obj.senha,
                                    id_endereco,
                                    id_contato,
                                    obj.preferencia,
                                    "comum", // tipo_usu fixo
                                    obj.foto_usu || null
                                ],
                                (erroUsuario, resUsuario: any) => {
                                    if (erroUsuario) return reject(erroUsuario);
    
                                    resolve(resUsuario);
                                }
                            );
                        }
                    );
                }
            );
        });
    }
    
    
}