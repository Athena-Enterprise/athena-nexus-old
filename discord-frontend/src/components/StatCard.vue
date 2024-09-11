<template>
    <div class="bg-gray-800 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <div class="flex items-center justify-between">
        <div class="text-2xl">
          <slot name="icon"></slot>
        </div>
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>
      <div class="mt-4 text-xl">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatCard',
    props: {
      title: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  /* Optional additional styles */
  </style>
  