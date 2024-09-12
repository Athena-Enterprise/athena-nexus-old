<template>
  <div class="landing-page">
    <!-- Navbar (full-width) -->
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
        <div class="nav-buttons" v-if="isScrolled">
          <button class="cta-button primary" @click="addBot">Add the Bot</button>
          <button class="cta-button secondary" @click="login">Login</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section (full-width) -->
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

    <!-- Build Your Own Unique Discord Bot Section (centered content) -->
    <section id="features" class="feature-section unique-bot">
      <div class="container">
        <div class="feature-content">
          <div class="text-content">
            <h2>Build Your Own Unique Discord Bot</h2>
            <p>Create a one-of-a-kind bot that aligns with your server’s personality. Customize commands, automations, and more.</p>
            <button class="cta-button primary">Start Building</button>
          </div>
          <img src="https://i.imgur.com/3AynMql.gif" alt="Unique Bot" />
        </div>
      </div>
    </section>

    <!-- Creative Welcome Messages Section (centered content) -->
    <section class="feature-section welcome-messages">
      <div class="container">
        <div class="feature-content">
          <img src="https://i.imgur.com/lZKkbAf.gif" alt="Welcome Messages" />
          <div class="text-content">
            <h2>Creative Welcome Messages</h2>
            <p>Welcome your new members with style! Create unique messages with gifs, custom texts, and more.</p>
            <button class="cta-button primary">Try It Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Custom Commands Section (centered content) -->
    <section class="feature-section custom-commands">
      <div class="container">
        <div class="feature-content">
          <div class="text-content">
            <h2>Advanced Custom Commands</h2>
            <p>Create intricate commands that automate tasks, manage roles, and much more, all tailored to your needs.</p>
            <button class="cta-button primary">Create Commands</button>
          </div>
          <img src="https://i.imgur.com/ufJjP1O.gif" alt="Custom Commands" />
        </div>
      </div>
    </section>

    <!-- Features Comparison Section (centered content) -->
    <section id="plans" class="features-section">
      <div class="container">
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
            </ul>
            <button class="cta-button primary">Select Ultra</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section (custom design) -->
    <footer id="contact" class="footer">
      <div class="container footer-container">
        <div class="footer-top">
          <section class="newsletter">
            <p>Sign up for our newsletter</p>
            <form>
              <input type="email" placeholder="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </section>
        </div>

        <div class="footer-links">
          <div class="link-column">
            <h5>Products</h5>
            <ul>
              <li><a href="#!">Discord Bot</a></li>
              <li><a href="#!">Custom Commands</a></li>
              <li><a href="#!">Automation</a></li>
              <li><a href="#!">Integrations</a></li>
            </ul>
          </div>

          <div class="link-column">
            <h5>Resources</h5>
            <ul>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">Documentation</a></li>
              <li><a href="#!">Community</a></li>
              <li><a href="#!">Blog</a></li>
            </ul>
          </div>

          <div class="link-column">
            <h5>Company</h5>
            <ul>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Terms of Service</a></li>
              <li><a href="#!">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="link-column">
            <h5>Contact</h5>
            <ul>
              <li><a href="#!">Contact Us</a></li>
              <li><a href="#!">Partners</a></li>
              <li><a href="#!">Press Inquiries</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024 Athena Nexus. All Rights Reserved.</p>
      </div>
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
      this.isScrolled = window.scrollY > window.innerHeight - 80;
    },
    addBot() {
      window.location.href = '#add-bot';
    },
    login() {
      window.location.href = '#login';
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
/* Global reset and layout styles */
body, html, #app, .landing-page {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.landing-page {
  width: 100%;
}

/* Navbar styles */
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

/* Hero Section */
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

.cta-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
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

/* Feature Sections */
.feature-section {
  padding: 80px 0;
  background-color: #1B263B;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.feature-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.feature-content img {
  width: 45%;
  border-radius: 15px;
}

.text-content {
  width: 50%;
  max-width: 500px;
}

.text-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.text-content p {
  font-size: 1.2rem;
  color: #A0AEC0;
  margin-bottom: 20px;
}

/* Pricing Table */
.features-section {
  padding: 80px 0;
  background-color: #1B263B;
  color: white;
}

.pricing-table {
  display: flex;
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
  padding: 60px 0;
  color: #D1D5DB;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-icon {
  display: inline-block;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  border: 1px solid white;
  border-radius: 50%;
  transition: background 0.3s, color 0.3s;
}

.social-icon:hover {
  background-color: white;
  color: #38B2AC;
}

.newsletter p {
  color: white;
  margin-bottom: 10px;
}

.newsletter form {
  display: flex;
  gap: 10px;
}

.newsletter input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
}

.newsletter button {
  padding: 10px 20px;
  background-color: #38B2AC;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.newsletter button:hover {
  background-color: #2C7A7B;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.link-column h5 {
  color: #38B2AC;
  margin-bottom: 20px;
}

.link-column ul {
  list-style: none;
  padding: 0;
}

.link-column li {
  margin-bottom: 10px;
}

.link-column a {
  color: #D1D5DB;
  text-decoration: none;
}

.link-column a:hover {
  color: #38B2AC;
}

.footer-bottom {
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
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

  .feature-content {
    flex-direction: column;
  }

  .text-content, .feature-content img {
    width: 100%;
  }

  .pricing-table {
    flex-direction: column;
  }

  .footer-container {
    flex-direction: column;
  }

  .footer-top {
    flex-direction: column;
    align-items: center;
  }

  .newsletter form {
    flex-direction: column;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
