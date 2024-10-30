
# Gerenciador de Tarefas - Desafio Tech Lead

Este projeto é uma aplicação de gerenciamento de tarefas, desenvolvida com **Vue 3** no frontend e **Node.js** com **TypeScript** e **Firebase** no backend. O objetivo é fornecer uma interface de usuário para que usuários possam gerenciar suas tarefas com autenticação segura, suporte a CRUD completo e documentação da API.

## Tecnologias Utilizadas

- **Frontend**: Vue 3, Vite, Axios, Firebase Authentication
- **Backend**: Node.js, TypeScript, Firebase Firestore, Express, Swagger

## Estrutura do Projeto

```plaintext
desafio-tech-lead/
├── frontend/
│   ├── src/
│   └── public/
└── backend/
    ├── src/
    └── .env
```

## Configuração e Instalação

### Pré-requisitos

- **Node.js** (recomendado: versão 14 ou superior)
- **Firebase Account** (para configuração de autenticação e Firestore)

### Clonar o Repositório

```sh
git clone https://github.com/seu-usuario/desafio-tech-lead.git
cd desafio-tech-lead
```

### Configuração do Backend

1. **Navegue para o diretório `backend`**:

   ```sh
   cd backend
   ```

2. **Instale as dependências**:

   ```sh
   npm install
   ```

3. **Configuração do Firebase**:
   - Crie um projeto no Firebase e ative o Firebase Authentication e Firestore.
   - Obtenha as credenciais do Firebase e configure um arquivo `.env` na raiz do diretório `backend` com o seguinte conteúdo:

     ```plaintext
     FIREBASE_PROJECT_ID=your-project-id
     FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR-PRIVATE-KEY\n-----END PRIVATE KEY-----\n"
     FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
     FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

4. **Scripts do Backend**:

   - **Iniciar o servidor em modo de desenvolvimento**:

     ```sh
     npm run dev
     ```

   - **Build do servidor para produção**:

     ```sh
     npm run build
     ```

   - **Executar o servidor em produção**:

     ```sh
     npm start
     ```

### Configuração do Frontend

1. **Navegue para o diretório `frontend`**:

   ```sh
   cd ../frontend
   ```

2. **Instale as dependências**:

   ```sh
   npm install
   ```

3. **Configuração do Firebase**:
   - No Firebase Console, crie um aplicativo web para o frontend e copie a configuração do Firebase.
   - Crie um arquivo `firebaseConfig.js` em `src` e cole a configuração:

     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getAuth } from 'firebase/auth';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     ```

4. **Scripts do Frontend**:

   - **Iniciar o servidor de desenvolvimento**:

     ```sh
     npm run dev
     ```

   - **Build para produção**:

     ```sh
     npm run build
     ```

5. **Executar o servidor de pré-visualização**:

   ```sh
   npm run serve
   ```

## Funcionalidades

- **Autenticação de Usuário**: Registro e login usando Firebase Authentication.
- **Gerenciamento de Tarefas**: Interface para criar, visualizar, atualizar e deletar tarefas.
- **Proteção de Rotas**: As rotas de `Dashboard` são protegidas, exigindo autenticação.
- **Documentação da API**: A API do backend está documentada usando Swagger.

## Documentação da API

A documentação da API pode ser acessada no Swagger após iniciar o backend:

```
http://localhost:5000/api-docs
```

## Estrutura de Diretórios

### Frontend

- **`/src/components`**: Componentes Vue reutilizáveis (ex.: `TaskForm`, `TaskList`).
- **`/src/views`**: Páginas principais da aplicação (ex.: `Home`, `Login`, `Dashboard`).
- **`/src/router`**: Configuração das rotas Vue.

### Backend

- **`/src/config`**: Configurações para Firebase e Swagger.
- **`/src/controllers`**: Lógica dos controladores para autenticação e gerenciamento de tarefas.
- **`/src/routes`**: Definição das rotas de autenticação e tarefas.
- **`/src/middlewares`**: Middlewares para autenticação (ex.: `authMiddleware`).

## Recomendações de IDE

- **VSCode** com as extensões [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) e [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) para suporte a Vue e TypeScript.

## Executando o Projeto

1. Inicie o backend:
   ```sh
   cd backend
   npm run dev
   ```

2. Inicie o frontend:
   ```sh
   cd frontend
   npm run dev
   ```

## Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
