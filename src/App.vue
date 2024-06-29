<template>
  <div class="relative overflow-x-auto m-8 rounded-md shadow-md">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(product, index) in this.products" :key="index">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.title }}
                </th>
                <td class="px-6 py-4">
                    {{ product.category }}
                </td>
                <td class="px-6 py-4">
                    ${{ product.price }}
                </td>
            </tr>
        </tbody>
    </table>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'products',
  data(){
    return {
      products: []
    }
  },
  mounted(){
    this.getProducts();
  },
  methods: {
    getProducts(){
      axios.get('https://dummyjson.com/products').then(res =>{
        this.products = res.data.products;
      })
    }
  }
}

</script>
