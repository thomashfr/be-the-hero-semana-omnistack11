const express = require('express');
const cors = require('cors');
const routes = require('./routes'); /** "./" para referanciar aquivos */

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes); /**Abaixo do express */


/** 
 * Rota / Recursos
 */

/**
 * Método HTTP
 * 
 * GET: Buscar/ Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE : Deleter uma informação
 *  
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametos nomeados enviados na rotas após "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL , SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDb, CouchDB, etc
  * 
  */
/**
 * Driver: Select 8 from users
 * Query Builder : table('users').select('*').where()
 */



app.listen(3333);