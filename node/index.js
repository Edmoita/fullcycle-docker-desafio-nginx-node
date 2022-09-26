const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config);

createPeopleTable()
insertIntoPeople('Edson')

function createPeopleTable() {
  connection.query(`CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`)
}

function insertIntoPeople(name = 'Edson') {
  connection.query(`INSERT INTO people(name) values('${name}')`)
}

function getPeople() {
  return new Promise((resolve, reject) => connection.query(`SELECT * FROM people`, (error, results, fields) => {
    if (error) throw reject(error);
    return resolve(results);
  }))
}

app.get('/', async (req, res) => {
  const people = await getPeople()
  res.send(`
  <p><h1>Full Cycle Rocks!</h1></p>
  <p>Lista de nomes cadastrada no banco de dados</p>
  <ul>${people.map(person => `<li>${person.name}</li>`).join('')}</ul>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})