# 🛒 E-Commerce Manager — Full-Stack DevOps Pipeline

Application e-commerce complète (frontend → backend → production) construite dans un but pédagogique et professionnel, avec pipeline DevOps intégrée.

## Stack
- **Frontend**: React (Vite) + TailwindCSS + Context API
- **Backend**: Node.js + Express + Prisma ORM
- **Database**: PostgreSQL
- **Auth**: JWT + bcrypt
- **Paiement**: Stripe (test mode)
- **DevOps**: Docker + Docker Compose + GitHub Actions (CI/CD)

## Structure
```
ecommerce-manager/
├── client/    # React frontend
├── server/    # Express backend (API REST)
├── docker-compose.yml
└── .github/workflows/ci-cd.yml
```

## Lancer le projet en local (avec Docker — recommandé)

```bash
git clone <votre-repo-url>
cd ecommerce-manager
cp server/.env.example server/.env
docker-compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- PostgreSQL: localhost:5432

## Lancer sans Docker

### Backend
```bash
cd server
npm install
cp .env.example .env   # configurez DATABASE_URL, JWT_SECRET, STRIPE_SECRET_KEY
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## Tests
```bash
cd server
npm test
```

## Déploiement production
- **Frontend** → Vercel / Netlify
- **Backend + DB** → Render / Railway (variables d'environnement à définir dans le dashboard)
- Le pipeline CI/CD (`.github/workflows/ci-cd.yml`) lance lint + tests à chaque push, et build les images Docker sur la branche `main`.

## Licence
MIT — projet open source, contributions bienvenues.
