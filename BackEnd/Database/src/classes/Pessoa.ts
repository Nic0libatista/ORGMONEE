//Criar a classe pai(superclasse) chamada Pessoa
//que passará todos os seus dados às classes
//filhas
/*
A classe Pessoa segue o Principio O(Open/Close)
do SOLID, onde , temos a classe fechada para 
modificações e aberta para extensões. 
O qualificador abstract(abstrato) mantém a 
classe Pessoa, sempre abstrata, não permitido
que ela seja materializada, ou seja, não poderá
ser uma instância
*/
import Endereco from "./Endereco";
export default abstract class Pessoa{
    id!:number;
    nome!:string;
    cpf!:string;
    endereco!: Endereco;
    data_nascimento!:Date;
}