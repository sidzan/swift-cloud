#  [Swift Cloud](https://swift-app.fly.dev/)


Welcome to the **Swifty Land**! This guide will help you set up, run, and test the project.

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### 1️⃣ Install Dependencies
Run the following command to install all necessary dependencies:
```bash
npm install
```

### 2️⃣ Start the Services
Spin up the required services using Docker:
```bash
docker compose up -d
```

### 3️⃣ Run the Development Server
Start the development server:
```bash
npm run dev
```

Open your browser and navigate to:  
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests

To ensure everything works as expected, run the test suite:
```bash
npm run test
```

---

## 🌐 Production URL

The production version of this project is available at:  
[https://swift-app.fly.dev/ui](https://swift-app.fly.dev/ui)

---

## 🌱 Looking to seed ?
Run the following command to seed the corns:
```bash
npm run seed
```

## 🛠️ Technologies Used

This project is built and hosted using the following technologies:

1. **Prisma**: For database ORM and schema management.  
   Website: [https://www.prisma.io/](https://www.prisma.io/)

2. **Neon Tech**: For hosting the PostgreSQL database.  
   Website: [https://neon.tech/](https://neon.tech/)

3. **Hono**: A lightweight and fast web framework for building the backend.  
   Website: [https://hono.dev/](https://hono.dev/)

4. **Fly.io**: For hosting the application, providing scalable deployment.  
   Website: [https://fly.io/](https://fly.io/)

5. **GitHub Actions**: For continuous integration and deployment (CI/CD) to Fly.io.  
   Website: [https://github.com/features/actions](https://github.com/features/actions)

## 💡 Notes

- Ensure Docker is installed and running before executing `docker compose up`.
- Modify the `docker-compose.yml` or `.env` files if required to suit your local environment.

## Future Enhancements
- Search with Elastic search (200 million records needs some muscles)
- API's for Artists & Albums

Happy coding! 🎉