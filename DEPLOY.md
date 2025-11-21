# 🚀 Guia de Deploy - PowerBrand na Cloudflare Pages

## 📋 Pré-requisitos

1. ✅ Conta Cloudflare (gratuita)
2. ✅ Cloudflare API Token configurado
3. ✅ Projeto buildado (`npm run build`)
4. ✅ Git repository (opcional, mas recomendado)

---

## 🔑 PASSO 1: Configurar Cloudflare API Token

### Opção A: Via Interface Gráfica
1. Acesse o **Deploy tab** na interface
2. Configure seu Cloudflare API Token
3. O sistema irá validar automaticamente

### Opção B: Via Terminal (Manual)
```bash
# Execute este comando para configurar
setup_cloudflare_api_key
```

---

## 🏗️ PASSO 2: Build do Projeto

```bash
# Navegar para o projeto
cd /home/user/webapp

# Instalar dependências (se necessário)
npm install

# Build para produção
npm run build

# Verificar se dist/ foi criado
ls -la dist/
```

**Saída esperada:**
- `dist/_worker.js` (~64 KB)
- `dist/_routes.json`
- Todos os arquivos estáticos (logos, imagens, etc.)

---

## 🌐 PASSO 3: Deploy para Cloudflare Pages

### Primeira vez - Criar projeto

```bash
# Criar projeto na Cloudflare
npx wrangler pages project create powerbrand \
  --production-branch main \
  --compatibility-date 2025-11-19

# Output esperado:
# ✨ Successfully created the 'powerbrand' project.
```

### Deploy inicial

```bash
# Deploy do diretório dist
npx wrangler pages deploy dist --project-name powerbrand

# Output esperado:
# ✨ Success! Uploaded 40 files
# ✨ Deployment complete!
# 🌍 https://powerbrand.pages.dev
# 🌍 https://random-id.powerbrand.pages.dev
```

---

## 🔧 PASSO 4: Configurações Pós-Deploy

### 4.1 Verificar Deploy
```bash
# Testar URL de produção
curl -I https://powerbrand.pages.dev

# Deve retornar: HTTP/2 200
```

### 4.2 Configurar Domínio Customizado (Opcional)

```bash
# Adicionar domínio próprio
npx wrangler pages domain add seudominipo.com.br --project-name powerbrand

# Configurar DNS no Cloudflare:
# - Tipo: CNAME
# - Nome: @ (ou www)
# - Conteúdo: powerbrand.pages.dev
# - Proxy: Ativado (nuvem laranja)
```

### 4.3 Configurar Variáveis de Ambiente

```bash
# Adicionar secrets (se necessário)
npx wrangler pages secret put API_KEY --project-name powerbrand

# Listar secrets
npx wrangler pages secret list --project-name powerbrand
```

---

## 🚀 PASSO 5: Deploys Futuros

### Deploy rápido (após mudanças)
```bash
# Build + Deploy em um comando
npm run deploy

# Ou manualmente:
npm run build
npx wrangler pages deploy dist --project-name powerbrand
```

### Rollback (se necessário)
```bash
# Listar deployments
npx wrangler pages deployment list --project-name powerbrand

# Rollback para deployment específico
npx wrangler pages deployment rollback <deployment-id> --project-name powerbrand
```

---

## 🔐 Segurança e Performance

### Headers de Segurança
✅ Configurados automaticamente via `public/_headers`:
- X-Frame-Options: DENY
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Cache-Control otimizado

### Performance
✅ Configurações aplicadas:
- Cache de 1 ano para imagens
- Cache de 1 dia para JS/CSS
- Revalidação para HTML
- Edge caching global

---

## 📊 Tecnologias Cloudflare Disponíveis

### ✅ Atualmente Configurado:
- **Cloudflare Pages** - Hospedagem edge global
- **Workers** - Backend serverless
- **CDN Global** - 300+ datacenters
- **SSL/TLS Automático** - HTTPS grátis
- **DDoS Protection** - Proteção automática
- **Web Analytics** - Métricas (via dashboard)

### 🔧 Pronto para Adicionar (quando necessário):

#### 1. **D1 Database** - Banco de dados SQLite global
```bash
# Criar database
npx wrangler d1 create powerbrand-leads

# Adicionar ao wrangler.jsonc:
# "d1_databases": [
#   {
#     "binding": "DB",
#     "database_name": "powerbrand-leads",
#     "database_id": "seu-id-aqui"
#   }
# ]
```

#### 2. **KV Storage** - Cache de alta performance
```bash
# Criar namespace
npx wrangler kv:namespace create CACHE
npx wrangler kv:namespace create CACHE --preview

# Adicionar ao wrangler.jsonc
```

#### 3. **R2 Storage** - Armazenamento de arquivos
```bash
# Criar bucket
npx wrangler r2 bucket create powerbrand-assets

# Adicionar ao wrangler.jsonc
```

#### 4. **Cloudflare AI** - Inteligência artificial
```bash
# Já disponível - só descomentar no wrangler.jsonc:
# "ai": {
#   "binding": "AI"
# }
```

#### 5. **Analytics Engine** - Métricas customizadas
```bash
# Descomentar no wrangler.jsonc:
# "analytics_engine_datasets": [
#   {
#     "binding": "ANALYTICS"
#   }
# ]
```

---

## 🎯 URLs do Projeto

### Desenvolvimento
- Local: http://localhost:3000
- Sandbox: https://3000-inawqi07u7hh33yzqfy06-583b4d74.sandbox.novita.ai

### Produção (após deploy)
- Cloudflare: https://powerbrand.pages.dev
- Branch: https://main.powerbrand.pages.dev
- Custom: (configurar depois)

---

## 📞 Contatos Configurados

- **WhatsApp**: +55 11 91853-4654
- **Botão Flutuante**: Configurado
- **CTAs**: 3 pontos de conversão

---

## 🐛 Troubleshooting

### Erro: "Authentication failed"
```bash
# Reconfigurar API token
setup_cloudflare_api_key

# Verificar
npx wrangler whoami
```

### Erro: "Project already exists"
```bash
# Listar projetos
npx wrangler pages project list

# Usar nome diferente ou fazer deploy direto
npx wrangler pages deploy dist --project-name powerbrand
```

### Erro: Build falhou
```bash
# Limpar e rebuildar
rm -rf dist node_modules
npm install
npm run build
```

### Imagens não carregam
```bash
# Verificar _routes.json
cat dist/_routes.json

# Rebuildar (fix-routes.sh roda automaticamente)
npm run build
```

---

## 📚 Recursos Úteis

- **Docs Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/
- **Hono Framework**: https://hono.dev/
- **Cloudflare Dashboard**: https://dash.cloudflare.com/

---

## ✅ Checklist Pré-Deploy

- [ ] Build executado (`npm run build`)
- [ ] `dist/` contém `_worker.js` e assets
- [ ] Cloudflare API Token configurado
- [ ] Número WhatsApp correto (+55 11 91853-4654)
- [ ] Logos reais (6) carregando
- [ ] Depoimentos autênticos (3)
- [ ] Mobile otimizado
- [ ] Git commit atualizado

---

## 🎉 Após Deploy Bem-Sucedido

1. ✅ Testar URL de produção
2. ✅ Verificar WhatsApp buttons
3. ✅ Testar responsividade (mobile/desktop)
4. ✅ Verificar imagens carregando
5. ✅ Configurar domínio customizado (se houver)
6. ✅ Ativar Web Analytics no Cloudflare Dashboard
7. ✅ Compartilhar com o mundo! 🚀

---

**Última atualização:** 2025-11-19  
**Versão:** 1.0.0  
**Build atual:** 64.56 kB
