import Preferencia from "./Preferencia";
import Pessoa from "./Pessoa";
import Contato from "./Contato";
import Endereco from "./Endereco";
export default class Usuario extends Pessoa{
    id!:number;
    nome_usu!:string;
    contato!:Contato;
    cpf_usu!:string;
    data_nascimento!: Date;
    endereco!: Endereco;
    senha!:string;
    foto_usu?:string;
    preferencia!:Preferencia;

}