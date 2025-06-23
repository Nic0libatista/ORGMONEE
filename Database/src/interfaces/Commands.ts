export default interface Commands<T>{
    Cadastrar(obj:T):Promise<T>;
    Listar():Promise<T[]>;
    Apagar(id:number):Promise<string>;
    Atualizar(obj:T):Promise<T>;
   // PesquisarPorOng(id:number):Promise<T>;

}