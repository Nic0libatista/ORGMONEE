import { resolve } from "path";
import Pet from "../classes/Pet";
import CommandsPet from "../interfaces/CommandsPet";
import { rejects } from "assert";
import { conexao } from "../database/Config";

export default class PetRepository implements CommandsPet<Pet>{
    PesquisarCor(cor: string): Promise<Pet[]> {
       return new Promise((resolve, reject)=>{
        
       }) 
    }
    PesquisarRaca(raca: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarSexo(sexo: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorte(porte: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarComportamento(comportamento: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarIdade(idade: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarDisponibilidade(disponibilidade: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarEspecie(especie: string): Promise<Pet[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Pet): Promise<Pet> {
        return new Promise((resolve,reject)=>{
            conexao.query("INSERT INTO Pet(nome_pet,idade,especie,raca,sexo,porte,cor,comportamento,descricao) VALUES (?,?,?,?,?,?,?,?,?)",
                [
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