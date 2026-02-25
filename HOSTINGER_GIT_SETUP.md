# 🔄 Integração Git com Hostinger - Passo a Passo

## 📋 Pré-requisitos

- ✅ Conta ativa no Hostinger
- ✅ Domínio configurado
- ✅ Repositório GitHub: https://github.com/rodrigo847/kanban_scrum.git

## 🚀 Configuração (5 minutos)

### Passo 1: Acessar o Painel Hostinger

1. Acesse: https://hpanel.hostinger.com.br/
2. Faça login com suas credenciais
3. Selecione o domínio onde quer hospedar o Kanban

### Passo 2: Configurar Git

1. No menu lateral, procure por **"Avançado"**
2. Clique em **"Git"** ou **"Git Version Control"**
   - Se não encontrar: busque por "Gerenciador Git" ou "Controle de Versão"

### Passo 3: Criar Nova Implantação

1. Clique no botão **"Criar nova implantação"** ou **"Create new deployment"**

2. Preencha os campos:

   **URL do Repositório:**
   ```
   https://github.com/rodrigo847/kanban_scrum.git
   ```

   **Branch:**
   ```
   main
   ```

   **Caminho de implantação:**
   ```
   public_html
   ```
   ⚠️ **IMPORTANTE:** Se você tem outros sites nessa pasta, crie uma subpasta:
   ```
   public_html/kanban
   ```
   Nesse caso, acesse via: `https://seudominio.com.br/kanban`

3. Clique em **"Salvar"** ou **"Criar"**

### Passo 4: Autenticação GitHub

Se o repositório for público (que é o caso):
- ✅ Não precisa de autenticação adicional
- O Hostinger vai clonar automaticamente

Se pedir credenciais:
1. **Username:** `rodrigo847`
2. **Password/Token:** Gere um Personal Access Token no GitHub:
   - GitHub → Settings → Developer settings → Personal access tokens → Generate new token
   - Marque: `repo` (acesso total ao repositório)
   - Copie o token gerado
   - Cole no campo Password

### Passo 5: Deploy Inicial

1. Após salvar, o Hostinger vai fazer o **primeiro deploy automático**
2. Aguarde 1-2 minutos (você verá um indicador de progresso)
3. Status mudará para: **"Deployed"** ✅

### Passo 6: Testar

1. Acesse seu domínio: `https://seudominio.com.br`
2. O Kanban deve estar funcionando!
3. Teste criar um pedido

## 🎯 Como Funciona Agora

### Deploy Automático

Sempre que você fizer:
```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

**O Hostinger detecta e faz deploy automaticamente em 1-2 minutos!** 🚀

### Verificar Status do Deploy

1. Volte em **Avançado → Git**
2. Você verá:
   - ✅ **Status:** Deployed
   - 📅 **Último deploy:** Data e hora
   - 🔄 **Commit:** Hash do último commit

### Forçar Deploy Manual

Se precisar forçar um novo deploy:
1. Entre em **Avançado → Git**
2. Clique em **"Pull"** ou **"Atualizar"** ao lado da implantação
3. Confirme

## 🔧 Configurações Avançadas

### Webhook Automático (Opcional)

Para deploy instantâneo ao fazer push:

1. No Hostinger, em **Git**, copie a **"Webhook URL"**
2. No GitHub:
   - Vá em seu repositório: https://github.com/rodrigo847/kanban_scrum
   - Settings → Webhooks → Add webhook
   - Cole a URL do Hostinger
   - Content type: `application/json`
   - Events: `Just the push event`
   - Clique em **"Add webhook"**

Agora o deploy é **instantâneo**! ⚡

### Múltiplos Ambientes

Se quiser ter versão de teste:
1. Crie branch `develop` no Git
2. Configure outra implantação no Hostinger:
   - Branch: `develop`
   - Caminho: `public_html/kanban-teste`
3. Teste em: `https://seudominio.com.br/kanban-teste`

## 📝 Workflow Recomendado

### Para fazer alterações:

```bash
# 1. Edite os arquivos localmente
# Exemplo: mudar cor do botão no index.html

# 2. Veja suas alterações
git status

# 3. Adicione ao staging
git add .

# 4. Commit com mensagem descritiva
git commit -m "Alterar cor do botão Novo Pedido para verde"

# 5. Envie para GitHub
git push origin main

# 6. Aguarde 1-2 minutos
# O Hostinger detecta automaticamente e faz deploy!

# 7. Confira no navegador
# https://seudominio.com.br
```

## ✅ Checklist de Verificação

Após configurar, confirme:

- [ ] Git está configurado no painel Hostinger
- [ ] URL do repositório está correta
- [ ] Branch é `main`
- [ ] Caminho é `public_html` (ou subpasta desejada)
- [ ] Status mostra **"Deployed"**
- [ ] Site abre no navegador sem erros
- [ ] Console (F12) mostra: `✅ Firebase conectado`
- [ ] Consegue criar pedidos
- [ ] Pedidos sincronizam entre dispositivos

## 🐛 Solução de Problemas

### Erro: "Failed to clone repository"
**Causa:** Repositório privado sem credenciais
**Solução:** Torne o repositório público ou adicione Personal Access Token

### Erro: "Permission denied"
**Causa:** Permissões incorretas na pasta
**Solução:** 
1. File Manager → public_html
2. Clique com botão direito → Permissões
3. Defina como 755

### Deploy travado em "Deploying..."
**Solução:**
1. Cancele o deploy
2. Tente novamente em 5 minutos
3. Ou delete a implantação e crie novamente

### Arquivos não aparecem no site
**Causa:** Caminho de implantação errado
**Solução:**
1. Verifique se o caminho é `public_html`
2. No File Manager, confirme se `index.html` está em `public_html/index.html`

### Site mostra código HTML ao invés da página
**Causa:** Servidor não reconhece .html
**Solução:**
1. Renomeie `index.html` para `index.php` (via File Manager)
2. Ou verifique se há arquivo `.htaccess` correto

## 📞 Suporte

**Hostinger:**
- Chat 24/7 no painel (botão no canto inferior direito)
- https://www.hostinger.com.br/tutoriais/

**GitHub:**
- Seu repositório: https://github.com/rodrigo847/kanban_scrum/issues

## 🎉 Vantagens do Git Deploy

- ✅ **Deploy automático** ao fazer push
- ✅ **Histórico completo** de todas as versões
- ✅ **Rollback fácil** se algo der errado
- ✅ **Trabalho colaborativo** (múltiplos desenvolvedores)
- ✅ **Backup automático** no GitHub
- ✅ **Controle de versão** profissional

---

**Pronto!** Agora você tem um workflow profissional: código no GitHub, deploy automático no Hostinger! 🚀
