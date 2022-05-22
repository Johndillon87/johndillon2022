<script setup>
defineProps({
  icon: String,
});
</script>

<template>
  <div :class="`inline mdi mdi-${icon}`"></div>
</template>
