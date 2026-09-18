# Log Analytics App

Este projeto é uma aplicação Next.js com banco PostgreSQL e Prisma.

## Execução local

### 1) Iniciar o banco de dados

Na pasta raiz do projeto:

```bash
cd c:\Users\<seu-caminho>\ms-logAnalytics
docker compose -f docker-compose.yaml up -d postgres
```

Isso inicia o PostgreSQL na porta `5432` com as seguintes credenciais:

- banco: `logs`
- usuário: `admin`
- senha: `admin`

### 2) Instalar as dependências

Dentro da pasta do app:

```bash
cd c:\Users\<seu-caminho>\ms-logAnalytics\app
npm install
```

### 3) Configurar as variáveis de ambiente

Crie um arquivo `.env` na pasta `app` com o conteúdo:

```env
DATABASE_URL=postgresql://admin:admin@localhost:5432/logs?schema=public
```

### 4) Gerar o client do Prisma

```bash
npx prisma generate
```

### 5) Executar a aplicação

```bash
npm run dev
```

Em seguida, abra:

- http://localhost:3000
- http://localhost:3000/api/test

### 6) Validar a API

```bash
curl http://localhost:3000/api/test
```

Resposta esperada:

```json
{"totalUploads":0}
```

## Observações

- A rota da API está em `app/app/api/test/route.ts`.
- O client Prisma está configurado em `app/src/lib/prisma.ts`.
- O schema do banco está em `app/prisma/schema.prisma`.

## Comandos úteis

```bash
npm run lint
npm run build
npx prisma generate
```

## Solução de problemas

Se a rota não responder, verifique:

1. Se o Docker está em execução e o PostgreSQL subiu corretamente.
2. Se o arquivo `.env` contém a `DATABASE_URL` correta.
3. Se os comandos estão sendo executados dentro da pasta `app`.
4. Se o comando `npx prisma generate` foi executado com sucesso.
