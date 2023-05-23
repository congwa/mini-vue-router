<template>
  <component :is="com"></component>
</template>
<script setup>

import { computed } from 'vue'
import { useRouter } from './router'

let router = useRouter()

const com = computed(() => {
  const route = router.routes.find((route) => {
      
      return route.path === router.current.value
  })
  return route ? route.component : null
})



</script>