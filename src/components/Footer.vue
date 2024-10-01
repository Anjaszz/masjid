<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#contact">Kontak</a>
          <a href="#features">Fitur</a>
          <a href="#donasi">Donasi</a>
        </div>
        <div class="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Nama Website. Semua hak dilindungi.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #50dd63;
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #4ec78d;
  }
  
  .social-media a {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    transition: color 0.3s;
  }
  
  .social-media a:hover {
    color: #4ec78d;
  }
  
  .footer-bottom {
    border-top: 1px solid #444;
    padding-top: 10px;
  }
  </style>
  