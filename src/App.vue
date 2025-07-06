<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import MenuItem from './components/MenuItem.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue' 
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue' 
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue' 
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue' 

let openMenu = ref(false) // controla a visibilidade do menu
</script>

<template>
  <div 
    class="
      w-[calc(100%-240px)]
      h-[60px]
      fixed
      right-0
      z-20
      bg-[#101010]
      bg-opacity-80
      flex
      items-center
      justify-between
    "
  >
    <div class="flex items-center ml-6">
      <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
        <ChevronLeft fillColor="#FFFF" :size="30" />
      </button>
      <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
        <ChevronRight fillColor="#FFFF" :size="30" />
      </button>
    </div>

    <button
      @click="openMenu = !openMenu"
      :class="openMenu ? 'bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer' : 'bg-black rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer hover:bg-[#282828]'"
    >
      <div class="flex items-center">
        <img 
          class="rounded-full"
          width="40"
          height="40"
          src="./assets/profile-pic.jpg" 
          alt="User Profile Picture"
        />

        <div class="text-white text-[14px] ml-1.5 font-semibold">
          <span>Dudu Inocencio</span>
        </div>
        
        <ChevronDown v-if="!openMenu" fillColor="#FFFF" :size="20" />
        <ChevronUp v-else fillColor="#FFFF" :size="20" />
      </div>
    </button>

    <span
      v-if="openMenu"
      class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[60px] right-[35px] p-1 cursor-pointer"
    >
      <ul class="text-gray-200 font-semibold text-[14px]">
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
        <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
      </ul>
    </span>
  </div>

  <div 
    id="SideNav" 
    class="h-[100%] p-6 w-[240px] fixed z-50 bg-black"
  >

    <img width="125" src="/images/icons/spotify-logo.png" alt="Spotify Logo" />
   
    
    
  </div>
</template>

