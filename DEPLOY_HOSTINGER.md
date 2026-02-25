# 🚀 Deploy no Hostinger

## 📋 Arquivos Necessários

Para hospedar no Hostinger, você precisa apenas do arquivo **index.html**. É isso! 

O projeto já está 100% pronto para hospedagem tradicional.

## 🔧 Passo a Passo

### Opção 1: Upload via File Manager (Mais Fácil)

1. **Entre no painel do Hostinger**
   - Acesse: https://hpanel.hostinger.com.br/
   - Faça login com sua conta

2. **Acesse o File Manager**
   - No painel, procure por **"Gerenciador de Arquivos"** ou **"File Manager"**
   - Clique para abrir

3. **Navegue até a pasta public_html**
   - Esta é a pasta raiz do seu site
   - Tudo que você colocar aqui ficará acessível na web

4. **Faça upload do arquivo**
   - Clique em **"Upload"** ou **"Enviar Arquivo"**
   - Selecione o arquivo **index.html** deste projeto
   - Aguarde o upload completar

5. **Pronto!**
   - Acesse seu domínio: `https://seudominio.com.br`
   - A aplicação estará funcionando!

### Opção 2: Upload via FTP

1. **Obtenha as credenciais FTP**
   - No painel Hostinger, vá em **"Arquivos"** → **"Contas FTP"**
   - Anote:
     - Host: `ftp.seudominio.com.br`
     - Usuário: seu nome de usuário FTP
     - Senha: sua senha FTP
     - Porta: 21

2. **Use um cliente FTP**
   - Instale o FileZilla: https://filezilla-project.org/
   - Ou use o WinSCP (Windows)

3. **Conecte-se ao servidor**
   - Abra o FileZilla
   - Host: `ftp.seudominio.com.br`
   - Nome de usuário: seu usuário FTP
   - Senha: sua senha FTP
   - Porta: 21
   - Clique em "Conexão Rápida"

4. **Navegue até public_html**
   - No painel direito (servidor remoto)
   - Entre na pasta `public_html`

5. **Arraste o arquivo**
   - No painel esquerdo (seu computador)
   - Localize o arquivo `index.html`
   - Arraste para o painel direito (dentro de public_html)

6. **Pronto!**
   - Acesse: `https://seudominio.com.br`

## 🔄 Atualizações Futuras

### Método Automático (Git + GitHub)

Se você quiser automatizar os deploys sempre que fizer push no GitHub:

**No painel Hostinger:**
1. Vá em **"Avançado"** → **"Git"**
2. Clique em **"Conectar Repositório"**
3. Cole o URL: `https://github.com/rodrigo847/kanban_scrum.git`
4. Branch: `main`
5. Caminho de destino: `public_html`
6. Clique em **"Conectar"**

Agora, sempre que você fizer `git push`, o Hostinger atualiza automaticamente! 🎉

### Método Manual

Sempre que atualizar o código:
1. Faça suas alterações localmente
2. Commit e push para GitHub:
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push origin main
   ```
3. Faça upload do `index.html` atualizado via File Manager ou FTP

## ✅ Checklist Final

Antes de acessar seu site, confirme:

- [x] Arquivo `index.html` está em `public_html`
- [x] Firebase configurado com suas credenciais
- [x] Domínio apontando corretamente (DNS configurado)
- [x] HTTPS ativo (certificado SSL)

## 🌐 URLs de Acesso

Após o upload, você pode acessar por:

- **Domínio principal:** `https://seudominio.com.br`
- **Subdomínio (se configurado):** `https://kanban.seudominio.com.br`
- **Domínio temporário Hostinger:** `https://seu-site.hostingersite.com`

## 🔒 Segurança

### Proteção por Senha (Opcional)

Se quiser proteger o acesso ao Kanban:

1. No File Manager, crie arquivo `.htaccess` em `public_html`:
```apache
AuthType Basic
AuthName "Área Restrita - Kanban"
AuthUserFile /home/seuusuario/public_html/.htpasswd
Require valid-user
```

2. Crie arquivo `.htpasswd` com usuário e senha:
   - Use este gerador: https://htpasswdgenerator.net/
   - Cole o conteúdo gerado no arquivo `.htpasswd`

## 📱 Testando

Após o deploy:

1. **Computador:** Abra seu domínio
2. **Celular:** Abra o mesmo domínio
3. **Crie um pedido** em um dispositivo
4. **Veja aparecer automaticamente no outro** (sincronização Firebase)

## ❓ Problemas Comuns

### Página em branco
- Verifique se o arquivo está realmente em `public_html`
- Confira se o nome é exatamente `index.html` (minúsculas)

### Firebase não conecta
- Abra o Console (F12)
- Verifique se as credenciais estão corretas no código
- Confirme que o Firestore está ativo no Firebase Console

### Erro 500
- Verifique permissões do arquivo (devem ser 644)
- No File Manager: clique com botão direito → Permissões → 644

### Site não atualiza após upload
- Limpe o cache do navegador: `Ctrl + Shift + Delete`
- Ou force reload: `Ctrl + F5`

## 🎯 Vantagens do Hostinger

- ✅ Hospedagem mais barata que serviços especializados
- ✅ Domínio próprio (mais profissional)
- ✅ Painel de controle em português
- ✅ Suporte 24/7 em português
- ✅ Certificado SSL grátis (HTTPS)
- ✅ Email profissional incluído (@seudominio.com.br)

## 📞 Suporte

- **Hostinger:** Chat 24/7 no painel
- **Firebase:** https://firebase.google.com/support
- **GitHub:** https://github.com/rodrigo847/kanban_scrum/issues

---

🎉 **Pronto! Seu Kanban está no ar em domínio próprio!**
