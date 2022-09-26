# fullcycle-docker-desafio-nginx-node
  Desafio com Nginx e Node.js do módulo de Docker do curso Full Cycle 3.0

## Como executar
- ```bash
  docker-compose -d
  ```
- Acesse [http://localhost:8080](http://localhost:8080)

## Critérios de aceitação
- [x] Quando o nginx for acessado, deve fazer uma chamada à aplicação Node.js;
  - [x] A aplicação Node.js adicionará um registro na tabela `people` do mysql;
  - [x] E retornará a mensagem `Full Cycle Rocks!` com a lista de nomes cadastrada no banco de dados.
- [x] Deverá ser gerado um arquivo docker-compose que disponibilizará o acesso na porta 8080.