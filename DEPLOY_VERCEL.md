# 🚀 Instruções de Deploy na Vercel

Sua aplicação Kanban Copiadora está pronta para rodar na Vercel!

## Passo 1: Configurar Git e GitHub

Se ainda não fez, execute estes comandos:

```bash
cd "c:\Users\Note Rodrigo\Documents\PROGRAMACAO\kanban_scrum"
git remote add origin https://github.com/SEU-USUARIO/kanban_scrum.git
git branch -M main
git push -u origin main
```

**Substitua `SEU-USUARIO` pelo seu usuário do GitHub**

## Passo 2: Deploy na Vercel (2 opções)

### Opção A: Deploy via Vercel Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **"New Project"**
3. Selecione o repositório `kanban_scrum`
4. Vercel detectará automaticamente as configurações
5. Clique em **"Deploy"** e aguarde (~1-2 minutos)

### Opção B: Deploy via CLI Vercel

```bash
npm install -g vercel
vercel
```

Siga as instruções interativas - é muito simples!

## Passo 3: Acessar a Aplicação

Após o deploy, você receberá uma URL como:
```
https://kanban-scrum.vercel.app
```

Pronto! Sua aplicação está online! 🎉

## 📋 O que foi configurado para a Vercel

✅ **vercel.json** - Configuração de build e rotas
✅ **api/index.js** - Serverless function (padrão Vercel)
✅ **server.js** - Compatível com produção
✅ **package.json** - Dependências otimizadas

## 🔄 Atualizações Futuras

Qualquer push para `main` no GitHub dispara um novo deploy automático na Vercel!

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

## ⚙️ Variáveis de Ambiente (se necessário)

1. No Vercel Dashboard, vá para **Settings**
2. Clique em **Environment Variables**
3. Adicione as variáveis conforme necessário

## 🐛 Troubleshooting

**"Failed to deploy"?**
- Verifique se package.json existe
- Confirme que api/index.js está correto
- Veja os logs no Vercel Dashboard

**Aplicação aberta mas não funciona?**
- Verifique o Console (F12) do navegador
- Veja os logs do servidor no Vercel

**PDFs não funcionam?**
- localStorage funciona normalmente na Vercel
- Certifique-se de usar HTTPS (Vercel já faz isso)

## 📞 Suporte

Precisar de ajuda? Acesse:
- [Documentação Vercel](https://vercel.com/docs)
- [Vercel Community](https://vercel.com/community)

---

🎉 Parabéns! Sua aplicação Kanban está pronta para produção!
