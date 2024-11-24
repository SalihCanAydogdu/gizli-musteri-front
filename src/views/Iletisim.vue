<template>
    <!--Guncellendi-->
    <div class="contact-container">
      <h1>İletişim</h1>
      <div class="info-section">
        <p><strong>Adres:</strong>1355 Market Street, San Francisco, CA, 94103</p>
        <p><strong>E-mail:</strong> <a href="mailto:info@xaudit.com">info@xaudit.com</a></p>
        <p><strong>Telefon:</strong> <a href="tel:+902124658833">(866) 924-2008</a></p>
        <!-- Yol Tarifi Linki -->
        <p><strong>Yol Tarifi:</strong> <a href="https://www.google.com/maps/dir/?api=1&destination=Market+Square%2C+1355+Market+St%2C+San+Francisco%2C+CA+94103%2C+USA
" target="_blank">Yol Tarifi Al</a></p>
      </div>
  
      <div id="map" class="map-section"></div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet'; // Leaflet'i import ediyoruz
  import 'leaflet/dist/leaflet.css'; // Leaflet CSS dosyasını ekliyoruz
  
  export default {
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        // Harita ayarlarını yapıyoruz
        const map = L.map('map', {
          center: [37.7756, -122.4194], // Market Square koordinatları
          zoom: 15,
          attributionControl: false, // Attribution'ı devre dışı bırakıyoruz
        });
  
        // OpenStreetMap katmanını ekliyoruz
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '' // Attribution tamamen kaldırıldı
        }).addTo(map);
  
        // Özel bir işaretleyici (marker) ikonu belirliyoruz
        const customIcon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // İşaretleyici simgesi URL'si
          iconSize: [28, 65], // İşaretleyici boyutu
          iconAnchor: [14, 65], // İşaretleyicinin haritada yerleştirileceği yer
          popupAnchor: [0, -65] // Popup'ın işaretleyiciye göre konumu
        });
  
        // Market Square'in bulunduğu konuma marker ekliyoruz
        L.marker([37.7756, -122.4194], { icon: customIcon }).addTo(map)
          .bindPopup('<b>Market Square</b><br>1355 Market Street, San Francisco, CA, 94103')
          .openPopup();
      }
    },
  };
  </script>
  
  
  <style scoped>
  .contact-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5vw; /* % yerine daha esnek ve ölçeklenebilir olan vw kullanıldı */
    margin-bottom: 2%;
  }
  
  .info-section {
    margin-bottom: 3%;
  }
  
  .info-section p {
    font-size: 1.5vw;
    margin: 1.5% 0;
  }
  
  #map {
    width: 100%;
    height: 30vw; /* px yerine vw kullanıldı */
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    /* Tablet cihazlar için */
    h1 {
      font-size: 3vw; /* Tablet için biraz daha küçük font */
    }
  
    .info-section p {
      font-size: 2vw; /* Tablet cihazlar için daha küçük font boyutu */
    }
  
    #map {
      height: 40vw; /* Tablet cihazlar için harita boyutu optimize edildi */
    }
  }
  
  @media (max-width: 768px) {
    /* Mobil cihazlar için */
    h1 {
      font-size: 4vw;
    }
  
    .info-section p {
      font-size: 2.5vw; /* Mobil için daha küçük font boyutu */
    }
  
    #map {
      height: 50vw; /* Mobil cihazlar için harita boyutu optimize edildi */
    }
  }
  
  @media (max-width: 480px) {
    /* Daha küçük mobil cihazlar için */
    h1 {
      font-size: 5vw;
    }
  
    .info-section p {
      font-size: 3vw; /* Daha küçük ekranlar için */
    }
  
    #map {
      height: 60vw; /* Küçük ekranlar için harita boyutu optimize edildi */
    }
  }
  </style>
  