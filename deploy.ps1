# Script de Deploy Automático - Kanban Copiadora
# Autor: GitHub Copilot
# Uso: .\deploy.ps1 "mensagem do commit"

param(
    [string]$mensagem = ""
)

Write-Host "`n🚀 ===== DEPLOY AUTOMÁTICO =====" -ForegroundColor Cyan

# 1. Verificar se há alterações
Write-Host "`n📋 Verificando alterações..." -ForegroundColor Yellow
$status = git status --short
if (-not $status) {
    Write-Host "✅ Nenhuma alteração detectada. Nada para fazer." -ForegroundColor Green
    exit 0
}

Write-Host "Alterações encontradas:" -ForegroundColor White
git status --short

# 2. Adicionar todas as alterações
Write-Host "`n📦 Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao adicionar arquivos!" -ForegroundColor Red
    exit 1
}

# 3. Pedir mensagem de commit se não foi passada
if (-not $mensagem) {
    $mensagem = Read-Host "`n💬 Digite a mensagem do commit"
    if (-not $mensagem) {
        $mensagem = "Atualização $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    }
}

# 4. Fazer commit
Write-Host "`n💾 Criando commit: $mensagem" -ForegroundColor Yellow
git commit -m $mensagem
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao criar commit!" -ForegroundColor Red
    exit 1
}

# 5. Push para GitHub
Write-Host "`n📤 Enviando para GitHub..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao enviar para GitHub!" -ForegroundColor Red
    exit 1
}

# 6. Deploy no Firebase
Write-Host "`n🔥 Publicando no Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao publicar no Firebase!" -ForegroundColor Red
    exit 1
}

# 7. Sucesso!
Write-Host "`n✅ ===== DEPLOY CONCLUÍDO COM SUCESSO! =====" -ForegroundColor Green
Write-Host "`n🌐 Acesse: https://kanban-laser-app-d7d3d.web.app" -ForegroundColor Cyan
Write-Host "💡 Dica: Pressione Ctrl+F5 no navegador para atualizar" -ForegroundColor Yellow
Write-Host ""
