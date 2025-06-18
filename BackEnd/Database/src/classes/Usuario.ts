import Endereco from "./Endereco";
export default abstract class usuario{
    id!:number;
    nome!:string;
    contato!:string;
    cpf_usu!:string;
    data_nascimento!:Date;
    tipo_usu!: string;
    senha!:string;
    id_endereco!:number;
    foto_usu!:string;
    preferencia!:number;

}