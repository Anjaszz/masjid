import { createRouter, createWebHistory } from 'vue-router';
import ArtikelDetail from '../components/DetailArtikel.vue'; // Pastikan path ini benar
import Home from '../App.vue'; // Pastikan path ini benar

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/artikel/:id',
    name: 'ArtikelDetail',
    component: ArtikelDetail,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Ganti process.env dengan import.meta.env
  routes,
});

export default router;
