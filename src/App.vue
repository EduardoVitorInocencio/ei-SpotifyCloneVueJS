<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
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
    id="SideBar"
    class="h-[100%] p-6 w-[240px] fixed left-0 top-0 z-10 bg-[#000] shadow-lg transition-all duration-300"
  >
    <RouterLink to="/"> 
        <img src="../public/images/icons/spotify-logo.png" alt="">      
    </RouterLink>

    <div class="my-8"></div>
    <RouterLink to="/">
        <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
    </RouterLink>
    <RouterLink to="/search">
        <MenuItem class="ml-[1px]" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
    </RouterLink>
    <RouterLink to="/library">
        <MenuItem class="ml-[2px]" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
    </RouterLink>

    <div class="py-3.5"></div>
    <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
    <MenuItem class="-ml-[1px]" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />

    <div class="border-b border-b-gray-700"></div>
    <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
    </ul>

  </div>

  <div
    class="
        fixed
        right-0
        top-0
        w-[calc(100%-240px)]
        overflow-auto
        h-full
        bg-gradient-to-b from-[#1C1C1C] to-black
    "
  >
    <div class="mt-[70px]"></div>
    <RouterView />

  </div>




</template>

