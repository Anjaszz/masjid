<template>
    <div @click="goToDetail" class="card mx-2" style="width: 18rem; cursor: pointer;">
      <img :src="image" class="card-img-top" :alt="title">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      description: String,
      id: Number, // Atau String tergantung kebutuhan Anda
    },
    methods: {
      goToDetail() {
        this.$router.push({ name: 'ArtikelDetail', params: { id: this.id } });
      },
    },
  };
  </script>
  
  
  <style scoped>
  .card {
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05); /* Efek zoom saat hover */
  }
  </style>
  