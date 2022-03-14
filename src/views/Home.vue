<template>
  <div>
    <ul>
      <li>AAAA</li>
    </ul>
    <img src="" alt="">
  {{ $t('test') }}
  </div>
  <button @click="tw">中文</button>
  <button @click="en">英文</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from 'vue-i18n'
const  locale  = useI18n()
function tw(){
  locale.locale.value ='tw'
}
function en(){
  locale.locale.value ='en'
}
</script>

<style scoped></style>
