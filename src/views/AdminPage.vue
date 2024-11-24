<template>
  <div class="admin-page">
    <h1>Admin Paneli</h1>
    <p>Admin paneline hoş geldiniz. Buradan sistem ayarlarını yönetebilirsiniz.</p>

    <div class="actions">
      <h3>İndirme İşlemleri</h3>

      <div class="date-inputs">
        <div class="input-group">
          <label for="startDate">Başlangıç Tarihi:</label>
          <input type="date" v-model="startDate" id="startDate" />
        </div>

        <div class="input-group">
          <label for="endDate">Bitiş Tarihi:</label>
          <input type="date" v-model="endDate" id="endDate" />
        </div>
      </div>

      <div class="button-group">
        <button @click="downloadFotosAsZip">Kullanıcı Resimlerini ZIP Olarak İndir</button>
        <button @click="downloadGizliMusterilerAsExcel">Kullanıcı Bilgilerini Excel Olarak İndir</button>
        <button @click="downloadGizliMusteriSozlesmeleriAsZip">Gizli Müşteri Sözleşmelerini ZIP Olarak İndir</button>
        <button @click="logout" class="logout-button">Çıkış Yap</button>
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  name: 'AdminPage',
  setup() {
    const startDate = ref('');
    const endDate = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    // Kullanıcının oturumunun doğrulanması
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/check-auth', {
          withCredentials: true, // Çerezleri dahil et
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status !== 200) {
          throw new Error('Yetkilendirme başarısız');
        }
      } catch (error) {
          router.push('/signin'); // Giriş sayfasına yönlendir
      }
    };

    // Sayfa yüklendiğinde oturumu kontrol et
    onMounted(() => {
      checkAuth();
    });

    // Tarih doğrulama
    const validateDates = () => {
      if (!startDate.value || !endDate.value) {
        errorMessage.value = 'Lütfen her iki tarih alanını doldurunuz.';
        return false;
      }
      errorMessage.value = '';
      return true;
    };

    // ZIP dosyası indirme
    const downloadFotosAsZip = async () => {
      if (!validateDates()) {
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/api/gizli-musteri/downloadFotosAsZipByDate', {
          startDate: startDate.value,
          endDate: endDate.value
        }, {
          withCredentials: true,
          responseType: 'blob' // Blob olarak yanıt alın
        });

        // Blob'dan URL oluştur ve indir
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'kullanici_resimleri.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        alert('ZIP dosyası başarıyla indirildi.');
      } catch (error) {
        console.error(error);
        errorMessage.value = 'ZIP indirme işlemi başarısız oldu.';
      }
    };

    // Excel dosyası indirme
    const downloadGizliMusterilerAsExcel = async () => {
      if (!validateDates()) {
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/api/excel/gizli-musteriler/export', {
          startDate: startDate.value,
          endDate: endDate.value
        }, {
          withCredentials: true,
          responseType: 'blob' // Blob olarak yanıt alın
        });

        // Blob'dan URL oluştur ve indir
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'kullanici_bilgileri.xlsx');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        alert('Excel dosyası başarıyla indirildi.');
      } catch (error) {
        console.error(error);
        errorMessage.value = 'Excel indirme işlemi başarısız oldu.';
      }
    };

    // Yeni İndirme Fonksiyonu Eklendi
    const downloadGizliMusteriSozlesmeleriAsZip = async () => {
      if (!validateDates()) {
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/api/gizliMusteriWord/downloadZip', {
          startDate: startDate.value,
          endDate: endDate.value
        }, {
          withCredentials: true,
          responseType: 'blob' // Blob olarak yanıt alın
        });

        // Blob'dan URL oluştur ve indir
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'gizli_musteri_sozlesmeleri.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        alert('Gizli Müşteri Sözleşmeleri ZIP dosyası başarıyla indirildi.');
      } catch (error) {
        console.error(error);
        errorMessage.value = 'Gizli Müşteri Sözleşmeleri ZIP indirme işlemi başarısız oldu.';
      }
    };

    // Çıkış Yapma
    const logout = async () => {
      try {
        await axios.post('http://localhost:8080/api/auth/logout', {}, {
          withCredentials: true
        });
        router.push('/signin'); // Giriş sayfasına yönlendir
      } catch (error) {
        console.error(error);
        alert('Çıkış işlemi sırasında bir hata oluştu.');
      }
    };

    return {
      startDate,
      endDate,
      errorMessage,
      downloadFotosAsZip,
      downloadGizliMusterilerAsExcel,
      downloadGizliMusteriSozlesmeleriAsZip, // Yeni fonksiyon ekleniyor
      logout
    };
  }
};
</script>
<style scoped>
.admin-page {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.actions {
  margin-top: 30px;
}

.date-inputs {
  display: inline-flex; /* Kutucukları inline-flexten yana hizala */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 0; /* Boşluk tamamen kaldırıldı */
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0; /* Varsayılan marjinleri sıfırla */
  padding: 0; /* Varsayılan paddingleri sıfırla */
}

input {
  padding: 8px; /* Padding'i daha da azalt */
  font-size: 1rem;
  width: 100%;
  max-width: 130px; /* Genişliği daha da küçült */
  box-sizing: border-box;
  margin: 0; /* Tüm varsayılan marjinleri kaldır */
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 250px;
}

button:hover {
  background-color: #45a049;
}

.logout-button {
  background-color: #f44336;
}

.logout-button:hover {
  background-color: #da190b;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}

/* Mobil Cihazlar (600px genişlik ve altı) */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }

  .date-inputs {
    flex-direction: column; /* Mobilde alt alta görünmeleri için */
    gap: 10px;
  }

  input {
    max-width: 100%;
  }

  .button-group {
    width: 100%;
  }

  button {
    max-width: 100%;
  }
}

/* Tablet Cihazlar (600px - 1024px genişlik) */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  h1 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .date-inputs {
    flex-direction: row;
    gap: 15px; /* Daha dar boşluk */
  }

  input {
    max-width: 200px;
  }

  .button-group {
    gap: 20px;
  }

  button {
    max-width: 250px;
  }
}

/* Masaüstü Cihazlar (1025px ve üstü) */
@media only screen and (min-width: 1025px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .date-inputs {
    gap: 5px; /* Masaüstünde de boşluğu minimuma indir */
  }

  input {
    max-width: 130px; /* Giriş kutularını daralt */
  }

  button {
    max-width: 250px;
  }
}
</style>
 