<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  iconString: String,
  iconSize: Number,
  pageUrl: String,
  name: String
});

const { iconString, pageUrl, name, iconSize } = toRefs(props);

const icon = ref(null);
const textIsHover = ref(false);

watchEffect(() => {
  if (route.path === pageUrl.value) {
    icon.value = `${iconString.value}-active`;
    textIsHover.value = true;
  } else {
    icon.value = `${iconString.value}-inactive`;
    textIsHover.value = false;
  }
});

const isHover = () => {
  if (icon.value === `${iconString.value}-active`) return;

  if (icon.value === `${iconString.value}-inactive`) {
    icon.value = `${iconString.value}-inactive-hover`;
    textIsHover.value = true;
  } else if (icon.value === `${iconString.value}-inactive-hover`) {
    icon.value = `${iconString.value}-inactive`;
    textIsHover.value = false;
  }
};
</script>

<template>
  <li 
    class="flex items-center justify-start pb-4 cursor-pointer" 
    @mouseenter="isHover" 
    @mouseleave="isHover"
  >
    <img
      v-if="icon"
      :width="iconSize"
      :src="`/images/icons/${icon}.png`"
      alt="icon"
      @error="console.warn(`Imagem não encontrada: /images/icons/${icon}.png`)"
    />
    
    <div
      :class="[
        'font-semibold text-[14px] ml-4 mt-0.5',
        textIsHover ? 'text-white' : 'text-gray-400'
      ]"
    >
      <span :class="{ 'text-white': route.path === pageUrl }">{{ name }}</span>
    </div>
  </li>
</template>
