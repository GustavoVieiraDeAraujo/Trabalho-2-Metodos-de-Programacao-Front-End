# Plataforma de Questoes (Front-End)

Projeto da disciplina **Metodos de Programacao (MP)** do Departamento de Ciencia da Computacao da Universidade de Brasilia. SPA em React para uma plataforma de questoes academicas, onde professores criam perguntas e alunos as respondem, com autenticacao, estatisticas e organizacao por turmas.

> **Back-End:** [Trabalho-2-Metodos-de-Programacao-Back-End](https://github.com/GustavoVieiraDeAraujo/Trabalho-2-Metodos-de-Programacao-Back-End) (Rails API na porta 3000)
>
> **Design:** [Figma](https://www.figma.com/file/ezP9maq6gd30stmY59pMFZ/Trabalho-MP)

---

## Sumario

- [Participantes](#participantes)
- [Tecnologias](#tecnologias)
- [Escopo do Projeto](#escopo-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Requisitos](#requisitos)
- [Como Executar](#como-executar)
- [Paginas e Funcionalidades](#paginas-e-funcionalidades)

---

## Participantes

| Nome                              | Matricula |
|-----------------------------------|-----------|
| Gustavo Vieira de Araujo          | 211068440 |
| Caetano Korilo                    | 212006737 |
| Arthur Antero de Sa               | 212006577 |
| Luiz Henrique Figueiredo Soares   | 211068403 |

---

## Tecnologias

| Tecnologia         | Uso                                              |
|--------------------|--------------------------------------------------|
| React 18.2         | Framework de UI                                  |
| Vite 4.1           | Build tool e dev server                          |
| react-router-dom 6 | Roteamento client-side                           |
| styled-components  | Estilizacao CSS-in-JS                            |
| axios              | Cliente HTTP para comunicacao com a API           |
| js-cookie          | Persistencia de sessao via cookies               |
| react-icons        | Biblioteca de icones                             |
| ESLint (Airbnb)    | Linting                                          |
| Prettier           | Formatacao de codigo                             |

---

## Escopo do Projeto

| Funcionalidade                   | Implementacao                                                |
|----------------------------------|--------------------------------------------------------------|
| Login e cadastro                 | Autenticacao por email/senha com token persistido em cookie   |
| Perfil do usuario                | Consulta de dados e estatisticas (acertos, erros, total)      |
| Edicao de conta                  | Atualizar nome, email, matricula; excluir conta               |
| CRUD de questoes (professor)     | Criar, listar, editar e excluir questoes                      |
| Responder questoes (aluno)       | Visualizar questao, submeter resposta, ver resultado           |
| Listagem de turmas               | Visualizar turmas cadastradas                                 |
| Listagem de provas               | Visualizar provas cadastradas                                 |
| Navegacao com Navbar             | Barra lateral com links para questoes, turmas, provas, conta  |

---

## Estrutura do Projeto

| Diretorio / Arquivo                        | Descricao                                              |
|--------------------------------------------|--------------------------------------------------------|
| `src/main.jsx`                             | Ponto de entrada do React                               |
| `src/app.jsx`                              | Definicao de rotas (react-router-dom)                   |
| `src/services/api.js`                      | Instancia do axios (base URL da API)                    |
| `src/context/useUserContext.jsx`           | Context de autenticacao (login, logout, cookie)          |
| `src/components/Button/`                   | Componente de botao reutilizavel                         |
| `src/components/Input/`                    | Componente de input reutilizavel                         |
| `src/components/RoundButton/`              | Botao circular (acao rapida)                             |
| `src/components/Navbar/`                   | Barra de navegacao lateral                               |
| `src/components/QuestionsComponents/`      | QuestionCard e QuestionsContainer                        |
| `src/components/QuizComponents/`           | QuizCard e QuizContainer                                 |
| `src/components/TeamsComponents/`          | TeamCard e TeamContainer                                 |
| `src/pages/Login/`                         | Tela de login                                            |
| `src/pages/Register/`                      | Tela de cadastro                                         |
| `src/pages/MyAccount/`                     | Perfil e estatisticas do usuario                         |
| `src/pages/UserUpdate/`                    | Edicao de dados da conta                                 |
| `src/pages/Questions/`                     | Listagem de questoes                                     |
| `src/pages/TeacherPages/QuestionCreate/`   | Criacao de questao (professor)                           |
| `src/pages/TeacherPages/QuestionUpdate/`   | Edicao de questao (professor)                            |
| `src/pages/StudentPages/QuestionAnswer/`   | Resposta de questao (aluno)                              |
| `src/pages/Teams/`                         | Listagem de turmas                                       |
| `src/pages/Quizzes/`                       | Listagem de provas                                       |

---

## Requisitos

- Node.js >= 16
- Yarn >= 1.22
- Back-End rodando em `http://localhost:3000`

---

## Como Executar

```bash
# Instalar dependencias
yarn install

# Iniciar o servidor de desenvolvimento (porta 5173)
yarn dev

# Linting
yarn lint:fix
```

> O back-end Rails deve estar rodando na porta 3000 antes de iniciar o front-end.

---

## Paginas e Funcionalidades

| Rota                    | Pagina           | Descricao                                           |
|-------------------------|------------------|------------------------------------------------------|
| `/`                     | Login            | Autenticacao por email e senha                       |
| `/Register`             | Cadastro         | Criacao de conta (nome, email, matricula, papel)      |
| `/MyAccount`            | Minha Conta      | Perfil com estatisticas de questoes respondidas       |
| `/UserUpdate/:id`       | Editar Conta     | Atualizar dados ou excluir conta                      |
| `/questoes`             | Questoes         | Listagem; professor ve CRUD, aluno ve link de resposta|
| `/QuestionCreate`       | Criar Questao    | Formulario de criacao (professor)                     |
| `/QuestionUpdate/:id`   | Editar Questao   | Formulario de edicao (professor)                      |
| `/QuestionAnswer/:id`   | Responder        | Aluno responde e ve se acertou                        |
| `/turmas`               | Turmas           | Listagem de turmas cadastradas                        |
| `/provas`               | Provas           | Listagem de provas cadastradas                        |

---

> Documentacao gerada com auxilio de IA.
