import Commands from "./Commands";

export default interface CommandsUsuOng <T> extends Commands<T>{
    PesquisarOng(nome_fantasia:string) : Promise<T>;

}