<script setup>

import { ref, onMounted } from 'vue'; // Import Vue's ref and onMounted functions, REf is used to create reactive variables, and onMounted is a lifecycle hook that runs after the component is mounted.
import { RouterLink, RouterView } from 'vue-router'; // Import RouterLink and RouterView from vue-router for navigation and rendering of components based on the current route.

import MenuItem from './components/MenuItem.vue'; // Importing a custom component named MenuItem, which likely contains navigation items for the sidebar.
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'; // Importing a specific icon component from the Vue Material Design Icons library.
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'; // Importing another icon component from the Vue Material Design Icons library.
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'; // Importing a right chevron icon component.
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'; // Importing a left chevron icon component.

import { storeToRefs } from 'pinia';

let openMenu = ref(false); // Create a reactive variable 'openMenu' initialized to false, used to control the visibility of a menu.

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
            @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer' : 'bg-black rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer'"
            class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
        >

            <div class="flex items-center">
                <img 
                    class="rounded-full"
                    width="40"
                    height="40"
                    src="./assets/profile-pic.jpg" 
                    alt="User Profile Picture"
                >

                <div class="text-white text-[14px] ml-1.5 font-semibold">
                    <span>Dudu Inocencio</span>
                </div>
                
                <ChevronDown v-if="!openMenu" @click="openMenu=true" fillColor="#FFFF" :size="20" />
                <ChevronUp v-else="openMenu=false" fillColor="#FFFF" :size="20" />
            </div>
        </button>

        <span
            v-if="openMenu"
            class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[60px] right-[35px] p-1 cursor-pointer"
        >
            <ul class="text-gray-200 font-semibold text-[14px]">
                <ul class="text-gray-200 font-semibold text-[14px]">
                    <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
                    <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log out</li>
                </ul>
            </ul>
        </span>
    </div>

    
    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
            <img width="125" src="/images/icons/spotify-logo.png" alt="Spotify Logo">
    </div>

    <div class="my-8"></div>
            <ul>
                <MenuItem :iconSize="23" name="Home" iconString="home" pageUrl="/" />
                <MenuItem :iconSize="23" name="Home" iconString="home" pageUrl="/" />
            </ul>
</template>


