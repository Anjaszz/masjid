<template>
  <div>
    <Navbar />
    <Banner />
    <JadwalSolat />
    <FiturWebsite />
    <Artikel />
    <footer class="text-center py-4 bg-light mt-5">
      <p>&copy; 2024 Masjid Al-Falah. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import JadwalSolat from './components/JadwalSolat.vue';
import FiturWebsite from './components/FiturWebsite.vue';
import Artikel from './components/Artikel.vue';

export default {
  components: {
    Navbar,
    Banner,
    JadwalSolat,
    FiturWebsite,
    Artikel,
  },
};
</script>
