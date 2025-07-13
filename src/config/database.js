import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('library.db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database ', err.message)
    }else{
        console.log('Conectado com sucesso ao Banco de dados SQlite.')
    }
})

export default db;