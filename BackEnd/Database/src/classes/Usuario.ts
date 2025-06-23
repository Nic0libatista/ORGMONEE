import Endereco from "./Endereco";
export default abstract class Usuario{
    id!:number;
    nome!:string;
    contato!:string;
    cpf_usu!:string;
    data_nascimento!:Date;
    tipo_usu!: string;
    senha!:string;
    endereco!:Endereco;
    foto_usu!:string;
    preferencia!:number;

}