<template>
  <div>
    <Navbar />
    <Banner />
    <JadwalSolat />
    <FiturWebsite />
    <Artikel />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import JadwalSolat from './components/JadwalSolat.vue';
import FiturWebsite from './components/FiturWebsite.vue';
import Artikel from './components/Artikel.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Banner,
    JadwalSolat,
    FiturWebsite,
    Artikel,
    Footer,
  },
};
</script>
