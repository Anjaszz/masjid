<template>
    <div class="container my-5">
      <h2>{{ artikel.title }}</h2>
      <img :src="artikel.imageSrc" class="img-fluid" alt="Detail Artikel" />
      <p>{{ artikel.description }}</p>
      <router-link to="/artikel" class="btn btn-primary">Kembali</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetailArtikel',
    data() {
      return {
        artikel: {},
      };
    },
    created() {
      // Ambil ID dari parameter URL
      const artikelId = this.$route.params.id;
  
      // Di sini Anda bisa mengambil data artikel berdasarkan ID dari API atau data statis
      const artikels = [
        {
          id: 1,
          title: 'Artikel 1',
          description: 'Deskripsi lengkap artikel 1.',
          imageSrc: '/banner1.png',
        },
        {
          id: 2,
          title: 'Artikel 2',
          description: 'Deskripsi lengkap artikel 2.',
          imageSrc: '/banner2.png',
        },
        {
          id: 3,
          title: 'Artikel 3',
          description: 'Deskripsi lengkap artikel 3.',
          imageSrc: '/banner3.png',
        },
        // Tambahkan lebih banyak artikel sesuai kebutuhan
      ];
  
      // Temukan artikel berdasarkan ID
      this.artikel = artikels.find(artikel => artikel.id == artikelId);
    },
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
  }
  </style>
  