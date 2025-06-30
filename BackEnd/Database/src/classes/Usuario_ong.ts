import Conexao from "./Conexao";
import Contato from "./Contato";
import Endereco from "./Endereco";
export default abstract class Usuario_ong{
    id!:number;
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
    historico_adocao!:string;

}