import Commands from "./Commands";

export default interface CommandsPet <T> extends Commands <T>{
    PesquisarEspecie(especie:string): T [];

}