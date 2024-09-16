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
        <div v-if="isScrolled" class="nav-buttons">
          <button class="cta-button primary" @click="addBot">Add the Bot</button>
          <button class="cta-button secondary" @click="login">Login</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <h1>Athena Nexus</h1>
        <p>The Ultimate Discord & Game Server Management Platform</p>
        <div class="cta-buttons centered-cta">
          <button class="cta-button primary large" @click="addBot">Add the Bot</button>
          <button class="cta-button secondary large" @click="login">Login</button>
        </div>
      </div>
    </header>

    <!-- Combined Features & Benefits Section -->
    <section id="features-benefits" class="features-benefits-section">
      <div class="container">
        <h2>Why Choose Athena Nexus</h2>
        <div class="content-grid">
          <!-- Features Section - Staggered Cards with Icons -->
          <div class="feature card">
            <i class="fas fa-cogs"></i>
            <h3>Advanced Customization</h3>
            <p>Create bots tailored to your server with custom commands, automations, and more.</p>
          </div>
          <div class="feature card">
            <i class="fas fa-shield-alt"></i>
            <h3>Security & Moderation</h3>
            <p>Keep your community safe with powerful moderation tools.</p>
          </div>
          <div class="feature card">
            <i class="fas fa-gamepad"></i>
            <h3>Gaming Integrations</h3>
            <p>Integrate with your favorite games and manage servers with ease.</p>
          </div>
          <div class="feature card">
            <i class="fas fa-music"></i>
            <h3>Music Controls</h3>
            <p>Manage music on your server with intuitive commands.</p>
          </div>

          <!-- Benefits Section - Full Width Cards -->
          <div class="benefit card full-width">
            <i class="fas fa-rocket"></i>
            <h3>Boost Productivity</h3>
            <p>Save time and streamline server management with powerful automation features.</p>
          </div>
          <div class="benefit card full-width">
            <i class="fas fa-user-friends"></i>
            <h3>Community Building</h3>
            <p>Keep your community engaged and organized with seamless integrations and tools.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans Section - Adjusted Padding and Hover Effect -->
    <section id="plans" class="plans-section">
      <div class="container">
        <h2>Choose Your Plan</h2>
        <div class="plans-grid">
          <div class="plan-card" style="margin-top: 20px;"> <!-- Added margin-top to prevent overlap -->
            <div class="tag top-right">Best for Starters</div>
            <h3>Free Plan</h3>
            <p class="price">$0/month</p>
            <ul>
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Custom Commands</li>
              <li><i class="fas fa-times"></i> 24/7 Support</li>
              <li><i class="fas fa-times"></i> Unlimited Automations</li>
            </ul>
            <button class="cta-button primary">Get Started</button>
          </div>
          <div class="plan-card highlight">
            <div class="tag top-right popular">Most Popular</div>
            <h3>Pro Plan</h3>
            <p class="price">$9.99/month</p>
            <ul>
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Custom Commands</li>
              <li><i class="fas fa-check"></i> 24/7 Support</li>
              <li><i class="fas fa-check"></i> Unlimited Automations</li>
            </ul>
            <button class="cta-button primary">Upgrade</button>
          </div>
          <div class="plan-card" style="margin-top: 20px;">
            <div class="tag top-right">For Power Users</div>
            <h3>Ultra Plan</h3>
            <p class="price">$19.99/month</p>
            <ul>
              <li><i class="fas fa-check"></i> Server Management</li>
              <li><i class="fas fa-check"></i> Custom Commands</li>
              <li><i class="fas fa-check"></i> 24/7 Support</li>
              <li><i class="fas fa-check"></i> Unlimited Automations</li>
            </ul>
            <button class="cta-button primary">Go Ultra</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer id="contact" class="footer">
      <div class="container footer-container">
        <div class="footer-icons">
          <ul class="social-media">
            <li><a href="https://github.com" class="social-icon"><i class="fab fa-github fa-2x"></i></a></li>
            <li><a href="https://twitter.com" class="social-icon"><i class="fab fa-twitter fa-2x"></i></a></li>
            <li><a href="https://discord.com" class="social-icon"><i class="fab fa-discord fa-2x"></i></a></li>
          </ul>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h5>Products</h5>
            <ul>
              <li><a href="#">Discord Bot</a></li>
              <li><a href="#">Custom Commands</a></li>
              <li><a href="#">Automation</a></li>
            </ul>
          </div>
          <div class="link-column">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div class="link-column">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Athena Nexus. All Rights Reserved.</p>
        </div>
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
/* Color Coding for Theme Customization */
:root {
  --color-primary: #00D4FF;
  --color-secondary: #00B3CC;
  --color-background-dark: #141E30;
  --color-background-darker: #0f2027;
  --color-text-light: #ccc;
  --color-footer-bg: #0f2027;
  --color-footer-text: #ccc;
  --color-section-light: #1B2A3A;
  --color-section-dark: #10202A;
  --color-plan-section: #1F2F3F;
}

/* Global Styles */
body, html, .landing-page {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--color-background-darker);
  color: white;
  overflow-x: hidden;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Navbar */
.navbar {
  position: fixed;
  width: 100%;
  padding: 20px 0;
  background-color: transparent;
  transition: background-color 0.5s ease, padding 0.5s ease;
  z-index: 1000;
}

.navbar-scrolled {
  background-color: rgba(30, 30, 30, 0.95);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

.logo h2 {
  margin: 0;
  color: var(--color-primary);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  background: linear-gradient(to top left, var(--color-background-darker), var(--color-background-dark));
  background-size: 400% 400%;
  animation: animateGradient 12s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@keyframes animateGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-content h1 {
  font-size: 4rem;
  margin: 0;
  color: var(--color-primary);
}

.hero-content p {
  font-size: 1.5rem;
  color: var(--color-text-light);
}

.centered-cta {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.cta-button {
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: white;
}

.cta-button.primary:hover {
  background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.cta-button.secondary:hover {
  background-color: var(--color-primary);
  color: white;
}

/* Features & Benefits Section */
.features-benefits-section {
  padding: 80px 0;
  background-color: var(--color-section-light);
  text-align: center;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.feature, .benefit {
  background: linear-gradient(135deg, var(--color-background-dark), var(--color-background-darker));
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover, .benefit:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.full-width {
  grid-column: span 2;
}

.feature i, .benefit i {
  font-size: 2.5rem;
  color: var(--color-primary);
}

.feature h3, .benefit h3 {
  margin-top: 10px;
  color: var(--color-primary);
}

/* Plans Section */
.plans-section {
  padding: 80px 0;
  background-color: var(--color-plan-section);
}

.plans-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.plan-card {
  position: relative;
  background: linear-gradient(135deg, var(--color-background-darker), var(--color-background-dark));
  padding: 40px;
  border-radius: 10px;
  width: 30%;
  text-align: center;
  transition: transform 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-10px) scale(1.05);
}

.plan-card.highlight:hover {
  transform: translateY(-10px) scale(1.05); /* Added hover for Pro Plan */
}

.plan-card h3 {
  color: var(--color-primary);
}

.plan-card .price {
  font-size: 1.5rem;
  color: #fff;
  margin: 20px 0;
}

.plan-card ul {
  list-style: none;
  padding: 0;
}

.plan-card ul li {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plan-card ul li i {
  margin-right: 10px;
  color: var(--color-primary);
}

.plan-card .tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--color-secondary);
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
}

.plan-card .tag.popular {
  background-color: #ff6f61;
}

/* Footer */
.footer {
  background-color: var(--color-footer-bg);
  padding: 60px 0;
  color: var(--color-footer-text);
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 50%; /* Reduced width */
  margin: 0 auto;
}

.footer-icons {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
}

.social-media li {
  list-style-type: none;
}

.social-icon {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--color-primary);
}

.footer-links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  gap: 10px; /* Reduced gap */
}

.link-column h5 {
  color: var(--color-primary);
}

.link-column ul {
  list-style: none;
  padding: 0;
}

.link-column ul li {
  margin: 10px 0;
}

.link-column ul li a {
  color: var(--color-footer-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-column ul li a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  width: 100%;
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

  .plans-grid, .content-grid {
    flex-direction: column;
  }

  .plan-card, .feature, .benefit {
    width: 100%;
  }

  .footer-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
