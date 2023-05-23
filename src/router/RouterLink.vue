<template>
  <a v-if="router.history.mode === 'hash'" :href="'#' + props.to">
      <slot />
  </a>
  <a v-else :href="'javascript:void(0)'" @click="router.push(props.to)"> <slot /> </a>
</template>
<script setup>
import { useRouter } from './router'
let props = defineProps({
  to: { type: String, required:true }
})

let router = useRouter()

</script>