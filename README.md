# 📚 Sistema de Gerenciamento de Biblioteca

Um sistema completo de gerenciamento de biblioteca construído com Node.js, Express e SQLite, oferecendo funcionalidades para gerenciar usuários, livros e empréstimos.

## ✨ Funcionalidades

- **🔐 Autenticação de Usuários**
  - Registro e login de usuários
  - Geração de tokens JWT
  - Middleware de autenticação protegendo rotas

- **📖 Gerenciamento de Livros**
  - CRUD completo de livros
  - Busca de livros por título ou autor
  - Associação de livros aos usuários que os cadastraram

- **📋 Gerenciamento de Empréstimos**
  - Criação e controle de empréstimos
  - Data de vencimento configurável
  - Relacionamento entre usuários, livros e empréstimos

- **⚙️ Funcionalidades Adicionais**
  - Validação de dados com Zod
  - Serviço de cron para tarefas agendadas
  - API RESTful com endpoints bem definidos

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Banco de Dados**: SQLite3
- **Autenticação**: JWT (JSON Web Tokens)
- **Validação**: Zod
- **Variáveis de Ambiente**: dotenv
- **Agendamento**: node-cron

## 📦 Estrutura do Projeto

```
src/
├── config/
│ └── database.js # Configuração do banco SQLite
|
├── controller/
│ ├── book.controllers.js # Controladores para livros
│ ├── loan.controller.js # Controladores para empréstimos
│ └── user.controllers.js # Controladores para usuários
|
├── middlewares/
│ ├── auth.middleware.js # Middleware de autenticação
│ └── validation.middleware.js # Middleware de validação
├── repositories/
│ ├── book.repositories.js # Operações de banco para livros
│ ├── loan.repositories.js # Operações de banco para empréstimos
│ └── user.repositories.js # Operações de banco para usuários
|
├── routes/
│ ├── book.routes.js # Rotas para livros
│ ├── index.js # Agrupador de rotas
│ ├── loan.routes.js # Rotas para empréstimos
│ └── user.routes.js # Rotas para usuários
|
├── schema/
│ ├── book.schema.js # Schemas de validação para livros
│ ├── loan.schema.js # Schemas de validação para empréstimos
│ └── user.schema.js # Schemas de validação para usuários
|
├── service/
│ ├── auth.service.js # Serviços de autenticação
│ ├── book.service.js # Serviços para livros
│ ├── cron.service.js # Serviço de tarefas agendadas
│ ├── loan.service.js # Serviços para empréstimos
│ └── user.services.js # Serviços para usuários
|
└── index.js # Ponto de entrada da aplicação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <https://github.com/Lucas-matheuss/biblioteca-comunitaria.git>
   cd library-management-system

2. Instale as dependências

```bash
npm install
```
3.Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo .env com suas configurações:
text
PORT=3000
SECRET_JWT=seu_segredo_super_secreto_aqui

4.Inicie o servidor

```bash
npm start
```
Ou para desenvolvimento com auto-reload:

```bash
npm run dev
```
5.Acesse a API

text
http://localhost:3000

📡 Endpoints da API

👥 Usuários

| METODO | ROTA | DESCRIÇÂO | AUTENTICAÇÂO|
|--------|------|-----------|-------------|
|POST | /users | - Criar novo usuário | ❌ |
|POST | /users/login | - Login de usuário | ❌ |
|GET | /users | - Listar todos os usuários (requer autenticação) | ❌
|GET | /users/:id | - Buscar usuário por ID (requer autenticação) | ✅ |
|PATCH | /users/:id | - Atualizar usuário (requer autenticação) | ✅ |
|DELETE | /users/:id |- Deletar usuário (requer autenticação) | ✅ |

📚 Livros

| METODO | ROTA | DESCRIÇÂO | AUTENTICAÇÂO |
|--------|------|-----------|--------------|
| GET | /books | - Listar todos os livros | ❌ |
|POST | /books | - Criar novo livro | ✅ |
|GET | /books/search?search=termo | - Buscar livros por título ou autor |
|GET | /books/:id |- Buscar livro por ID | ❌| |
|PATCH | /books/:id |- Atualizar livro | ✅ |
|DELETE | /books/:id |- Deletar livro | ✅ |

📋 Empréstimos
| METODO | ROTA | DESCRIÇÂO | AUTENTICAÇÂO |
|--------|------|-----------|--------------|
| POST | /loans | - Criar novo empréstimo | ❌ |
| GET | /loans | - Listar todos os empréstimos | ❌|
| GET | /loans/:id | - Buscar empréstimo por ID | ❌| |
| DELETE | /loans/:id | - Deletar empréstimo | ✅ |

🔐 Autenticação
A maioria dos endpoints requer autenticação via JWT. Inclua o token no header das requisições:

Authorization: Bearer <seu_token_jwt>

🗃️ Banco de Dados
O projeto utiliza SQLite com as seguintes tabelas:

users: Armazena informações dos usuários

books: Armazena informações dos livros

loans: Registra os empréstimos com relacionamentos para users e books

As tabelas são criadas automaticamente na primeira execução.

🧪 Exemplos de Uso
Criar Usuário
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "joao",
    "email": "joao@email.com",
    "password": "senha123"
  }'
```
Fazer Login
```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@email.com",
    "password": "senha123"
  }'
```
Criar Livro (com autenticação)
```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <seu_token>" \
  -d '{
    "title": "Dom Casmurro",
    "author": "Machado de Assis"
  }'
📝 Scripts Disponíveis
npm start - Inicia o servidor em produção

npm run dev - Inicia o servidor em modo desenvolvimento

npm test - Executa os testes (se houver)

🤝 Contribuição
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🆘 Suporte
Se encontrar problemas ou tiver dúvidas, abra uma issue no repositório do projeto.