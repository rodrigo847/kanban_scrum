# Kanban Copiadora

Aplicação web de kanban desenvolvida com Node.js, Express e Tailwind CSS.

## 🚀 Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

Ou, para modo desenvolvimento com auto-reload:
```bash
npm run dev
```

### 3. Acessar a aplicação
Abra seu navegador e acesse: **http://localhost:3000**

## 🌐 Deploy na Vercel

### Opção 1: Deploy automático via GitHub

1. Faça push do repositório para GitHub:
```bash
git remote add origin https://github.com/seu-usuario/kanban_scrum.git
git branch -M main
git push -u origin main
```

2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório GitHub
5. Vercel detectará automaticamente as configurações
6. Clique em "Deploy"

### Opção 2: Deploy via CLI Vercel

```bash
npm install -g vercel
vercel
```

Siga as instruções interativas e sua aplicação estará online!

## 📋 Funcionalidades

- ✅ Interface responsiva com Tailwind CSS
- ✅ 5 colunas de fluxo: Orçamento, Pré-impressão, Produção, Acabamento, Pronto
- ✅ Criar e gerenciar pedidos
- ✅ Mover pedidos entre colunas
- ✅ Anexar PDFs aos pedidos
- ✅ Data prevista para cada pedido
- ✅ Persistência de dados com localStorage
- ✅ Design moderno com gradiente azul

## 📁 Estrutura do projeto

```
kanban_scrum/
├── api/
│   └── index.js          # Serverless function para Vercel
├── public/
│   └── index.html        # Interface Tailwind CSS
├── server.js             # Servidor Express
├── package.json          # Configuração do projeto
├── vercel.json           # Configuração Vercel
├── .env.example          # Variáveis de ambiente exemplo
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Este arquivo
```

## 🛠 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework Web
- **Tailwind CSS** - Framework CSS utilitário
- **HTML5** - Markup
- **Vercel** - Plataforma de deployment

## 📝 Variáveis de Ambiente

Copie `.env.example` para `.env` e configure conforme necessário:

```bash
PORT=3000
NODE_ENV=development
```

## 💾 Dados persistidos

- Pedidos são salvos automaticamente no localStorage do navegador
- PDFs são codificados em base64 e armazenados localmente
- Datas previstas são preservadas ao mover pedidos

## 🚀 Deploy Rápido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fseu-usuario%2Fkanban_scrum)

