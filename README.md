# Fideltronik Production API

A backend REST API for managing production orders, created based on recruitment requirements and designed with future scalability in mind.

The project demonstrates clean architecture, proper validation, and clear API documentation using industry-standard tools.

---

## 🚀 Tech Stack

- **Node.js**
- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL / SQLite**
- **Swagger (OpenAPI 3.0)**
- **class-validator**

---

## 📦 Features

- Create production orders
- Retrieve all production orders
- Retrieve a single order by ID
- Update order status
- Request payload validation using DTOs
- Interactive API documentation with Swagger

---

## 🔗 API Endpoints

### Orders

| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| GET    | `/orders`             | Get all production orders      |
| GET    | `/orders/{id}`        | Get production order by ID     |
| POST   | `/orders`             | Create a new production order  |
| PATCH  | `/orders/{id}/status` | Update production order status |

---

## 📘 Swagger Documentation

After starting the application, Swagger UI is available at:

http://localhost:3000/api

Swagger provides:

- Endpoint descriptions
- DTO schemas
- Example payloads
- Built-in API testing interface

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
2. Run database migrations
npx prisma migrate dev
3. Start the application
npm run start:dev

🧪 Example Requests
Create production order
{
  "orderNumber": "ORD-001",
  "productName": "Control Module X",
  "quantity": 100
}
Update order status
{
  "status": "IN_PROGRESS"
}
🧠 Architecture Overview

Controller – HTTP layer and routing

Service – business logic

DTO – validation and API contracts

Prisma – database access layer

The project is prepared for further extension, such as:

order status history

authentication & authorization

pagination and filtering

additional production modules

👤 Author

This project was created as a recruitment task and serves as a solid foundation for further development.
```
