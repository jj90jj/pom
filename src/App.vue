<template>
  <div id="app">
    <HeaderCmpt />
    <router-view />
    <FooterCmpt />
  </div>
</template>

<script>
import HeaderCmpt from '@/components/HeaderCmpt.vue'
import FooterCmpt from '@/components/FooterCmpt.vue'

export default {
  components: {
    HeaderCmpt,
    FooterCmpt
  }
}
</script>

<style>
@media (min-width: 1024px) {
  /* PC表示用のスタイル */
  body {
    font-size: 18px;
  }
}

@media (max-width: 1023px) {
  /* スマホ表示用のスタイル */
  body {
    font-size: 14px;
  }
}
</style>
