<template>
    <section class="jadwal-solat-section">
      <div class="container text-center">
        <h2>Jadwal Solat</h2>
        <div class="jadwal-solat d-flex justify-content-center">
          <div class="jadwal-item">
            <h4>Subuh</h4>
            <p>04:30 AM</p>
          </div>
          <div class="jadwal-item">
            <h4>Dzuhur</h4>
            <p>12:00 PM</p>
          </div>
          <div class="jadwal-item">
            <h4>Ashar</h4>
            <p>03:15 PM</p>
          </div>
          <div class="jadwal-item">
            <h4>Maghrib</h4>
            <p>06:05 PM</p>
          </div>
          <div class="jadwal-item">
            <h4>Isya</h4>
            <p>07:20 PM</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'JadwalSolat',
  };
  </script>
  
  <style scoped>
  .jadwal-solat-section {
    margin: 20px 0;
    background: linear-gradient(to left, #93f9b9, #1d976c);

    padding: 30px;
    border: 1px solid rgb(117, 214, 97);
    border-left: none;
    border-right: none;
  }
  
  .jadwal-solat {
    display: flex;
    /* Jarak antar item */
  }
  
  .jadwal-item {
   
    padding: 20px 0;
    border-radius: 10px;
  
    flex-basis: 15%; /* Mengatur lebar item */
    text-align: center;
    margin: 50px 0;
  }
  
  .jadwal-item h4 {
    border: 2px solid #C7FFD8;
     border-left: none;
    border-right: none;
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  .jadwal-item p {
    font-size: 16px;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .jadwal-solat {
      flex-direction: column; /* Pada layar kecil, item akan ditumpuk secara vertikal */
      align-items: center;
    }
  
    .jadwal-item {
      flex-basis: 100%; /* Pada layar kecil, item akan mengambil lebar penuh */
      margin-bottom: 20px;
    }
  }
  </style>
  