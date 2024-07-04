<template>
  <div id="default-carousel" class="relative w-full mt-8 border-b border-b-black py-2" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96">
      <div class="duration-700 ease-in-out" data-carousel-item v-for="(post, index) in newPost" :key="index">
        <img :src="getImageUrl(post.file_path)" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Image">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <!-- Your slider indicators buttons here -->
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <!-- Your previous button content -->
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <!-- Your next button content -->
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Beranda',
  data() {
    return {
      users: [],    // Assuming you might use this later
      newPost: [],  // Changed to an array to match v-for usage
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get('https://go-api4-production.up.railway.app/')
        .then(res => {
          this.newPost = res.data.image || [];  // Assigning to newPost as an array
          this.users = res.data.data || [];     // Assuming you might use users array later
          console.log(res.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    getImageUrl(imagePath) {
      return `https://go-api4-production.up.railway.app/images/${imagePath}`;
    },
  },
};
</script>
