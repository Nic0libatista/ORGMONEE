import { resolve } from "path";
import Usuario from "../classes/Usuario";
import CommandsUsuario from "../interfaces/CommandsUsuario";
import { conexao } from "../database/Config";

export default class UsuarioRepository implements CommandsUsuario<Usuario> {
    login(usuario: string, senha: string) {
        ("Method not implemented.");
    }
    loginUCE(usuario: string, cpf: string, email: string, senha: string) {
        throw new Error("Method not implemented.");
    }

    // ✅ Cadastro de Usuário
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve, reject) => {
            conexao.query(
                `INSERT INTO Usuario( nome_usu,contato,cpf_usu,data_nascimento,senha,id_endereco, preferencia) 
                 VALUES (?,?,?,?,?,?,?)`,
                [
                    obj.nome_usu,
                    obj.contato,
                    obj.cpf_usu,
                    obj.data_nascimento,
                    obj.senha,
                    obj.endereco,
                    obj.preferencia
                ],
                (erro, result: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve(result);
                    }
                }
            );
        });
    }

    // ✅ Listar Usuários
    Listar(): Promise<Usuario[]> {
        return new Promise((resolve, reject) => {
            conexao.query("SELECT * FROM Usuario", (erro, result) => {
                if (erro) {
                    return reject(erro);
                } else {
                    return resolve(result as Usuario[]);
                }
            });
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

    // 🟢 Novo método: Salvar Quiz
    salvarQuiz(dados: any) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `INSERT INTO Preferencia (id_usuario, tipo_pet, idade_pet, porte, comportamento, nivel_energia) 
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    dados.id_usuario,
                    dados.tipo_pet,
                    dados.idade_pet,
                    dados.porte,
                    dados.comportamento,
                    dados.nivel_energia
                ],
                (erro, result: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve({ id: result.insertId, ...dados });
                    }
                }
            );
        });
    }

    // 🟢 Novo método: Solicitar Adoção
    solicitarAdocao(dados: any) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `INSERT INTO Adocao (id_pet, id_usuario) VALUES (?, ?)`,
                [dados.id_pet, dados.id_usuario],
                (erro, result: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve({ id: result.insertId, ...dados });
                    }
                }
            );
        });
    }
}
