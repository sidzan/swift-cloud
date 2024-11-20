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

## 💡 Notes

- Ensure Docker is installed and running before executing `docker compose up`.
- Modify the `docker-compose.yml` or `.env` files if required to suit your local environment.

## Future Enhancements
- Search with Elastic search (200 million records needs some muscles)
- API's for Artists & Albums

Happy coding! 🎉