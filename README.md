# API Shop

This is a simple API for [a house collection application](https://github.com/jamj2000/rn-shop).

[House API](https://nxapi-shop.vercel.app)

## Models

- User
- House
- HouseImage

## Data

- users.json
- houses.json
- house_images.json


## Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET  /api/auth/check-status`

### Houses

- `POST   /api/houses`
- `GET    /api/houses`
- `GET    /api/houses/all/:term`
- `GET    /api/houses/:idOrSlug`
- `PATCH  /api/houses/:id`
- `DELETE /api/houses/:id`

### Files

- `POST   /api/files/house`
- `GET    /api/files/house`
- `GET    /api/files/house/:imageName`
- `PUT    /api/files/house/:imageName`
- `DELETE /api/files/house/:imageName`

## Tech Stack

- Next.js
- Prisma
- Postgres

## Setup

1. Clone the repository

```bash
git clone https://github.com/divinegarden/dwes_t8-houseAPI
```

2. Install dependencies

```bash
cd  dwes_t8-houseAPI 
npm install
```

3. Configure DATABASE_URL in .env

```bash
cp .env.example .env
```
Edit .env file and add your DATABASE_URL

4. Set up the database

```bash
npx prisma db push
```

5. Run the seed

```bash
npm run seed
```

6. Start the development server

```bash
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Inspiration

This project was inspired by [nest-teslo-shop](https://github.com/Klerith/nest-teslo-shop) developed by [Fernando Herrera](https://github.com/Klerith) using the NestJS framework.

My project uses NextJS instead of NestJS.😉


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
