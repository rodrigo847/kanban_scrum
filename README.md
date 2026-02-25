# 📋 Kanban Copiadora

Sistema de gerenciamento de fluxo de trabalho com Kanban para copiadora, desenvolvido com HTML5, Tailwind CSS e Firebase Firestore.

## ✨ Funcionalidades

- ✅ 5 colunas: Orçamento → Pré-impressão → Produção → Acabamento → Pronto
- ✅ Criar, mover e excluir pedidos
- ✅ Upload de arquivos PDF
- ✅ Data prevista para conclusão
- ✅ **Sincronização em tempo real entre dispositivos** (Firebase)
- ✅ Responsivo (funciona em desktop e mobile)
- ✅ 100% funcional offline (com sincronização ao reconectar)

## 🚀 Rodando Localmente

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

Ou, para modo desenvolvimento:
```bash
npm run dev
```

### 3. Acessar a aplicação
Abra seu navegador e acesse: **http://localhost:3000**

## 🌐 Opções de Hospedagem

### Opção 1: Hostinger (Recomendado - Domínio Próprio)

**Vantagens:**
- ✅ Seu próprio domínio (ex: `seusite.com.br`)
- ✅ Mais barato a longo prazo
- ✅ Email profissional incluído
- ✅ Suporte em português

**Como fazer:**
1. Faça upload apenas do arquivo `index.html` e `.htaccess` para a pasta `public_html`
2. Via File Manager (fácil) ou FTP (avançado)
3. Deploy automático com Git (opcional)

📖 **Guia completo:** Veja [DEPLOY_HOSTINGER.md](DEPLOY_HOSTINGER.md)

### Opção 2: Vercel (Alternativa Grátis)

**Vantagens:**
- ✅ Deploy automático via GitHub
- ✅ HTTPS grátis
- ✅ Deploy instantâneo em cada push

**Como fazer:**
1. Conecte seu repositório GitHub à Vercel
2. Vercel faz deploy automaticamente
3. Acesse: `https://seu-projeto.vercel.app`

📖 **Guia completo:** Veja [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

## 🔥 Configurar Firebase (Obrigatório)

Para sincronização entre dispositivos, você precisa configurar o Firebase:

1. Crie projeto no Firebase Console
2. Ative o Firestore Database
3. Copie as credenciais
4. Cole no arquivo `index.html` (seção firebaseConfig)

📖 **Guia completo:** Veja [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

## � Estrutura do Projeto

```
kanban_scrum/
├── index.html            # Aplicação completa (único arquivo necessário para produção)
├── .htaccess            # Configuração Apache (para Hostinger)
├── server.js            # Servidor local para desenvolvimento
├── package.json         # Dependências Node.js (apenas para dev local)
├── vercel.json          # Configuração Vercel
├── FIREBASE_SETUP.md    # Guia de configuração Firebase
├── DEPLOY_HOSTINGER.md  # Guia de deploy no Hostinger
├── DEPLOY_VERCEL.md     # Guia de deploy na Vercel
└── README.md            # Este arquivo
```

## 🛠 Tecnologias

- **HTML5** - Estrutura
- **Tailwind CSS** - Estilização (via CDN)
- **JavaScript Vanilla** - Lógica da aplicação
- **Firebase Firestore** - Banco de dados NoSQL em tempo real
- **Node.js + Express** - Servidor de desenvolvimento local (opcional)

## 🔄 Workflow com GitHub

### Atualizar o projeto:

```bash
# 1. Faça suas alterações no código
# 2. Salve os arquivos
# 3. Commit e push:
git add .
git commit -m "Descrição da mudança"
git push origin main
```

**Se estiver usando Vercel:** Deploy automático em 30-60 segundos
**Se estiver usando Hostinger:** Configure Git no painel ou faça upload manual do `index.html`

## 💾 Armazenamento de Dados

- **Firebase Firestore** - Banco de dados principal (sincronização em tempo real)
- **localStorage** - Backup local e fallback (caso Firebase esteja offline)
- **PDFs** - Codificados em base64 e salvos no Firestore
- **Sincronização automática** - Dados aparecem instantaneamente em todos os dispositivos

## 📞 Suporte

- **Issues no GitHub:** https://github.com/rodrigo847/kanban_scrum/issues
- **Firebase:** https://firebase.google.com/support
- **Hostinger:** Chat no painel hpanel.hostinger.com.br
- **Vercel:** https://vercel.com/support

---

Desenvolvido com ❤️ para otimizar o fluxo de trabalho de copiadoras


