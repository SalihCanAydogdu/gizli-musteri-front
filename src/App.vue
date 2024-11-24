<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="logo-and-nav">
          <div class="logo">
            <img src="@/assets/x_audit_logo.png" alt="X Audit Logo" />
          </div>
          <nav class="nav">
            <div class="left-nav">
              <router-link to="/">Hakkımızda</router-link>
              <router-link to="/gizli-musteri-ol">Gizli Müşteri Ol</router-link>
            </div>
            <div class="iletisim-container">
              <router-link to="/iletisim" class="iletisim-link">Bizimle İletişime Geç</router-link>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>
          <strong>Adres Bilgisi:</strong> 	1355 Market Street, San Francisco, CA, 94103
        </p>
        <p>
          <strong>Telefon:</strong> (866) 924-2008
        </p>
        <p>X Audit 2024 © Bütün hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Genel düzenlemeler */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #f1f1f1;
}

/* Konteyner */
.container {
  max-width: 90vw;
  margin: 0 auto;
  padding: 0 5vw;
}

/* Header */
.header {
  background-color: #343a40;
  padding: 4vh 0;
  border-bottom: 1px solid #ddd;
  position: relative;
  text-align: center; 
}

.logo-and-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  width: 22%; /* Masaüstü için mevcut logo boyutu */
  margin-right: 2vw;
  display: block;
}

/* Navigasyon Menüsü */
.nav {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}

.left-nav {
  display: flex;
  gap: 2vw;
  margin-left: -25vw;
}

.nav a {
  text-decoration: none;
  color: white;
  font-size: 1.8vw;
  transition: color 0.3s ease;
  text-align: center;
}

.nav a:hover {
  color: #007bff;
}

.iletisim-container {
  margin-left: auto; /* "Bizimle İletişime Geç" routerı sağda sabit kalacak */
}

.iletisim-link {
  text-decoration: none;
  color: white;
}

.iletisim-link:hover {
  color: #007bff;
}

/* Ana İçerik */
.main-content {
  flex: 1;
  background-color: white;
  padding: 5vh 0;
  min-height: calc(100vh - 30vh);
}

/* Footer */
.footer {
  background-color: #343a40;
  color: white;
  padding: 3vh 0;
  text-align: center;
}

.footer p {
  margin: 0.5vh 0;
}

/* Responsive Tasarım (Tablet ve Mobil) */
@media (max-width: 1024px) {
  /* Tablet: Logo ortada ve üstte */
  .header {
    padding: 6vh 0;
  }

  .logo-and-nav {
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    width: 40%; /* Tablet için logo boyutu büyütüldü */
    margin-bottom: 3vh; /* Logo ile menü arasındaki boşluk */
  }

  .nav {
    flex-direction: column; /* Menü öğeleri alt alta sıralanacak */
    gap: 2vh;
    align-items: center;
  }

  .nav a {
    font-size: 4vw; /* Menü öğeleri büyütüldü */
  }

  .left-nav {
    margin-left: 0; /* Menü öğeleri tam ortalanacak şekilde ayarlandı */
  }

  .iletisim-container {
    margin-top: 2vh;
  }
}

@media (max-width: 768px) {
  /* Telefon: Logo üstte ortalanacak ve menü alt alta */
  .header {
    padding: 8vh 0;
  }

  .logo-and-nav {
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    width: 50%; /* Telefon için logo daha da büyütüldü */
    margin-bottom: 4vh; /* Logo ile menü arasındaki boşluk */
  }

  .nav {
    flex-direction: column; /* Menü öğeleri alt alta sıralanacak */
    gap: 3vh;
    align-items: center;
  }

  .nav a {
    font-size: 5vw; /* Menü öğeleri büyük yapıldı */
  }

  .iletisim-container {
    margin-top: 3vh;
  }
}

@media (max-width: 480px) {
  /* En küçük ekranlar için düzenlemeler */
  .logo img {
    width: 60%; /* Logo çok küçük cihazlarda daha büyük */
  }

  .nav a {
    font-size: 6vw; /* Menü öğeleri çok daha büyük */
    padding: 2vh 0;
  }

  .footer {
    font-size: 3vw;
  }

  .footer p {
    font-size: 4vw;
    margin: 1vh 0;
  }

  .iletisim-container {
    margin-top: 4vh;
  }
}
</style>

