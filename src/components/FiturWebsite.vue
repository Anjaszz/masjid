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
    <div class="kalkulator-zakat">
      <label for="jenisZakat">Pilih Jenis Zakat:</label>
      <select v-model="selectedZakat" id="jenisZakat" class="select-zakat">
        <option value="penghasilan">Zakat Penghasilan</option>
        <option value="perusahaan">Zakat Perusahaan</option>
        <option value="perdagangan">Zakat Perdagangan</option>
        <option value="emas">Zakat Emas</option>
      </select>

      <div v-if="selectedZakat === 'penghasilan'" class="input-section">
        <h4 class="form-title">Form Zakat Penghasilan</h4>
        <label for="gaji">Gaji Perbulan (Rp):</label>
        <input type="number" v-model="gaji" id="gaji" placeholder="Masukkan gaji perbulan" class="input-field" />

        <label for="penghasilanLain">Penghasilan Lain-lain (Rp):</label>
        <input type="number" v-model="penghasilanLain" id="penghasilanLain" placeholder="Masukkan penghasilan lain-lain" class="input-field" />

        <label for="jumlahPenghasilan">Jumlah Penghasilan (Rp):</label>
        <input type="text" :value="jumlahPenghasilan" id="jumlahPenghasilan" readonly class="input-field" />

        <div class="button-group">
          <button @click="hitungZakat" class="btn hitung">Hitung</button>
          <button @click="resetZakat" class="btn reset">Reset</button>
        </div>
      </div>

      <div v-if="selectedZakat === 'emas'" class="input-section">
        <h4 class="form-title">Form Zakat Emas</h4>
        <label for="emas">Jumlah Emas (gram):</label>
        <input type="number" v-model="jumlahEmas" id="emas" placeholder="Masukkan jumlah emas" class="input-field" />

        <div class="button-group">
          <button @click="hitungZakat" class="btn hitung">Hitung</button>
          <button @click="resetZakat" class="btn reset">Reset</button>
        </div>
      </div>

      <div v-if="selectedZakat === 'perusahaan'" class="input-section">
        <h4 class="form-title">Form Zakat Perusahaan</h4>
        <label for="pendapatan">Pendapatan Sebelum Pajak (Rp):</label>
        <input type="number" v-model="pendapatan" id="pendapatan" placeholder="Masukkan pendapatan sebelum pajak" class="input-field" />

        <div class="button-group">
          <button @click="hitungZakat" class="btn hitung">Hitung</button>
          <button @click="resetZakat" class="btn reset">Reset</button>
        </div>
      </div>

      <div v-if="hasilZakat !== null" class="hasil">
        <h4>Hasil Zakat:</h4>
        <p>{{ hasilZakat | currencyFormat }}</p>
      </div>
    </div>
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
      selectedZakat: 'penghasilan',
      gaji: 0,
      penghasilanLain: 0,
      jumlahEmas: 0,
      pendapatan: 0,
      hasilZakat: null,

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
  computed: {
    jumlahPenghasilan() {
      return this.gaji + this.penghasilanLain;
    },
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
    hitungZakat() {
      // Logika untuk menghitung zakat sesuai dengan jenis zakat
      if (this.selectedZakat === 'penghasilan') {
        const totalPenghasilan = this.jumlahPenghasilan;
        this.hasilZakat = totalPenghasilan * 0.025; // Contoh: 2.5% dari penghasilan
      } else if (this.selectedZakat === 'emas') {
        // Misalkan tarif zakat emas adalah 2.5% dari nilai emas
        const nilaiEmas = this.jumlahEmas * 100000; // Ganti 100000 dengan harga emas per gram
        this.hasilZakat = nilaiEmas * 0.025;
      } else if (this.selectedZakat === 'perusahaan') {
        const totalPendapatan = this.pendapatan;
        this.hasilZakat = totalPendapatan * 0.025; // Contoh: 2.5% dari pendapatan
      }
    },
    resetZakat() {
      this.gaji = 0;
      this.penghasilanLain = 0;
      this.jumlahEmas = 0;
      this.pendapatan = 0;
      this.hasilZakat = null;
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
  gap: 20px; /* Jarak antar button */
}

.fitur-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.fitur-button.active {
  background-color: #0056b3; /* Warna untuk fitur aktif */
}

.fitur-detail {
  margin-top: 20px;
}

.keuangan-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.keuangan-table th, .keuangan-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.kalkulator-zakat {
  text-align: center;
  margin: 20px 0;
}

.select-zakat {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.input-section {
  margin-top: 20px;
}

.form-title {
  margin: 20px 0;
  font-size: 1.5em;
}

.input-field {
  width: 60%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

.button-group {
  margin-top: 20px;
}



.btn.hitung {
  background-color: #4ec78d;
  color: white;
}

.btn.reset {
  background-color: #f44336;
  color: white;
}

.btn.hitung:hover {
  background-color: #45b76b;
}

.btn.reset:hover {
  background-color: #e53935;
}

.hasil {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
