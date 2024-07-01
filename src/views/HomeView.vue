<template>
  <div class="relative overflow-x-auto m-8 rounded-md shadow-md">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
            </tr>
        </thead>
        <tbody v-if="this.halo.length > 0">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(user, index) in this.halo" :key="index">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ user.nama }}
                </th>
                <td class="px-6 py-4">
                    {{ user.address }}
                </td>
                <td class="px-6 py-4">
                    {{ user.email }}
                </td>
                <td class="px-6 py-4">
                    +{{ user.phone }}
                </td>
            </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3">
              <h1 class="m-2 text-2xl font-bold text-black">Loading...</h1>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Beranda',
  data(){
    return {
      halo: []
    }
  },
  mounted(){
    this.getUsers();
  },
  methods: {
    getUsers(){
      axios.get('https://go-api4-production.up.railway.app/').then( res =>{
        this.halo = res.data.data
        console.log(res.data.data)
      })
    }
  }
}

</script>
