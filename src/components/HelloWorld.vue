<template>
  <div>
    <img
      class="w-16 md:w-32 lg:w-48 rounded-full"
      src="../assets/1623171464703.jpg"
    />
  </div>

  <div class="text-xs md:text-2xl py-1 font-bold text-j-blue">
    Johnathon Dillon
  </div>
  <div class="text-xs md:text-2xl mb-2 font-bold text-j-yellow">
    Software Developer
  </div>

  <GenericButton
    v-for="button in buttons"
    :key="button.text"
    :buttonConfig="button"
    type="button"
    @click="handleButtonClick"
  >
    <span class="hidden md:inline-block px-2">{{ button.text }}</span>
    <GenericIcon v-if="button.icon" :icon="button.icon"></GenericIcon>
  </GenericButton>

  <div
    class="bg-third md:w-full md:h-full p-1 md:p-2 m-2 mb-4 border-l-4 border-left border-primary font-bold rounded"
  >
    <p class="text-xs md:text-xl text-second">
      I'm a software developer that loves learning new things and implementing
      them where I can.
    </p>
  </div>

  <GenericSheet
    v-for="sheet in sheets"
    :key="sheet.color"
    :sheetConfig="sheet"
  ></GenericSheet>

  <WorkHistory />
</template>
<script setup>
import GenericIcon from './GenericIcon.vue';
import GenericButton from './GenericButton.vue';
import GenericSheet from './GenericSheet.vue';
import WorkHistory from './WorkHistory.vue';

const sheets = [
  {
    color: 'bg-primary',
    class: 'box-border cursor-pointer inline-block border border-black',
    size: 'h-3 w-3 m-1',
  },
  {
    color: 'bg-second',
    class: 'box-border cursor-pointer inline-block border border-black',
    size: 'h-3 w-3 m-1',
  },
  {
    color: 'bg-third',
    class: 'box-border cursor-pointer inline-block border border-black',
    size: 'h-3 w-3 m-1',
  },
  {
    color: 'bg-fourth',
    class: 'box-border cursor-pointer inline-block border border-black',
    size: 'h-3 w-3 m-1',
  },
  {
    color: 'bg-fifth',
    class: 'box-border cursor-pointer inline-block border border-black',
    size: 'h-3 w-3 m-1',
  },
];

const buttons = [
  {
    text: 'Download Resume',
    buttonColor:
      'bg-gradient-to-r from-j-light-blue to-j-blue hover:from-j-blue hover:to-j-light-blue',
    buttonSpacing: 'px-2 py-1 m-1 md:px-5 md:m-3',
    class: 'text-white rounded-3xl',
    icon: 'file-download',
    href: 'https://drive.google.com/uc?export=download&id=1IcWmIk6UPUjMQzv_f8wRZPjxfXRy6Wnr',
  },
  {
    text: 'Github',
    buttonColor:
      'bg-gradient-to-r from-j-light-yellow to-j-yellow hover:from-j-yellow hover:to-j-light-yellow',
    buttonSpacing: 'px-2 py-1 m-1 md:px-5 md:m-3',
    class: 'text-white rounded-3xl',
    icon: 'github',
    href: 'https://github.com/Johndillon87',
    newWindow: true,
  },
  {
    text: 'Linkedin',
    buttonColor:
      'bg-gradient-to-r from-j-light-blue to-j-blue hover:from-j-blue hover:to-j-light-blue',
    buttonSpacing: 'px-2 py-1 m-1 md:px-5 md:m-3',
    class: 'text-white rounded-3xl',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/johnathondillon8722/',
    newWindow: true,
  },
];
</script>
