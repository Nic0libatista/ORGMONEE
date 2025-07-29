import { resolve } from "path";
import Pet from "../classes/Pet";
import CommandsPet from "../interfaces/CommandsPet";
import { rejects } from "assert";
import { conexao } from "../database/Config";
import { error } from "console";

export default class PetRepository implements CommandsPet<Pet>{
    PesquisarCor(cor: string): Promise<Pet[]> {
       return new Promise((resolve, reject)=>{
        conexao.query("Select pet.raca from pet",(erro,result)=>{
            if (erro) {
                return reject(erro)
            } else {
                return resolve(result as Pet[])
            }
        })
       }) 
    }
    PesquisarRaca(raca: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.raca from pet", (erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarSexo(sexo: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.sexo from pet",(erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarPorte(porte: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.porte from pet",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarComportamento(comportamento: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.comportamento from pet",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarIdade(idade: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.idade from pet",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarDisponibilidade(disponibilidade: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.disponibilidade from pet",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    PesquisarEspecie(especie: string): Promise<Pet[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select pet.especie from pet",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        });
    }
    Cadastrar(obj: Pet): Promise<Pet> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO Pet(id_ong,nome_pet,idade,especie,raca,sexo,porte,cor,comportamento,descricao) VALUES (?,?,?,?,?,?,?,?,?,?)",
                [
                    obj.id_ong,
                    obj.nome_pet,
                    obj.idade,
                    obj.especie,
                    obj.raca,
                    obj.sexo,
                    obj.porte,
                    obj.cor,
                    obj.comportamento,
                    obj.descricao
                ],
                (erro, end:any)=>{
                    if(erro){
                        return reject(erro)
                    } else{
                        return resolve(obj)
                    }
                }
            )
        });
    }
    Listar(): Promise<Pet[]> {
        return new Promise ((resolve,reject)=>{
            conexao.query("Select * from Pet", (erro, result)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(result as Pet[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Pet): Promise<Pet> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Pet> {
        throw new Error("Method not implemented.");
    }
    
}