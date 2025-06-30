import Usuario_ong from "./Usuario_ong";
import Pet from "./Pet";
import Usuario from "./Usuario";
export default class adocao{
    id!: number;
    data_adocao!: Date;
    pet!:Pet;
    usuario!:Usuario;
    usuario_ong!:Usuario_ong
}