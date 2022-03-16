<template>
  <div class="d-flex justify-content-center mt-5">
      <Status :statusCode="1" :description="$t('puchaseStatus.code1.description')" />
      <div class="mt-2 ms-3 me-3">....................................................</div>
      <Status :statusCode="2" :description="$t('puchaseStatus.code2.description')" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Status from './Status.vue'



</script>

<style scoped></style>