import express, { Express } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota catch-all para SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor Kanban Copiadora rodando em http://localhost:${PORT}`);
        console.log(`📋 Pressione CTRL+C para parar o servidor`);
    });
}

// Para produção (Vercel)
export default app;
