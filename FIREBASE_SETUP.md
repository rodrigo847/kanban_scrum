# 🔥 Configuração do Firebase para Sincronização

## Passo 1: Criar Conta e Projeto no Firebase

1. Acesse: https://console.firebase.google.com/
2. Faça login com sua conta Google
3. Clique em **"Adicionar projeto"** ou **"Add project"**
4. Nome do projeto: `kanban-copiadora` (ou qualquer nome de sua preferência)
5. Desabilite o Google Analytics (não é necessário para este projeto)
6. Clique em **"Criar projeto"**

## Passo 2: Configurar o Firestore Database

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha modo: **"Iniciar em modo de teste"** (teste mode)
   - Isso permite leitura e escrita por 30 dias sem autenticação
4. Localização: Escolha **southamerica-east1 (São Paulo)** para melhor performance
5. Clique em **"Ativar"**

## Passo 3: Obter as Credenciais

1. No menu lateral, clique no ícone de **engrenagem ⚙️** ao lado de "Visão geral do projeto"
2. Selecione **"Configurações do projeto"**
3. Role a página até encontrar a seção **"Seus apps"**
4. Clique no ícone **</> (Web)**
5. Apelido do app: `kanban-web`
6. **NÃO** marque "Também configurar o Firebase Hosting"
7. Clique em **"Registrar app"**
8. Copie o código que aparece na seção `firebaseConfig`

## Passo 4: Adicionar as Credenciais no Código

1. Abra o arquivo `index.html`
2. Procure por esta seção (próximo ao início do arquivo):

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJECT_ID.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_PROJECT_ID.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

3. Substitua os valores pelos valores reais do Firebase Console
4. Exemplo do que você verá no Firebase:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567",
    authDomain: "kanban-copiadora.firebaseapp.com",
    projectId: "kanban-copiadora",
    storageBucket: "kanban-copiadora.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

5. Salve o arquivo

## Passo 5: Fazer Deploy das Alterações

No terminal, execute:

```bash
git add .
git commit -m "Adicionar credenciais Firebase"
git push origin main
```

O Vercel irá automaticamente fazer o deploy da versão atualizada em alguns segundos.

## Passo 6: Testar a Sincronização

1. Abra o site no navegador do computador
2. Crie um novo pedido
3. Abra o site no celular (mesmo URL)
4. O pedido deve aparecer automaticamente (sincronização em tempo real)!

## 🔒 Segurança (Opcional - Após os Testes)

Após testar e confirmar que está funcionando, você pode melhorar a segurança:

1. No Firebase Console, vá em **Firestore Database**
2. Clique na aba **"Regras"**
3. Substitua as regras por:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /cards/{document=**} {
      allow read, write: if true;  // Mantém acesso público para este projeto
    }
  }
}
```

Ou para restringir a um domínio específico:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /cards/{document=**} {
      allow read, write: if request.auth != null || request.time < timestamp.date(2025, 12, 31);
    }
  }
}
```

## ❓ Solução de Problemas

### Erro: "Firebase: Firebase App named '[DEFAULT]' already exists"
- Isso é normal se você recarregar a página. A aplicação detecta e usa a instância existente.

### Erro: "Missing or insufficient permissions"
- Verifique se o Firestore foi criado em **modo de teste**
- As regras devem permitir leitura e escrita por 30 dias

### Os dados não sincronizam
- Verifique se as credenciais estão corretas no `firebaseConfig`
- Abra o Console do navegador (F12) e procure por erros
- Verifique se o projeto Firebase está ativo

### Dados aparecem no navegador mas não no celular
- Limpe o cache do navegador do celular
- Aguarde alguns segundos (a sincronização é em tempo real mas pode ter delay de rede)
- Verifique se ambos estão acessando a mesma URL

## 📱 Testando

URLs para teste:
- Produção: https://kanban-scrum-rodrigo847s-projects.vercel.app/
- Ou o URL personalizado que você configurou no Vercel

## 💡 Dicas

- O Firebase tem um limite generoso no plano gratuito (50k leituras/dia, 20k escritas/dia)
- Perfeito para uso interno de uma copiadora
- Os dados ficam salvos na nuvem do Google
- Sincronização automática em tempo real
- Funciona offline (quando voltar online, sincroniza automaticamente)

---

🎉 Pronto! Agora seu Kanban terá sincronização em tempo real entre todos os dispositivos!
