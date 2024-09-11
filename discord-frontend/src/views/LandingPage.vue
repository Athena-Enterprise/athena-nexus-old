<template>
    <div>
      <!-- Navbar -->
      <header class="fixed top-0 w-full z-50 bg-white shadow-md">
        <nav class="container mx-auto px-6 py-3">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-gray-800">Athena Nexus</h1>
            </div>
            <div>
              <button class="bg-blue-500 text-white px-4 py-2 rounded mr-4">Add Bot</button>
              <button class="bg-gray-500 text-white px-4 py-2 rounded">Login</button>
            </div>
          </div>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="relative h-screen bg-hero-pattern bg-cover bg-center">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 text-center text-white flex justify-center items-center h-full">
          <div>
            <h2 class="text-5xl font-bold mb-6">Automate your Discord Server with Athena Nexus</h2>
            <p class="text-xl mb-10">The most powerful, yet affordable bot for server management</p>
            <button class="bg-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">Add Bot Now</button>
          </div>
        </div>
      </section>
  
      <!-- Features Section (Parallax) -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-6">
          <h3 class="text-4xl text-center font-bold mb-12">Why Choose Athena Nexus?</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 class="text-2xl font-bold mb-4">Affordable Pricing</h4>
              <p>Get the best features without breaking the bank. Athena Nexus is priced competitively for every server size.</p>
            </div>
            <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 class="text-2xl font-bold mb-4">24/7 Uptime</h4>
              <p>Our servers are robust and reliable, ensuring that your Discord bot is always online and functional.</p>
            </div>
            <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 class="text-2xl font-bold mb-4">Advanced Features</h4>
              <p>From moderation tools to advanced analytics, Athena Nexus has everything you need to manage your community.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- About Us Section -->
      <section class="bg-gray-100 py-20">
        <div class="container mx-auto px-6">
          <h3 class="text-4xl text-center font-bold mb-12">About Us</h3>
          <p class="text-center text-lg max-w-4xl mx-auto">Athena Nexus was created with the vision to help server owners automate their Discord server management. Our team is dedicated to delivering high-quality features while keeping everything user-friendly and accessible.</p>
        </div>
      </section>
  
      <!-- Contact Us Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-6">
          <h3 class="text-4xl text-center font-bold mb-12">Contact Us</h3>
          <p class="text-center text-lg max-w-4xl mx-auto mb-8">Have any questions or need support? Feel free to reach out to us.</p>
          <div class="text-center">
            <button class="bg-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">Contact Support</button>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 py-10">
        <div class="container mx-auto text-center text-white">
          <p>&copy; 2024 Athena Nexus. All rights reserved.</p>
          <div class="mt-4">
            <a href="/tos" class="text-blue-400 hover:underline">Terms of Service</a> |
            <a href="/privacy" class="text-blue-400 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style>
  /* Example of a custom background for the hero section */
  .bg-hero-pattern {
    background-image: url('https://via.placeholder.com/1920x1080');
  }
  
  /* Tailwind customizations can be added here */
  </style>
  