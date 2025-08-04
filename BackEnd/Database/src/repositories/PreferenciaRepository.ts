import Preferencia from "../classes/Preferencia";
import { conexao } from "../database/Config";
import Commands from "../interfaces/Commands";

export default class PreferenciaRepository implements Commands<Preferencia> {
Cadastrar(obj: any): Promise<any> {
return new Promise((resolve, reject) => {
conexao.query(
`INSERT INTO Preferencia (id_usuario, tipo_pet, idade_pet, porte, comportamento, nivel_energia) VALUES (?, ?, ?, ?, ?, ?)`,
[
obj.id_usuario,
obj.especie, // era tipo_pet
obj.faixa_etaria, // era idade_pet
obj.porte,
obj.temperamento, // era comportamento
obj.energia // era nivel_energia
],
(erro, resultado: any) => {
if (erro) {
return reject(erro);
} else {
return resolve(resultado);
}
}
);
});
}

Listar(): Promise<Preferencia[]> {
throw new Error("Method not implemented.");
}
Apagar(id: number): Promise<string> {
throw new Error("Method not implemented.");
}
Atualizar(obj: Preferencia): Promise<Preferencia> {
throw new Error("Method not implemented.");
}
PesquisarId(id: number): Promise<Preferencia> {
throw new Error("Method not implemented.");
}
}