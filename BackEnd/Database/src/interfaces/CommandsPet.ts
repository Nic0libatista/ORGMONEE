import Commands from "./Commands";

export default interface CommandsPet <T> extends Commands <T>{
    PesquisarEspecie(especie:string): Promise<T[]>;
    PesquisarCor(cor:string): Promise<T[]>;
    PesquisarRaca(raca:string): Promise<T[]>;
    PesquisarSexo(sexo:string): Promise<T[]>;
    PesquisarPorte(porte:string): Promise<T[]>;
    PesquisarComportamento(comportamento:string): Promise<T[]>;
    PesquisarIdade(idade:string): Promise<T[]>;
    PesquisarDisponibilidade(disponibilidade:string): Promise<T[]>;

    

}