# Sign Steelers

Site oficial da banda Sign Steelers. Projeto em Next.js com App Router,
Tailwind CSS e build Docker standalone.

## Desenvolvimento

```bash
cd steelers
npm install
npm run dev
```

Ou com Docker:

```bash
docker compose --profile dev up steelers-dev
```

O site estará em `http://localhost:3000`.

## Produção

```bash
docker compose up --build steelers
```

O site estará em `http://localhost:8080`.

Defina `NEXT_PUBLIC_SITE_URL` com a URL pública antes do build para gerar os
metadados, `robots.txt` e sitemap corretos.
