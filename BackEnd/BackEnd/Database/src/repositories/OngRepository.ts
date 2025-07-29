import Conexao from "../classes/Conexao";

export default class OngRepository {
    private db = new Conexao();

    async cadastrarOng(dados: any) {
        const conn = await this.db.getConexao();
        const sql = `
            INSERT INTO Usuario_ong
            (nome_ong, contato, id_endereco, cnpj_ong, razao_social, nome_fantasia, descricao, conexao, doc_comprovacao, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const [result]: any = await conn.execute(sql, [
            dados.nome_ong,
            dados.contato,
            dados.id_endereco,
            dados.cnpj_ong,
            dados.razao_social,
            dados.nome_fantasia,
            dados.descricao,
            dados.conexao,
            dados.doc_comprovacao,
            dados.senha
        ]);
        return { id: result.insertId, ...dados };
    }
}
