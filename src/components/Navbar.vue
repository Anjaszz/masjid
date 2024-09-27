<template>
    <nav class="navbar navbar-expand-lg navbar-light  bg-body-rgb">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/vite.svg" alt="Logo" width="30" height="30" class="d-inline-block align-top">
          Masjid Al-Falah
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artikel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Donasi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Style untuk navbar */
  .navbar-nav .nav-link {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    color: #343a40;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -5px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }
  
  .navbar-nav .nav-link:hover {
    color: #007bff;
  }
  
  .navbar-nav .nav-link:hover::after {
    width: 100%;
  }
  </style>
  