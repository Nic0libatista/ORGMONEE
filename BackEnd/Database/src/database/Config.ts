import mysql from "mysql2"

export const conexao = mysql.createConnection({
    host:"10.26.45.39",
    port:3280,
    user:"root",
    password:"pet123",
    database:"dbpet"
});
