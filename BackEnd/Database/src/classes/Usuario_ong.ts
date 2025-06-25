import Endereco from "./Endereco";
export default abstract class Pessoa{
    id!:number;
    nome_ong!:string;
    contato!:string;
    endereco!:Endereco;
    cnpj_ong!:string;
    razao_social!:string;
    nome_fantasia!:string;
    descricao!:string;
    conexao!:number;
    doc_comprovacao!:string;
    foto_ong!:string;
    id_pet!:number;
    historico_adocao!:string;

}