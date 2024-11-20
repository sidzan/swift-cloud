export const staticHTML = `  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Page</title>
<style>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

header {
  position: absolute;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 1rem;
  cursor: pointer;
}

h1 {
  font-size: 2.5rem;
  margin: 10px 0;
  color: #000;
  font-weight: bold;
}

p {
  font-size: 1.2rem;
  color: #999;
  font-weight: 500;
}

button {
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #444;
}

.footer {
  margin-top: 20px;
  text-align: center;
}

.footer img {
  width: 200px;
  border-radius: 10px;
}

.footer-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
}
</style>
</head>
<body>
<header>
  <div class="brand">Swift Land</div>
  </header>

  <main>
  <h1>Welcome to Swift Club</h1>
<p></p>
<button onclick="redirectToPage()">Let's see some docs</button>
</main>

<div class="footer">
<img src="https://iili.io/256yCOu.webp" alt="Placeholder Image">
<div class="footer-caption"><i>Prompt:</i> <strong> Hey, ChatGPT.
Based on what you know about me. Draw a picture of what you think my current life looks like.</strong></div>
</div>

<script>
function redirectToPage() {
  window.location.href = "/ui";
}
</script>
</body>
</html>
  `;
