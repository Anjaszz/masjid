<template>
  <section class="text-center my-5">
    <h2>Artikel</h2>
    <div class="article-slider">
      <div class="article-scroll-container" ref="scrollContainer">
        <div class="d-flex">
          <ArtikelCard
            v-for="(artikel, index) in artikels"
            :key="index"
            :title="artikel.title"
            :description="artikel.description"
            :imageSrc="artikel.imageSrc"
            :id="artikel.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArtikelCard from './ArtikelCard.vue'; // Pastikan path sesuai

export default {
  name: 'Artikel',
  components: {
    ArtikelCard,
  },
  data() {
    return {
      artikels: [
        {
          id: 1,
          title: 'Artikel 1',
          description: 'Deskripsi singkat artikel 1.',
          imageSrc: '/banner1.png',
        },
        {
          id: 2,
          title: 'Artikel 2',
          description: 'Deskripsi singkat artikel 2.',
          imageSrc: '/banner2.png',
        },
        {
          id: 3,
          title: 'Artikel 3',
          description: 'Deskripsi singkat artikel 3.',
          imageSrc: '/banner3.png',
        },
        // Tambahkan lebih banyak artikel sesuai kebutuhan
      ],
    };
  },
};
</script>

<style scoped>
.article-slider {
  overflow: hidden; /* Sembunyikan overflow */
  position: relative; /* Posisi relatif untuk penempatan scrollbar */
}

.article-scroll-container {
  display: flex;
  overflow-x: auto; /* Izinkan scroll horizontal */
  scroll-behavior: smooth; /* Smooth scrolling */
  padding: 1rem; /* Tambahkan padding jika diperlukan */
}

.article-scroll-container::-webkit-scrollbar {
  height: 8px; /* Tinggi scrollbar */
}

.article-scroll-container::-webkit-scrollbar-thumb {
  background: #888; /* Warna scrollbar */
  border-radius: 10px; /* Sudut scrollbar */
}

.article-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555; /* Warna scrollbar saat hover */
}
</style>
