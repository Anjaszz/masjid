<template>
    <section class="fitur-website-section">
      <div class="container text-center">
        <h2>Fitur Website</h2>
        <div class="fitur-buttons">
          <button
            class="fitur-button"
            :class="{ active: selectedFeature === 'laporanKeuangan' }"
            @click="toggleDetail('laporanKeuangan')"
          >
            Laporan Keuangan
          </button>
          <button
            class="fitur-button"
            :class="{ active: selectedFeature === 'jadwalKajian' }"
            @click="toggleDetail('jadwalKajian')"
          >
            Jadwal Kajian
          </button>
          <button
            class="fitur-button"
            :class="{ active: selectedFeature === 'kalkulatorZakat' }"
            @click="toggleDetail('kalkulatorZakat')"
          >
            Kalkulator Zakat
          </button>
          <button
            class="fitur-button"
            :class="{ active: selectedFeature === 'informasiQurban' }"
            @click="toggleDetail('informasiQurban')"
          >
            Informasi Qurban
          </button>
        </div>
  
        <div v-if="selectedFeature === 'laporanKeuangan'" class="fitur-detail">
          <h3>Laporan Keuangan</h3>
          <p>Berikut adalah rincian laporan keuangan masjid:</p>
          
          <table class="keuangan-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Deskripsi</th>
                <th>Pemasukan</th>
                <th>Pengeluaran</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01-01-2024</td>
                <td>Donasi dari Jemaah</td>
                <td>Rp 5.000.000</td>
                <td>-</td>
                <td>Rp 5.000.000</td>
              </tr>
              <tr>
                <td>05-01-2024</td>
                <td>Belanja Kebersihan</td>
                <td>-</td>
                <td>Rp 1.500.000</td>
                <td>Rp 3.500.000</td>
              </tr>
              <tr>
                <td>10-01-2024</td>
                <td>Pengadaan Al-Qur'an</td>
                <td>-</td>
                <td>Rp 1.000.000</td>
                <td>Rp 2.500.000</td>
              </tr>
              <tr>
                <td>15-01-2024</td>
                <td>Donasi dari Perusahaan</td>
                <td>Rp 10.000.000</td>
                <td>-</td>
                <td>Rp 12.500.000</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div v-if="selectedFeature === 'jadwalKajian'" class="fitur-detail">
          <h3>Jadwal Kajian</h3>
          <div id="kajianCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div 
                class="carousel-item" 
                v-for="(kajian, index) in jadwalKajian" 
                :key="index" 
                :class="{ active: index === 0 }"
              >
                <div class="d-flex justify-content-center flex-column align-items-center">
                  <h4>{{ kajian.judul }}</h4>
                  <p>Pembicara: {{ kajian.pembicara }}</p>
                  <p>Tanggal: {{ kajian.tanggal }}</p>
                  <p>Waktu: {{ kajian.waktu }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#kajianCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#kajianCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  
        <div v-if="selectedFeature === 'kalkulatorZakat'" class="fitur-detail">
          <h3>Kalkulator Zakat</h3>
          <p>Detail tentang kalkulator zakat akan ditampilkan di sini.</p>
        </div>
        <div v-if="selectedFeature === 'informasiQurban'" class="fitur-detail">
          <h3>Informasi Qurban</h3>
          <p>Detail tentang informasi qurban akan ditampilkan di sini.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FiturWebsite',
    data() {
      return {
        selectedFeature: 'laporanKeuangan', // Set default feature to display
        // Data Jadwal Kajian
        jadwalKajian: [
          {
            judul: 'Kajian Fiqh',
            pembicara: 'Ustadz Ahmad',
            tanggal: '20-09-2024',
            waktu: '19:00',
          },
          {
            judul: 'Kajian Akidah',
            pembicara: 'Ustadz Budi',
            tanggal: '27-09-2024',
            waktu: '19:00',
          },
          {
            judul: 'Kajian Tafsir',
            pembicara: 'Ustadz Citra',
            tanggal: '04-10-2024',
            waktu: '19:00',
          },
          {
            judul: 'Kajian Kebangkitan Islam',
            pembicara: 'Ustadz Dika',
            tanggal: '11-10-2024',
            waktu: '19:00',
          },
        ],
      };
    },
    methods: {
      toggleDetail(feature) {
        // Jika fitur yang sama diklik, toggle menampilkan atau menyembunyikannya
        if (this.selectedFeature === feature) {
          this.selectedFeature = null; // Sembunyikan jika fitur yang sama diklik
        } else {
          this.selectedFeature = feature; // Tampilkan fitur yang dipilih
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fitur-website-section {
    margin: 50px 0;
  }
  
  .fitur-buttons {
    display: flex;
    justify-content: center;
    gap: 20px; /* Jarak antar tombol */
  }
  
  .fitur-button {
    background-color: #93f9b9; /* Ubah sesuai kebutuhan */
    color: #333;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease; /* Tambah efek transform */
  }
  
  .fitur-button:hover {
    background-color: #78e6a1; /* Ubah sesuai kebutuhan untuk efek hover */
  }
  
  /* Style untuk tombol yang aktif */
  .fitur-button.active {
    background-color: #4ec78d; /* Ubah warna untuk menandakan aktif */
    color: #fff; /* Ubah warna teks saat aktif */
    transform: scale(1.05); /* Tambah efek zoom saat aktif */
  }
  
  .fitur-detail {
    margin-top: 20px;
    background: #fefeff; /* Ubah sesuai kebutuhan */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Style untuk tabel keuangan */
  .keuangan-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .keuangan-table th,
  .keuangan-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .keuangan-table th {
    background-color: #93f9b9;
    color: #333;
  }
  
  .keuangan-table tr:nth-child(even) {
    background-color: #f2f2f2; /* Alternating row color */
  }
  
  .keuangan-table tr:hover {
    background-color: #e2f7e2; /* Hover effect on rows */
  }
  
 /* Style untuk carousel jadwal kajian */
.carousel-item {
  object-fit: contain;
  height: auto; /* Ubah agar konten tidak terpotong */
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgb(5, 36, 9); /* Ubah warna latar belakang sesuai kebutuhan */
  border-radius: 50%; /* Membuat ikon menjadi bulat */
  width: 50px; /* Sesuaikan ukuran ikon */
  height: 50px; /* Sesuaikan ukuran ikon */
}



.carousel-inner .kajian-card {
  background: #ffffff; /* Latar belakang kartu */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Bayangan */
  padding: 20px; /* Jarak dalam kartu */
  max-width: 400px; /* Lebar maksimum kartu */
  width: 100%; /* Lebar penuh responsif */
  margin: 0 auto; /* Centering card */
  text-align: center; /* Centering text */
}

.carousel-inner h4 {
  margin-bottom: 10px; /* Jarak antara judul dan detail */
  font-size: 1.5em; /* Ukuran font judul */
  color: #333; /* Warna teks judul */
}

.carousel-inner p {
  margin: 5px 0; /* Jarak antar detail */
  font-size: 1em; /* Ukuran font untuk detail */
  color: #666; /* Warna teks detail */
}

@media (max-width: 768px) {
  .carousel-item {
    height: auto; /* Pastikan konten bisa menyesuaikan */
  }
}
</style>