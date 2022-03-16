<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="statusCode bg-accents-green text-white fs-5 d-flex justify-content-center align-items-center">{{statusCode}}</div>
      <div>{{description}}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
    statusCode:number,
    description:string,
}>()
//控制status Code的顏色改變


</script>

<style scoped></style>