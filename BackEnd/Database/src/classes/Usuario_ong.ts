import Adocao from "./Adocao";
import Conexao from "./Conexao";
import Contato from "./Contato";
import Endereco from "./Endereco";
export default class Usuario_ong{
    id!:number;
    nome_ong!:string;
    senha!:string;
    endereco!:Endereco;
    cnpj_ong!:string;
    razao_social!:string;
    contato!:Contato
    nome_fantasia!:string;
    descricao!:string;
    conexao!:Conexao;
    doc_comprovacao!:string;
    foto_ong!:string;
    id_pet!:number;
    adocao!:Adocao;

}