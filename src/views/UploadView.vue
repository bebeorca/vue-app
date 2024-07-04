<template>
    <div>
      <input type="file" @change="handleFileUpload" required>
      <button @click="uploadPost">Upload Post</button>
    </div>
    <div id="reqimg" class="justify-center items-center hidden">
        <h1 class="text-red-700 text-xl font-bold">IMAGE REQUIRED!</h1>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
  methods: {
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];
    },
    uploadPost() {
        var warn = document.getElementById('reqimg')
        if(this.imageFile == null){
            warn.classList.remove("hidden")
            warn.classList.add("flex")
        }else{
            let formData = new FormData();
            formData.append('image', this.imageFile);
      
            axios.post('https://go-api4-production.up.railway.app/upload', formData)
              .then(response => {
                console.log(response.data);
                this.$router.push({ path: '/' }).then(() => {
                  window.location.reload();
                });
              })
              .catch(error => {
                console.error('Error uploading image:', error);
                // Handle error
              });
              warn.classList.remove("flex")
              warn.classList.add("hidden")
              // this.$router.push({ path: '/' }).then(() => {
              //   window.location.reload();
              // });
        }
    }
  },
  data() {
    return {
      imageFile: null,
    };
  }
}
</script>