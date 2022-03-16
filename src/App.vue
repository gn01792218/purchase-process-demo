<template>
  <NavBar />
  <PuchaseStatus />
  <router-view />
</template>
<script setup lang="ts">
import NavBar from '@/component/nav/navBar.vue'
import PuchaseStatus from '@/component/PuchaseStatus/PuchaseStatus.vue'
</script>

