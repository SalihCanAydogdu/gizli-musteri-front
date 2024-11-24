<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-sm border-0">
          <div class="card-body p-5">
            <h1 class="card-title text-center mb-4">Hakkımızda</h1>
            <p class="card-text lead text-justify">
              DENETİM TURKEY, Türkiye'deki şirketlerin kurumsallaşma ve işletme sorunlarını çözmelerine katkı sağlamak amacıyla
              modern işletmecilik bilgisini yaymayı hedefleyen, geniş kapsamlı bir danışmanlık ve denetim firmasıdır.
            </p>

            <div class="services text-center my-4">
              <h2 class="h4 mb-4">Hizmetlerimiz</h2>
              <ul class="list-group">
                <li class="list-group-item service-item">Uluslararası Bağımsız Denetim</li>
                <li class="list-group-item service-item">Mali Müşavirlik</li>
                <li class="list-group-item service-item">Mali Danışmanlık</li>
                <li class="list-group-item service-item">Tasdik Hizmetleri</li>
                <li class="list-group-item service-item">Vergi İncelemesi Danışmanlığı</li>
                <li class="list-group-item service-item">Süreç Geliştirme ve İç Kontrol Danışmanlığı</li>
                <li class="list-group-item service-item">Vergi Yargısı</li>
                <li class="list-group-item service-item">Riskin Erken Saptanması</li>
                <li class="list-group-item service-item">Şirket Değerlemesi</li>
                <li class="list-group-item service-item">İşletme Yönetimi İstatistiği</li>
                <li class="list-group-item service-item">Kurumsal Finansman</li>
                <li class="list-group-item service-item">İç Denetim</li>
                <li class="list-group-item service-item">Hile Denetimi</li>
                <li class="list-group-item service-item">Yönetim Danışmanlığı ve Risk Yönetimi</li>
                <li class="list-group-item service-item">Eğitim</li>
                <li class="list-group-item service-item">Bilgi Teknolojileri Danışmanlığı</li>
              </ul>
            </div>

            <p class="membership text-center text-danger mt-4">
              Şirketimiz uluslararası standartlara uygun hizmetler sunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Genel Stil */
.about-container {
  width: 90%;
  margin: 0 auto;
  padding: 5% 0;
  font-family: 'Arial', sans-serif;
}

.content {
  background-color: #f9f9f9;
  padding: 5%;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 2%;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 3%;
  text-align: justify;
}

.services {
  margin-top: 4%;
  text-align: center;
}

.services h2 {
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 2%;
}

.services ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  text-align: left;
}

.services li {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.membership {
  margin-top: 5%;
  font-size: 1rem;
  text-align: center;
  color: red;
}

.card {
  border-radius: 12px;
  background-color: #f9f9f9;
}

.card-title {
  font-size: 2.5rem;
  color: #333;
}

.card-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
}

.membership {
  font-size: 1.1rem;
  font-weight: bold;
}

/* Hizmet listesi arka plan renkleri */
.service-item:nth-child(odd) {
  background-color: rgb(241, 237, 241);
}

.service-item:nth-child(even) {
  background-color: rgb(250, 250, 251);
}

/* Responsive Tasarım */
@media screen and (max-width: 768px) {
  .content {
    padding: 8%;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.1rem;
  }

  .services h2 {
    font-size: 1.5rem;
  }

  .services li {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .content {
    padding: 10%;
  }

  .title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 1rem;
  }

  .services h2 {
    font-size: 1.3rem;
  }

  .services li {
    font-size: 0.9rem;
  }
}
</style>
