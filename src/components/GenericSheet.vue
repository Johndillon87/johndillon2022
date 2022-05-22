<script setup>
const props = defineProps({
  sheetConfig: Object,
});
const classes = [
  props.sheetConfig.class,
  props.sheetConfig.color,
  props.sheetConfig.size,
];
classes.join(' ');
</script>

<template>
  <div :class="classes"></div>
</template>
