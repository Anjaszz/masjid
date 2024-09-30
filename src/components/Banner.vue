<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/banner1.png" class="d-block w-100" alt="Banner 1">
        </div>
        <div class="carousel-item">
          <img src="/banner1.png" class="d-block w-100" alt="Banner 2">
        </div>
        <div class="carousel-item">
          <img src="/banner1.png" class="d-block w-100" alt="Banner 3">
        </div>
        <div class="carousel-item">
          <img src="/banner1.png" class="d-block w-100" alt="Banner 3">
        </div>
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Banner',
  };
  </script>
  <style scoped>
  .carousel-item {
    object-fit: contain;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    .carousel-item {
      height: 300px; /* Sesuaikan tinggi untuk layar kecil */
    }
  }
  </style>