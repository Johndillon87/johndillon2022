<template>
  <a :href="buttonConfig.href" :target="buttonConfig.newWindow ? '_blank' : ''">
    <button class="font-bold capitalize" type="button" :class="buttonClasses">
      <slot></slot>
    </button>
  </a>
</template>
<script setup>
const props = defineProps({
  buttonConfig: Object,
});
const buttonClasses = [
  props.buttonConfig.class,
  props.buttonConfig.buttonColor,
  props.buttonConfig.buttonSpacing,
];
buttonClasses.join(' ');
</script>
