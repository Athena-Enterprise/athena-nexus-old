<template>
    <div class="landing-page">
      <!-- Navbar -->
      <nav :class="{'navbar-scrolled': isScrolled}" class="navbar">
        <div class="navbar-container">
          <div class="logo">
            <h2>Athena Nexus</h2>
          </div>
          <ul class="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
          <div class="nav-buttons">
            <button class="cta-button primary" @click="addBot">Add the Bot</button>
            <button class="cta-button secondary" @click="login">Login</button>
          </div>
        </div>
      </nav>
  
      <!-- Header Section -->
      <header class="header-bg">
        <div class="header-content">
          <h1 class="header-title">Athena Nexus</h1>
          <p class="header-subtitle">The Ultimate Discord Management Solution for Large Servers</p>
          <div class="cta-buttons">
            <button class="cta-button primary" @click="addBot">Add the Bot</button>
            <button class="cta-button secondary" @click="login">Login</button>
          </div>
        </div>
      </header>
  
      <!-- Commercial Section -->
      <section id="features" class="commercial-section">
        <h2>What Athena Nexus Can Do</h2>
        <div class="features-container">
          <div class="feature-item">
            <i class="fas fa-cogs"></i>
            <h3>Server Management</h3>
            <p>Efficiently manage your Discord server with advanced tools and automation.</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-paint-brush"></i>
            <h3>Customization</h3>
            <p>Customize your server's appearance and functionalities to suit your community's needs.</p>
          </div>
          <div class="feature-item">
            <i class="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Receive round-the-clock support from our dedicated team to ensure smooth operations.</p>
          </div>
          <!-- Add more feature items as needed -->
        </div>
      </section>
  
      <!-- Features Comparison Section -->
      <section id="plans" class="features-section">
        <h2>Choose Your Plan</h2>
        <div class="pricing-table">
          <div class="pricing-card">
            <h3 class="plan-title">Free</h3>
            <p class="plan-price">$0 <span>/month</span></p>
            <ul class="features-list">
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Customization</li>
              <li><i class="fas fa-check"></i> 24/7 Support</li>
              <li><i class="fas fa-times"></i> Feature 1</li>
              <li><i class="fas fa-times"></i> Feature 2</li>
              <li><i class="fas fa-times"></i> Feature 3</li>
              <li><i class="fas fa-times"></i> Feature 4</li>
              <li><i class="fas fa-times"></i> Feature 5</li>
              <li><i class="fas fa-times"></i> Feature 6</li>
            </ul>
            <button class="cta-button primary">Select Free</button>
          </div>
          <div class="pricing-card">
            <h3 class="plan-title">Pro</h3>
            <p class="plan-price">$9.99 <span>/month</span></p>
            <ul class="features-list">
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Customization</li>
              <li><i class="fas fa-check"></i> 24/7 Support</li>
              <li><i class="fas fa-check"></i> Feature 1</li>
              <li><i class="fas fa-check"></i> Feature 2</li>
              <li><i class="fas fa-check"></i> Feature 3</li>
              <li><i class="fas fa-times"></i> Feature 4</li>
              <li><i class="fas fa-times"></i> Feature 5</li>
              <li><i class="fas fa-times"></i> Feature 6</li>
            </ul>
            <button class="cta-button primary">Select Pro</button>
          </div>
          <div class="pricing-card">
            <h3 class="plan-title">Ultra</h3>
            <p class="plan-price">$19.99 <span>/month</span></p>
            <ul class="features-list">
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Customization</li>
              <li><i class="fas fa-check"></i> 24/7 Support</li>
              <li><i class="fas fa-check"></i> Feature 1</li>
              <li><i class="fas fa-check"></i> Feature 2</li>
              <li><i class="fas fa-check"></i> Feature 3</li>
              <li><i class="fas fa-check"></i> Feature 4</li>
              <li><i class="fas fa-check"></i> Feature 5</li>
              <li><i class="fas fa-check"></i> Feature 6</li>
            </ul>
            <button class="cta-button primary">Select Ultra</button>
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
      <footer id="contact" class="footer">
        <p>© 2024 Athena Nexus. All Rights Reserved. <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a></p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
      return {
        isScrolled: false,
      };
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > window.innerHeight - 80; // Adjust threshold as needed
      },
      addBot() {
        // Placeholder for Add the Bot action
        window.location.href = '#add-bot'; // Update with actual link
      },
      login() {
        // Placeholder for Login action
        window.location.href = '#login'; // Update with actual link
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style>
  /* Remove 'scoped' to allow global styles and full coverage */
  
  /* Reset and Global Styles */
  body, html, #app, .landing-page {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
  }
  
  .landing-page {
    overflow-x: hidden;
  }
  
  /* Navbar Styles */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    justify-content: center;
    transition: background 0.3s, padding 0.3s;
    z-index: 1000;
  }
  
  .navbar-scrolled {
    background: rgba(0, 0, 0, 0.9);
    padding: 10px 40px;
  }
  
  .navbar-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo h2 {
    margin: 0;
    color: #38B2AC;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .nav-links li a:hover {
    color: #38B2AC;
  }
  
  .nav-buttons {
    display: flex;
    gap: 10px;
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: none;
  }
  
  .cta-button.primary {
    background-color: #38B2AC;
    color: #fff;
  }
  
  .cta-button.primary:hover {
    background-color: #2C7A7B;
  }
  
  .cta-button.secondary {
    background-color: transparent;
    color: #38B2AC;
    border: 2px solid #38B2AC;
  }
  
  .cta-button.secondary:hover {
    background-color: #38B2AC;
    color: #fff;
  }
  
  /* Header Section */
  .header-bg {
    height: 100vh;
    background: linear-gradient(135deg, #141E30, #243B55, #0f2027);
    background-size: 300% 300%;
    animation: slowMove 20s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    position: relative;
  }
  
  @keyframes slowMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .header-content {
    max-width: 800px;
    padding: 0 20px;
  }
  
  .header-title {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
  }
  
  .header-subtitle {
    font-size: 1.5rem;
    margin-top: 20px;
    color: #D1D5DB;
  }
  
  .header .cta-buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  /* Commercial Section */
  .commercial-section {
    padding: 80px 40px;
    background-color: #1B263B;
    color: white;
    text-align: center;
  }
  
  .commercial-section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  .features-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  
  .feature-item {
    background-color: #243B55;
    padding: 30px;
    border-radius: 10px;
    width: 300px;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .feature-item:hover {
    transform: translateY(-10px);
    background-color: #2A3B5A;
  }
  
  .feature-item i {
    font-size: 2rem;
    color: #38B2AC;
    margin-bottom: 20px;
  }
  
  .feature-item h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .feature-item p {
    font-size: 1rem;
    color: #A0AEC0;
  }
  
  /* Features Comparison Section */
  .features-section {
    padding: 80px 40px;
    background-color: #1B263B;
    color: white;
    text-align: center;
  }
  
  .features-section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  .pricing-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .pricing-card {
    background-color: #243B55;
    padding: 40px;
    border-radius: 15px;
    width: 300px;
    text-align: center;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .pricing-card:hover {
    transform: translateY(-10px);
    background-color: #2A3B5A;
  }
  
  .plan-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #38B2AC;
  }
  
  .plan-price {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .plan-price span {
    font-size: 1rem;
    color: #A0AEC0;
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-bottom: 20px;
  }
  
  .features-list li {
    margin: 10px 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  
  .features-list i {
    margin-right: 10px;
    color: #38B2AC;
  }
  
  .features-list .fas.fa-times {
    color: #E53E3E;
  }
  
  .pricing-card .cta-button {
    width: 100%;
  }
  
  /* Footer Section */
  .footer {
    background-color: #0D1B2A;
    padding: 30px 40px;
    color: #D1D5DB;
    text-align: center;
  }
  
  .footer a {
    color: #38B2AC;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .nav-links {
      flex-direction: column;
      width: 100%;
      display: none;
    }
  
    .navbar-scrolled .nav-links {
      display: flex;
    }
  
    .features-container,
    .pricing-table {
      flex-direction: column;
      align-items: center;
    }
  
    .feature-item,
    .pricing-card {
      width: 100%;
      max-width: 300px;
    }
  }
  </style>
  