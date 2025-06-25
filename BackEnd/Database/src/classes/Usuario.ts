import Preferencia from "./Preferencia";
import Pessoa from "./Pessoa";
export default class Usuario extends Pessoa{
    id!:number;
    senha!:string;
    foto_usu?:string;
    preferencia!:Preferencia;
    criadoem!:Date;
    atualizadoem!:Date;

}